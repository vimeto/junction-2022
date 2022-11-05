import { Prisma } from "@prisma/client";
import prisma from "../prisma";

type PromptType = {
  activityLevel: number;
  rarityLevel: number;
  feedbackType: "freeTextWithPic" | "freeText" | "multipleChoice" | "markCompleted";
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
  }
}


const createPrompt = async (data: PromptType) => {

  const a = data.feedbackType

  const prompt = await prisma.prompt.create({
    data
  });

  return prompt.id

}

export {
  createPrompt
};
