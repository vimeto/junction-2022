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

const prompts: PromptType[] = [
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
  {
    activityLevel: 0,
    rarityLevel: 0,
    feedbackType: "freeText",
    translations: {
      en: {
        title: "Create a gratitude list with 3-5 items",
        description: "Remember to focus on things you most value!",
        inputTitle: "What are you thankful for today?",
        imageButton: "",
        submit: "Save!",
        enumValues: {}
      },
      fi: {
        title: "Listaa 3-5 asiaa, joista olet kiitollinen",
        description: "On tärkeä tiedostaa asiat, joista olet kiitollinen. Muista keskittyä asioihin, joita eniten arvostat!",
        inputTitle: "Mistä olet tänään kiitollinen?",
        imageButton: "Lataa kuva",
        submit: "Tallenna!",
        enumValues: {}
      },
    }
  },
  {
    activityLevel: 0,
    rarityLevel: 0,
    feedbackType: "freeText",
    translations: {
      en: {
        title: "Close all unnecessary tabs on your computer",
        description: "Focusing on one thing at a time helps you concentrate, frees up mental space and reduces stress. ",
        inputTitle: "How do you feel?",
        imageButton: "",
        submit: "Save!",
        enumValues: {}
      },
      fi: {
        title: "Sulje kaikki turhat välilehdet",
        description: "Yhteen asiaan keskittyminen auttaa keskittymään ja vähentää stressiä",
        inputTitle: "Miltä siivottu työpöytä tuntuu?",
        imageButton: "",
        submit: "Tallenna!",
        enumValues: {}
      },
    }
  },
  {
    activityLevel: 0,
    rarityLevel: 0,
    feedbackType: "freeTextWithPic",
    translations: {
      en: {
        title: "Drink a full glass of water",
        description: "Remember to hydrate and keep track of your water consumption during the day!",
        inputTitle: "How much water have you drunk today?",
        imageButton: "Insert a photo of your waterbottle",
        submit: "Save!",
        enumValues: {}
      },
      fi: {
        title: "Juo täysi lasillinen vettä",
        description: "Muista nesteytys ja huolehtia, että juot tarpeeksi vettä päivän aikana",
        inputTitle: "Paljonko vettä olet juonut tänään?",
        imageButton: "Lataa kuva vesipullostasi",
        submit: "Tallenna!",
        enumValues: {}
      },
    }
  },
  {
    activityLevel: 0,
    rarityLevel: 10,
    feedbackType: "freeText",
    translations: {
      en: {
        title: "Call one of your parents or someone else close to you",
        description: "It's important to keep in touch with your close ones. Remember that you always have someone you can talk to and who cares about you. At least I do :)",
        inputTitle: "What did you talk about?",
        imageButton: "",
        submit: "Save!",
        enumValues: {}
      },
      fi: {
        title: "Soita porukoillesi tai jollekin muulle läheiselle",
        description: "On tärkeä pysyä yhteydessä läheisiisi. Muista että sinulla on aina joka jolle puhua ja joka välittää sinusta. Ainakin minä välitän :)",
        inputTitle: "Mistä puhuitte?",
        imageButton: "",
        submit: "Tallenna!",
        enumValues: {}
      },
    }
  },
  {
    activityLevel: 0,
    rarityLevel: 10,
    feedbackType: "freeTextWithPic",
    translations: {
      en: {
        title: "Take a power nap",
        description: "It's okay to rest once in a while. Your brain works much better after a 15 - 25 minute reset.",
        inputTitle: "Do you feel rested today?",
        imageButton: "Show me where you slept :)",
        submit: "Save!",
        enumValues: {}
      },
      fi: {
        title: "Ota päikkärit",
        description: "On täysin sallittua levätä välillä. Aivot toimivat paljon paremmin 15 - 25 minuutin levon jälkeen",
        inputTitle: "Onko sinulla tänään levännyt olo?",
        imageButton: "Näytä minulle missä nukui? :)",
        submit: "Tallenna!",
        enumValues: {}
      },
    }
  },
  {
    activityLevel: 0,
    rarityLevel: 20,
    feedbackType: "freeTextWithPic",
    translations: {
      en: {
        title: "Reward yourself with a treat",
        description: "You deserve now an epic treat. Buy yourself an icecream of your choice and think about the things you have achieved this week.",
        inputTitle: "What is your favorite icecream flavor?",
        imageButton: "Upload a pic of your epic treat",
        submit: "Save!",
        enumValues: {}
      },
      fi: {
        title: "Palkitse itsesi herkkuvälipalalla",
        description: "Nyt ansaitset eeppisen herkkuvälipalan! Hanki itsellesi lempijäätelöäsi ja mieti mitä kaikkea olet saanut tällä viikolla jo aikaiseksi.",
        inputTitle: "Mikä on lempi jäätelömakusi?",
        imageButton: "Lataa kuva eeppisestä herkkuannoksesta",
        submit: "Tallenna!",
        enumValues: {}
      },
    }
  },
  {
    activityLevel: 0,
    rarityLevel: 20,
    feedbackType: "freeTextWithPic",
    translations: {
      en: {
        title: "Go out with a friend",
        description: "Ask a good friend of yours to hang out today or tomorrow. You can for example eat lunch or go for walk together. Keeping up with your friends is important and rewarding.",
        inputTitle: "What did you plan to do?",
        imageButton: "Upload something nice :)",
        submit: "Save!",
        enumValues: {}
      },
      fi: {
        title: "Mene ulos kaverisi kanssa",
        description: "Kysy hyvää kaveriasi hengaamaan kanssasi tänään tai huomenna. Voitte esimerkiksi mennä yhdessä lounaalle tai kävelylle. Yhteydenpito kavereihisi on tärkeää ja palkitsevaa.",
        inputTitle: "Mitä päätitte tehdä yhdessä?",
        imageButton: "Lataa joku hauska kuva :)",
        submit: "Tallenna!",
        enumValues: {}
      },
    }
  },
  {
    activityLevel: 0,
    rarityLevel: 30,
    feedbackType: "freeTextWithPic",
    translations: {
      en: {
        title: "Call someone you haven't talked to in ages",
        description: "What's up? Haven't talk to you in ages! Reaching out to a childhood friend or relative can make their day a whole lot better.",
        inputTitle: "What did you talk about?",
        imageButton: "Upload something nice :)",
        submit: "Save!",
        enumValues: {}
      },
      fi: {
        title: "Ota yhteyttä kaveriin jolle et ole puhunut piiiitkään aikaan",
        description: "Kuulumisten kysyminen ilahduttaa kaveriasi ja saatatte löytää paljonkin yhteisiä kiinnostuksen kohteita. Voit soittaa esimerkiksi lapsuuden kaverilla tai sukulaiselle.",
        inputTitle: "Mistä juttelitte?",
        imageButton: "Lataa joku hauska kuva :)",
        submit: "Tallenna!",
        enumValues: {}
      },
    }
  },
]

export {
  prompts
};
