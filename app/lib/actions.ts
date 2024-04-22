'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import axios, { AxiosError } from 'axios';

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
  throw new Error('Failed to Delete Invoice');
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
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

/*const CreateWallet = FormSchema.omit({ id: true, date: true });

export type WalletState = {
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

export async function createWallet(prevState: WalletState, formData: FormData) {
  const validatedFields = CreateWallet.safeParse({
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

  revalidatePath('/dashboard/wallet');
  redirect('/dashboard/wallet');
}*/

export async function createWallet(sessionId: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    // Отправка запроса на API
    await axios.post(`${apiUrl}/AddClient?idClient=${sessionId}`);
    return { message: 'Successfully created wallet.' }; // Возвращаем сообщение об успешном создании кошелька
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      // Проверяем статус ответа и текст ошибки
      if (
        axiosError.response &&
        axiosError.response.status === 400 &&
        axiosError.response.statusText === 'Bad Request'
      ) {
        console.error('Failed to create wallet:', error?.response?.data);
        return {
          status: 400,
          message: `Failed to create wallet: ID - ${sessionId} already exists or has invalid format.`,
        }; // Возвращаем сообщение о неверном ID
      }
    }
    console.error('Failed to create wallet:', error);
    return { message: 'Failed to create wallet.' }; // Возвращаем сообщение об ошибке при создании кошелька
  }

  revalidatePath('/dashboard/wallet/create');
  redirect('/dashboard/wallet/create');
}

const CreateMerchant = z.object({
  merchant_id: z.string(),
  user_id: z.string({ invalid_type_error: 'Please input name.' }),
  merchant_name: z.string({
    invalid_type_error: 'Please input merchant name.',
  }),
});

export type MerchantState = {
  errors?: {
    user_id?: string[];
    merchant_name?: string[];
  };
  message?: string | null;
};

export async function createMerchant(
  prevState: MerchantState,
  formData: FormData,
) {
  const validatedFields = CreateMerchant.safeParse({
    merchant_id: uuidv4(),
    user_id: formData.get('user_id'),
    merchant_name: formData.get('merchant_name'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create User.',
    };
  }

  const { merchant_id, user_id, merchant_name } = validatedFields.data;

  const merchantNameExist = await sql`SELECT merchant_name from merchants`;
  if (merchantNameExist.rows[0]) {
    console.error(`This merchant name - ${merchantNameExist} already exists`);
    return {
      errors: { merchantNameExist: ['Merchant name already exists'] },
    };
  }

  try {
    await sql`
      INSERT INTO merchants (merchant_id, user_id, merchant_name)
      VALUES (${merchant_id}, ${user_id}, ${merchant_name})
    `;
    console.log('Merchant inserted successfully.');
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create User.',
    };
  }
  revalidatePath('/dashboard/merchants');
  redirect('/dashboard/merchants');
}
