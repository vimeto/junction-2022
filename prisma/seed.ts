import bcrypt from "bcryptjs";
import { PrismaClient } from '@prisma/client';
import { createPrompt } from "../lib/app/createPrompt";
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
  const dataA = {
    activityLevel: 20,
    rarityLevel: 10,
    feedbackType: "freeTextWithPic" as "freeText" | "freeTextWithPic" | "multipleChoise" | "markCompleted",
    translations: {
      en: {
        title: "Go walking outside with friend",
        description: "Go walking now pls",
        inputTitle: "How did you like the walk",
        imageButton: "Upload pic",
        submit: "Save!",
        enumValues: {} as Record<number, string>
      },
      fi: {
        title: "Mene kävelemään broidin kanssa",
        description: "Käyppä vaeltamassa",
        inputTitle: "Miten pidit kävelystä",
        imageButton: "Lataa kuva",
        submit: "Tallenna!",
        enumValues: {} as Record<number, string>
      },
    }
  }

  const dataB = {
    activityLevel: 10,
    rarityLevel: 10,
    feedbackType: "freeText"  as "freeText" | "freeTextWithPic" | "multipleChoise" | "markCompleted",
    translations: {
      en: {
        title: "Take a nap",
        description: "You are tired, sleep pls",
        inputTitle: "How was it",
        submit: "Save",
        imageButton: "",
        enumValues: {},
      },
      fi: {
        title: "Mene päikkäreille",
        description: "Nyt päikkäreille broidi",
        inputTitle: "Miltä tuntui päikkärit",
        submit: "Tallenna!",
        imageButton: "",
        enumValues: {},
      },
    }
  }
  // const b = await prisma.prompt.create({
  //   data: {
  //     activityLevel: 10,
  //     rarityLevel: 10,
  //     feedbackType: "freeText",
  //     translations: {
  //       en: {
  //         title: "Go to sleep",
  //         description: "You have been working hard, now please go to sleep",
  //         inputTitle: "What did you feel about sleeping",
  //         submit: "Save!",
  //       },
  //       fi: {
  //         title: "Mene nukkumaan",
  //         description: "Olet ollut pitkään ylhäällä, nyt mene nukkumaan",
  //         inputTitle: "Miltä tuntui nukkua",
  //         submit: "Tallenna!",
  //       },
  //     }
  //   }
  // });

  // const c = await prisma.promptConfiguration.create({
  //   data: {
  //     name: "main-prompt-configuration",
  //     configuration: {
  //       [a.activityLevel]: {
  //         [a.rarityLevel]: [a.id]
  //       },
  //       [b.activityLevel]: {
  //         [b.rarityLevel]: [b.id]
  //       },
  //     }
  //   }
  // })

  const aId = await createPrompt(dataA);
  const bId = await createPrompt(dataB);

  return [aId, bId]
}

const seedPromptInstances = async (listOfIds: (string | undefined)[]) => {
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

  const pc = await prisma.promptConfiguration.findFirst({})

  // Object.values(pc).forEach(a => console.log(a))
}

seed();
