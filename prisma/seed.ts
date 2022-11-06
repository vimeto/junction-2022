import bcrypt from "bcryptjs";
import prisma from "../lib/prisma";
import { createPrompt } from "../lib/app/createPrompt";
import { prompts } from "../lib/createPrompt/prompts";
import { User } from "@prisma/client";

// const prisma = new PrismaClient();

const seedUsers = async () => {
  const salt = await bcrypt.genSalt(10);

  const mainuser =
    (await prisma.user.findUnique({
      where: {
        email: "root.user@gmail.com",
      },
    })) ||
    (await prisma.user.create({
      data: {
        name: "Root User",
        email: "root.user@gmail.com",
        passwordDigest: await bcrypt.hash("password", salt),
      },
    }));

  const secondUser =
    (await prisma.user.findUnique({
      where: {
        email: "second.user@gmail.com",
      },
    })) ||
    (await prisma.user.create({
      data: {
        name: "second User",
        email: "second.user@gmail.com",
        passwordDigest: await bcrypt.hash("password", salt),
      },
    }));

  await prisma.user.update({
    where: {
      id: mainuser.id,
    },
    data: {
      following: {
        connect: {
          id: secondUser.id,
        },
      },
    },
  });

  return [mainuser, secondUser];
};

const deletePrompts = async () => {
  await prisma.promptInstance.deleteMany();
  await prisma.prompt.deleteMany();
};

const seedPrompts = async () => {
  const datas = prompts;
  const ids = await Promise.all(
    datas.map(async (data) => await createPrompt(data))
  );

  // const aId = await createPrompt(dataA);
  // const bId = await createPrompt(dataB);

  console.log(ids);

  return ids;
};

const seedPromptInstances = async (
  listOfIds: (string | undefined)[],
  userA: User,
  userB: User
) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const beforeyesterday = new Date();
  beforeyesterday.setDate(beforeyesterday.getDate() - 1);

  const aaa = await prisma.promptInstance.create({
    data: {
      inputValue: "I liked this",
      shared: true,
      date: yesterday,
      prompt: {
        connect: {
          id: listOfIds[0],
        },
      },
      user: {
        connect: {
          id: userB.id,
        },
      },
    },
  });

  const bbb = await prisma.promptInstance.create({
    data: {
      inputValue: "This was exhausting",
      shared: true,
      date: beforeyesterday,
      prompt: {
        connect: {
          id: listOfIds[1],
        },
      },
      user: {
        connect: {
          id: userB.id,
        },
      },
    },
  });

  console.log(aaa, bbb);
};

const seed = async () => {
  const [mainuser, seconduser] = await seedUsers();
  await deletePrompts();
  const listOfPromptIds = await seedPrompts();
  await seedPromptInstances(listOfPromptIds, mainuser, seconduser);

  // console.log(btoa(process.env.STORAGE_PRIVATE_KEY_BASE || ""))
};

seed();
