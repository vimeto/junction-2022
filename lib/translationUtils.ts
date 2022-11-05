import { Prisma } from ".prisma/client";
import { defaultLocale } from "./types";

export const getTranslations = (
  translations: Prisma.JsonValue,
  locale?: string
) => {
  try {
    return (translations as Record<string, any>)[locale ?? defaultLocale] as {
      description: string;
      imageButton: string;
      inputTitle: string;
      submit: string;
      title: string;
    };
  } catch (e) {
    return {
      description: "",
      imageButton: "",
      inputTitle: "",
      submit: "",
      title: "",
    };
  }
};
