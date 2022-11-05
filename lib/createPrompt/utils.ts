import { User } from "@prisma/client";
import prisma from "../prisma";
import { getRarityNumber } from "../prompts/createNew";

export const createNewPrompt = async (activityLevel: number, user: User) => {
  const today = new Date();

  // returns user with list of today's promptinstances
  const epicPromptInstance = await prisma.promptInstance.findMany({
    where: {
      prompt: {
        rarityLevel: 20,
      },
      userId: user.id,
    },
    orderBy: {
      date: "desc",
    },
    take: 1,
  });

  const legendaryPromptInstance = await prisma.promptInstance.findMany({
    where: {
      prompt: {
        rarityLevel: 30,
      },
      userId: user.id,
    },
    orderBy: {
      date: "desc",
    },
    take: 1,
  });

  console.log(epicPromptInstance);
  console.log(legendaryPromptInstance);

  const epicDate = epicPromptInstance?.at(0)?.date;
  const legendaryDate = legendaryPromptInstance?.at(0)?.date;

  const getdifference = (a: Date) =>
    (today.getTime() - a.getTime()) / (1000 * 3600 * 24);

  const daysSinceEpic: number = epicDate
    ? getdifference(epicDate)
    : getdifference(user.createdAt);
  const daysSinceLegendary: number = legendaryDate
    ? getdifference(legendaryDate)
    : getdifference(user.createdAt);

  const newRarityLevel = getRarityNumber(daysSinceLegendary, daysSinceEpic);

  const promptConfiguration = await prisma.promptConfiguration.findFirst({
    where: {
      name: "main-prompt-configuration",
    },
  });

  const a = promptConfiguration?.configuration as Record<
    number,
    Record<number, string[]>
  >;

  if (!a) {
    return { newPrompt: null };
  }

  const ids = a[activityLevel][newRarityLevel];
  const randomId = ids[Math.floor(Math.random() * ids.length)];

  const newPromptInstance = await prisma.promptInstance.create({
    data: {
      prompt: {
        connect: {
          id: randomId,
        },
      },
      user: {
        connect: {
          email: user.email || "",
        },
      },
      shared: false,
    },
    include: {
      prompt: true,
    },
  });

  return { newPrompt: newPromptInstance };
};
