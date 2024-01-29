/*import { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { userName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await prisma.$queryRaw`SELECT * FROM users`;
  console.log(result);

  try {
    const user = await prisma.users.create({
      data: {
        userName,
        email,
        hashedPassword, // Важно: Пароль нужно хешировать перед сохранением в реальном приложении!
      },
    });

    return res.status(200).json(user);
  } catch (error) {
    console.error('Error inserting user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
*/
