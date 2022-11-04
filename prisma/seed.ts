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

const seedPrompts = async () => {
  const a = await prisma.prompt.create({
    data: {
      activityLevel: 20,
      rarityLevel: 10,
      feedbackType: "freeTextWithPic",
      translations: {
        en: {
          title: "Go on a hike",
          description: "You should go on a hike now",
          inputTitle: "How did you like the hike",
          imageButton: "Upload pic",
          submit: "Save!",
        },
        fi: {
          title: "Mene vaeltamaan",
          description: "Käy vaeltamassa",
          inputTitle: "Miltä tuntui käydä vaeltamassa",
          imageButton: "Käytä kuva",
          submit: "Tallenna!",
        },
      }
    }
  });

  const b = await prisma.prompt.create({
    data: {
      activityLevel: 10,
      rarityLevel: 10,
      feedbackType: "freeText",
      translations: {
        en: {
          title: "Go to sleep",
          description: "You have been working hard, now please go to sleep",
          inputTitle: "What did you feel about sleeping",
          submit: "Save!",
        },
        fi: {
          title: "Mene nukkumaan",
          description: "Olet ollut pitkään ylhäällä, nyt mene nukkumaan",
          inputTitle: "Miltä tuntui nukkua",
          submit: "Tallenna!",
        },
      }
    }
  });

  return [a.id, b.id]
}

const seedPromptInstances = async (listOfIds: string[]) => {
  await prisma.promptInstance.create({
    data: {
      inputValue: "this was nice",
      shared: true,
      prompt: {
        connect: {
          id: listOfIds[0]
        }
      },
      user: {
        connect: {
          email: "root.user@gmail.com"
        }
      }
    }
  })
}

const seed = async () => {
  // await seedUsers();
  const listOfPromptIds = await seedPrompts();
  await seedPromptInstances(listOfPromptIds);
}

seed();
