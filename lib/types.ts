import { Prisma, Prompt, PromptInstance, User } from "@prisma/client";

export const defaultLocale = "en";

export enum ActivityLevel {
  "High" = 20,
  "Medium" = 10,
  "Low" = 0,
}

export enum RarityLevel {
  "Legendary" = 30,
  "Epic" = 20,
  "Rare" = 10,
  "Common" = 0,
}

export enum TaskType {
  "Active",
  "Mindful",
}

export type FeedbackType =
  | "freeTextWithPic"
  | "freeText"
  | "multipleChoice"
  | "markCompleted";

export type PromptInstanceWithUsernameAndTranslations = PromptInstance & {
  user: { name: string };
  prompt: { translations: Prisma.JsonValue; rarityLevel: number };
};

export type PromptInstanceWithPrompt = PromptInstance & { prompt: Prompt };

export type UserWithPromptInstance = User & {
  promptInstances: PromptInstanceWithPrompt[];
};
