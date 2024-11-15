'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth, signIn } from '@/auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import axios, { AxiosError } from 'axios';

const apiMainUrl = process.env.NEXT_PUBLIC_API_MAIN_URL;
const apiMiniUrl = process.env.NEXT_PUBLIC_API_MINI_URL;
const apiRegisterUrl = process.env.NEXT_PUBLIC_API_REGISTR_URL;

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    id?: string[];
    customerId?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
  //  throw new Error('Failed to Delete Invoice');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

const CreateUser = z.object({
  id: z.string(),
  name: z.string({ invalid_type_error: 'Please input name.' }),
  email: z.string({ invalid_type_error: 'Please input email.' }),
  password: z.string({ invalid_type_error: 'Please input password.' }),
  confirmPassword: z.string({ invalid_type_error: 'Please input password.' }),
});

export type UserState = {
  errors?: {
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string | null;
};

export async function createUser(prevState: UserState, formData: FormData) {
  const validatedFields = CreateUser.safeParse({
    id: uuidv4(),
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create User.',
    };
  }

  const { id, name, email, password, confirmPassword } = validatedFields.data;

  const emailExist = await sql`SELECT email from users WHERE email = ${email}`;
  if (emailExist.rows[0]) {
    console.error(`Email - ${email} already exists`);
    return {
      errors: { email: ['Email already exists'] },
    };
  }

  if (password !== confirmPassword) {
    console.log('Passwords do not match');
    return {
      errors: { password: ['Password and Confirm Password do not match'] },
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await sql`
      INSERT INTO users (id, name, email, password)
      VALUES (${id}, ${name}, ${email}, ${hashedPassword})
    `;
    console.log('User inserted successfully.');
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create User.',
    };
  }
  revalidatePath('/');
  redirect('/success');
}

//BEGIN TEST REGISTR API

export async function handleEmailSubmitRegister(email: string) {
  if (!email) {
    console.error('Email can`t be empty.');
    return {
      errors: { email: ['Email can`t be empty.'] },
    };
    //throw new Error('Email не может быть пустым.');
  }

  const validateEmail = (email: string) => {
    const trimmedEmail = email.trim();
    const regExp = /^[^\s@,]+@[^,\s@]+(\.[^\s@.,]+)+$/;
    return (
      regExp.test(trimmedEmail.toLowerCase()) && !/\.{2,}/.test(trimmedEmail)
    );
  };

  if (!validateEmail(email)) {
    console.error('Input correct email');
    return {
      errors: { email: ['Input correct email'] },
    };
    //throw new Error('Введите корректный email.');
  }

  try {
    const emailValidation = await fetch(
      `${apiRegisterUrl}/Validation/email-exist`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: '*/*' },
        body: JSON.stringify(email),
      },
    );

    if (emailValidation.status === 200) {
      console.log(emailValidation.status, 'Email already exist');
      return {
        errors: { email: ['Email already exist.'] },
      };
    }
    const response = await fetch(`${apiRegisterUrl}/Registration/sendcode`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: '*/*' },
      body: JSON.stringify(email),
    });
  } catch (error) {
    console.error('OTP Code don`t send:', error);
    throw new Error('OTP Code don`t send.');
  }
}

const AddUser = z.object({
  login: z.string({ invalid_type_error: 'Please input login.' }),
  email: z.string({ invalid_type_error: 'Please input email.' }),
  otpcode: z
    .string({ invalid_type_error: 'Please input a valid OTP Code.' })
    .regex(/^\d{5}$/, { message: 'OTP Code must be exactly 5 digits.' }),
  password: z
    .string({ invalid_type_error: 'Please input password.' })
    .min(8, {
      message: 'Passwords must contains 8 or more symbols.',
    })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: 'Passwords must contains special symbols.',
    }),
  confirmPassword: z.string({
    invalid_type_error: 'Please input confirm password.',
  }),
  privacy_and_terms: z.string({
    invalid_type_error: 'Read and accept the Privacy Policy and Terms of Use.',
  }),
});

export type AddUserState = {
  errors?: {
    email?: string[];
    login?: string[];
    otpcode?: number[];
    password?: string[];
    confirmPassword?: string[];
    privacy_and_terms?: string[];
  };
  message?: string | null;
};

export async function addUser(prevState: AddUserState, formData: FormData) {
  const validatedFields = AddUser.safeParse({
    email: formData.get('email'),
    login: formData.get('email'),
    otpcode: formData.get('otpcode'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
    privacy_and_terms: formData.get('privacy_and_terms'),
  });

  if (!validatedFields.success) {
    // Собираем все ошибки
    const errors = validatedFields.error.flatten().fieldErrors;

    // Дополнительная проверка для логики, не учтенной в `zod`
    if (formData.get('password') !== formData.get('confirmPassword')) {
      errors.password = [...(errors.password || []), 'Passwords do not match.'];
    }

    return {
      errors,
      message: 'Validation Failed. Failed to Create User.',
    };
  }

  const { login, email, otpcode, password } = validatedFields.data;

  try {
    const response = await fetch(`${apiRegisterUrl}/Registration/adduser`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: '*/*' },
      body: JSON.stringify({ email, otpcode, password, login }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error:', errorData);
      if (errorData === 6) {
        return {
          errors: { otpcode: ['OTP Code not valid'] },
        };
      }
      if (errorData === 0) {
        return {
          errors: { email: ['Login already exists'] },
        };
      }
      //throw new Error(`Request failed with status ${response.status}`);
    }

    console.log('User add successfully.');
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create User.',
    };
  }
  revalidatePath('/');
  redirect('/signin');
}

//END TEST REGISTR API

//Begin recovery password

export async function handleEmailSubmitRecovery(email: string) {
  if (!email) {
    console.error('Email can`t be empty.');
    return {
      errors: { email: ['Email can`t be empty.'] },
    };
    //throw new Error('Email не может быть пустым.');
  }

  const validateEmail = (email: string) => {
    const trimmedEmail = email.trim();
    const regExp = /^[^\s@,]+@[^,\s@]+(\.[^\s@.,]+)+$/;
    return (
      regExp.test(trimmedEmail.toLowerCase()) && !/\.{2,}/.test(trimmedEmail)
    );
  };

  if (!validateEmail(email)) {
    console.error('Input correct email');
    return {
      errors: { email: ['Input correct email'] },
    };
    //throw new Error('Введите корректный email.');
  }

  try {
    const response = await fetch(`${apiRegisterUrl}/Registration/sendcode`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: '*/*' },
      body: JSON.stringify(email),
    });
  } catch (error) {
    console.error('OTP Code don`t send:', error);
    throw new Error('OTP Code don`t send.');
  }
}

const RecoveryUser = z.object({
  login: z.string({ invalid_type_error: 'Please input login.' }),
  email: z.string({ invalid_type_error: 'Please input email.' }),
  otpcode: z
    .string({ invalid_type_error: 'Please input a valid OTP Code.' })
    .regex(/^\d{5}$/, { message: 'OTP Code must be exactly 5 digits.' }),
  newPassword: z
    .string({ invalid_type_error: 'Please input password.' })
    .min(8, {
      message: 'Passwords must contains 8 or more symbols.',
    })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: 'Passwords must contains special symbols.',
    }),
  confirmPassword: z.string({
    invalid_type_error: 'Please input confirm password.',
  }),
});

export type RecoveryUserState = {
  errors?: {
    email?: string[];
    login?: string[];
    otpcode?: string[];
    newPassword?: string[];
    confirmPassword?: string[];
  };
  message?: string | null;
};

export async function recoveryUser(
  prevState: RecoveryUserState,
  formData: FormData,
) {
  const validatedFields = RecoveryUser.safeParse({
    email: formData.get('email'),
    login: formData.get('email'),
    otpcode: formData.get('otpcode'),
    newPassword: formData.get('newPassword'),
    confirmPassword: formData.get('confirmPassword'),
  });

  if (!validatedFields.success) {
    // Собираем все ошибки
    const errors = validatedFields.error.flatten().fieldErrors;

    // Дополнительная проверка для логики, не учтенной в `zod`
    if (formData.get('newPassword') !== formData.get('confirmPassword')) {
      errors.newPassword = [
        ...(errors.newPassword || []),
        'Passwords do not match.',
      ];
    }

    return {
      errors,
      message: 'Validation Failed. Failed to Create User.',
    };
  }

  const { login, email, otpcode, newPassword } = validatedFields.data;

  try {
    const response = await fetch(
      `${apiRegisterUrl}/Registration/changepassword`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: '*/*' },
        body: JSON.stringify({ email, otpcode, newPassword, login }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error:', errorData);
      if (errorData === 6) {
        return {
          errors: { otpcode: ['OTP Code not valid'] },
        };
      }
      if (errorData === 0) {
        return {
          errors: { login: ['Login already exists'] },
        };
      }
      //throw new Error(`Request failed with status ${response.status}`);
    }

    console.log('User password recovery successfully.');
  } catch (error) {
    return {
      message: 'Database Error: Failed to recovery User password.',
    };
  }
  revalidatePath('/');
  redirect('/signin');
}

//end recovery password

//BEGIN SIGNIN TEST

export async function handleEmailSubmitSign(email: string) {
  if (!email) {
    console.error('Email can`t be empty.');
    return {
      errors: { email: ['Email can`t be empty.'] },
    };
    //throw new Error('Email не может быть пустым.');
  }

  const validateEmail = (email: string) => {
    const trimmedEmail = email.trim();
    const regExp = /^[^\s@,]+@[^,\s@]+(\.[^\s@.,]+)+$/;
    return (
      regExp.test(trimmedEmail.toLowerCase()) && !/\.{2,}/.test(trimmedEmail)
    );
  };

  if (!validateEmail(email)) {
    console.error('Input correct email');
    return {
      errors: { email: ['Input correct email'] },
    };
    //throw new Error('Введите корректный email.');
  }

  try {
    const emailValidation = await fetch(
      `${apiRegisterUrl}/Validation/email-exist`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: '*/*' },
        body: JSON.stringify(email),
      },
    );

    if (emailValidation.status === 400) {
      console.log(emailValidation.status, 'Email not found');
      return {
        errors: { email: ['Email not found.'] },
      };
    }
    const response = await fetch(`${apiRegisterUrl}/Registration/sendcode`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: '*/*' },
      body: JSON.stringify(email),
    });
  } catch (error) {
    console.error('OTP Code don`t send:', error);
    throw new Error('OTP Code don`t send.');
  }
}

const SignUser = z.object({
  //id: z.string(),
  login: z.string({ invalid_type_error: 'Please input login.' }),
  email: z.string({ invalid_type_error: 'Please input email.' }),
  otpcode: z.string({ invalid_type_error: 'Please input OTP Code.' }),
  //password: z.string({ invalid_type_error: 'Please input password.' }),
  password: z.string({ invalid_type_error: 'Please input password.' }).min(8, {
    message: 'Please input correct password.',
  }),
});

export type SignUserState = {
  errors?: {
    email?: string[];
    login?: string[];
    otpcode?: string[];
    password?: string[];
  };
  message?: string | null;
};

export async function signUser(prevState: SignUserState, formData: FormData) {
  const validatedFields = SignUser.safeParse({
    //id: uuidv4(),
    email: formData.get('email'),
    login: formData.get('email'),
    otpcode: formData.get('otpcode'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create User.',
    };
  }

  //const { id, name, email, password, confirmPassword } = validatedFields.data;
  const { login, email, otpcode, password } = validatedFields.data;

  //const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const response = await fetch(`${apiRegisterUrl}/Registration/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: '*/*' },
      body: JSON.stringify({ email, otpcode, password, login }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error:', errorData);
      if (errorData === 6) {
        return {
          errors: { otpcode: ['OTP Code not valid'] },
        };
      }
      if (errorData === 12) {
        return {
          errors: { email: ['User not found'] },
        };
      }
      //throw new Error(`Request failed with status ${response.status}`);
    }

    const responseData = await response.json();
    console.log('User signin successfully.');
    console.log('Response:', responseData);
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create User.',
    };
  }
  //revalidatePath('/');
  //redirect('/login');
}

//END SIGNIN TEST

export async function createWallet(sessionId: string) {
  const apiMainUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await axios.post(
      `${apiMainUrl}/Wallet/create-wallet`,
      sessionId,
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );
    console.log(response);
    return { message: 'Successfully created wallet.' };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (
        axiosError.response &&
        axiosError.response.status === 400 &&
        axiosError.response.statusText === 'Bad Request'
      ) {
        console.error('Failed to create wallet:', error?.response?.data);
        return {
          status: 400,
          message: 'Failed to create wallet',
        };
      }
    }
    console.error('Failed to create wallet:', error);
    return { message: 'Failed to create wallet.' };
  }

  //revalidatePath('/dashboard/wallet/create');
  // redirect('/dashboard/wallet/create');
}

export async function createWalletEth(sessionId: string) {
  const apiMainUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await axios.post(`${apiMainUrl}/adduser`, sessionId, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    return { message: 'Successfully created wallet.' };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (
        axiosError.response &&
        axiosError.response.status === 400 &&
        axiosError.response.statusText === 'Bad Request'
      ) {
        console.error('Failed to create wallet:', error?.response?.data);
        return {
          status: 400,
          message: 'Failed to create wallet',
        };
      }
    }
    console.error('Failed to create wallet:', error);
    return { message: 'Failed to create wallet.' };
  }

  //revalidatePath('/dashboard/wallet/create');
  // redirect('/dashboard/wallet/create');
}

export async function createWalletUsdt(sessionId: string) {
  try {
    const response = await axios.post(`${apiMainUrl}/adduser`, sessionId, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    return { message: 'Successfully created wallet.' };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (
        axiosError.response &&
        axiosError.response.status === 400 &&
        axiosError.response.statusText === 'Bad Request'
      ) {
        console.error('Failed to create wallet:', error?.response?.data);
        return {
          status: 400,
          message: 'Failed to create wallet',
        };
      }
    }
    console.error('Failed to create wallet:', error);
    return { message: 'Failed to create wallet.' };
  }

  //revalidatePath('/dashboard/wallet/create');
  // redirect('/dashboard/wallet/create');
}

const CreateMerchant = z.object({
  merchant_name: z.string({ invalid_type_error: 'Please input name.' }),
});

export type MerchantState = {
  errors?: {
    merchant_name?: string[];
  };
  message?: string | null;
};

export async function createMerchant(
  prevState: MerchantState,
  formData: FormData,
) {
  const apiMainUrl = process.env.NEXT_PUBLIC_API_MAIN_URL;
  const session = await auth();
  const userId = session?.user?.id;
  const apiKey = session?.user?.apiKey;

  const validatedFields = CreateMerchant.safeParse({
    merchant_name: formData.get('merchant_name'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Merchant.',
    };
  }

  try {
    const response = await axios.post(
      `${apiMainUrl}/Wallet/create-wallet`,
      {
        nameWallet: validatedFields.data.merchant_name,
        status: true,
        typeCurency: 'BTC',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
          'X-Api-Key': apiKey,
        },
      },
    );

    console.log(response.data);

    const merchant_id = response.data.uniqGuid;

    if (merchant_id) {
      revalidatePath('/dashboard/merchants');
      redirect(`/dashboard/merchants/${merchant_id}`);
    }

    return { message: 'Successfully created wallet.' };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (
        axiosError.response &&
        axiosError.response.status === 400 &&
        axiosError.response.data === 6
      ) {
        console.error('Failed to create wallet:', error?.response?.data);
        return {
          errors: { merchant_name: ['Merchant already exists'] },
        };
      }
    }

    console.error('Failed to create wallet:', error);
    /*return {
      errors: { merchant_name: ['Failed to create wallet. Try again later'] },
    };*/
  }
}

//TESTS API START

async function testApiConnection(
  url: string,
  successMessage: string,
  badRequestMessage: string,
  errorMessage: string,
) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
        'X-Api-Key': 'secretApiKey',
      },
    });

    if (response.status === 200) {
      console.log(successMessage);
      return { status: 200, message: successMessage };
    } else if (response.status === 400) {
      console.error(badRequestMessage);
      return { status: 400, message: badRequestMessage };
    } else {
      console.error('Unexpected status code:', response.status);
      return {
        status: response.status,
        message: `Unexpected status code: ${response.status}`,
      };
    }
  } catch (error) {
    console.error(errorMessage, error);
    throw new Error(errorMessage);
  }
}

export async function testMainApiConnection() {
  return testApiConnection(
    `${apiMainUrl}/Batman/test-main-api-connection`,
    'Connected.',
    'Bad request',
    'Error occurred while connecting to the main API.',
  );
}

export async function testMainApiConnectionToMiniApi() {
  return testApiConnection(
    `${apiMainUrl}/Batman/test-btc-api-connection`,
    'Connected.',
    'Bad request',
    'Error occurred while connecting to the main API.',
  );
}

export async function testMainApiCoreConnection() {
  return testApiConnection(
    `${apiMainUrl}/Batman/test-bitcoin-api-bitcoincore-connection`,
    'Connected.',
    'Bad request',
    'Error occurred while connecting to the main API.',
  );
}

export async function testMiniApiConnection() {
  return testApiConnection(
    `${apiMiniUrl}/Batman/test-connection-api-btc`,
    'Connected.',
    'Bad request',
    'Error occurred while connecting to the main API.',
  );
}

export async function testMiniApiCoreConnection() {
  return testApiConnection(
    `${apiMiniUrl}/Batman/test-core-connection`,
    'Connected.',
    'Bad request',
    'Error occurred while connecting to the main API.',
  );
}

//TEST API END
