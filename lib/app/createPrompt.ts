import { Prisma } from "@prisma/client";
import prisma from "../prisma";
import { FeedbackType } from "../types";

type PromptType = {
  activityLevel: number;
  rarityLevel: number;
  feedbackType: FeedbackType;
  translations: {
    en: {
      title: string;
      description: string;
      inputTitle: string;
      imageButton: string;
      submit: string;
      enumValues: Record<number, string>;
    };
    fi: {
      title: string;
      description: string;
      inputTitle: string;
      imageButton: string;
      submit: string;
      enumValues: Record<number, string>;
    };
  };
};

const createPrompt = async (data: PromptType) => {
  const a = data.feedbackType;

  const prompt = await prisma.prompt.create({
    data,
  });

  const promptConfiguration = await prisma.promptConfiguration.findFirst({
    where: {
      name: "main-prompt-configuration",
    },
  });

  if (!promptConfiguration) {
    return;
  }

  const d = promptConfiguration.configuration as Record<
    number,
    Record<number, string[]>
  >;

  const newData = {
    ...d,
    [prompt.activityLevel]: {
      ...d[prompt.activityLevel],
      [prompt.rarityLevel]: [
        ...new Set(
          d[prompt.activityLevel][prompt.rarityLevel].concat([prompt.id])
        ),
      ],
    },
  };

  await prisma.promptConfiguration.update({
    where: {
      id: promptConfiguration.id,
    },
    data: {
      configuration: newData,
    },
  });

  return prompt.id;
};

export { createPrompt };
