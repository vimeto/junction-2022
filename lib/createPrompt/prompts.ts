type PromptType = {
  activityLevel: number;
  rarityLevel: number;
  feedbackType: "freeTextWithPic" | "freeText" | "multipleChoise" | "markCompleted";
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

const seedPrompts = async () => {
  const dataA: PromptType[] = [
    {
      activityLevel: 20,
      rarityLevel: 10,
      feedbackType: "freeTextWithPic",
      translations: {
        en: {
          title: "Go walking outside with friend",
          description: "Go walking now pls",
          inputTitle: "How did you like the walk",
          imageButton: "Upload pic",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "Mene kävelemään broidin kanssa",
          description: "Käyppä vaeltamassa",
          inputTitle: "Miten pidit kävelystä",
          imageButton: "Lataa kuva",
          submit: "Tallenna!",
          enumValues: {}
        },
      }
    },
  ]
}

export {
  seedPrompts
};
