import bcrypt from "bcryptjs";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const seedUsers = async () => {
  const salt = await bcrypt.genSalt(10);

  const data = {
    name: "Root User",
    email: "root.user@gmail.com",
    passwordDigest: await bcrypt.hash("password", salt)
  }

  await prisma.user.create({ data })
}

const seed = async () => {
  await seedUsers();
}

seed();
