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
    {
      activityLevel: 10,
      rarityLevel: 0,
      feedbackType: "markCompleted",
      translations: {
        en: {
          title: "Do 10 push-ups",
          description: "Small exercise in the middle of day helps you to stay focused. I'm proud of how active you are!",
          inputTitle: "",
          imageButton: "",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "Tee 10 punnerrusta",
          description: "Pieni taukojumppa keskellä päivää auttaa keskittymään. Olen ylpeä, kuinka aktiivinen olet!",
          inputTitle: "",
          imageButton: "",
          submit: "Tallenna!",
          enumValues: {}
        },
      }
    },
    {
      activityLevel: 20,
      rarityLevel: 0,
      feedbackType: "markCompleted",
      translations: {
        en: {
          title: "Do 20 push-ups",
          description: "Small exercise in the middle of day helps you to stay focused. I'm proud of how active you are!",
          inputTitle: "",
          imageButton: "",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "Tee 20 punnerrusta",
          description: "Pieni taukojumppa keskellä päivää auttaa keskittymään. Olen ylpeä, kuinka aktiivinen olet!",
          inputTitle: "",
          imageButton: "",
          submit: "Tallenna!",
          enumValues: {}
        },
      }
    },
    {
      activityLevel: 10,
      rarityLevel: 10,
      feedbackType: "markCompleted",
      translations: {
        en: {
          title: "10 min body weight exercise",
          description: "Getting enough pshyical exercise gives you energy helps you to relive stress. Here is an example you can use: https://www.self.com/story/the-do-anywhere-calorie-crushing-10-minute-circuit I'm proud of how active you are!",
          inputTitle: "",
          imageButton: "",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "10 minuutin kehonpainotreeni",
          description: "Fyysinen harjoittelu antaa energiaa ja auttaa jaksamaan arjessa. Tässä yksi esimerkki: https://www.self.com/story/the-do-anywhere-calorie-crushing-10-minute-circuit Olen ylpeä, kuinka aktiivinen olet!",
          inputTitle: "",
          imageButton: "",
          submit: "Tallenna!",
          enumValues: {}
        },
      }
    },
    {
      activityLevel: 20,
      rarityLevel: 10,
      feedbackType: "markCompleted",
      translations: {
        en: {
          title: "15 min body weight exercise",
          description: "Getting enough pshyical exercise gives you energy helps you to relive stress. Here is an example you can use: https://www.outsideonline.com/health/training-performance/15-minute-bodyweight-workout-every-outdoor-athlete-needs-their-training-routine/ I'm proud of how active you are!",
          inputTitle: "",
          imageButton: "",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "15 minuutin kehonpainotreeni",
          description: "Fyysinen harjoittelu antaa energiaa ja auttaa jaksamaan arjessa. Tässä yksi esimerkki: https://www.outsideonline.com/health/training-performance/15-minute-bodyweight-workout-every-outdoor-athlete-needs-their-training-routine/ Olen ylpeä, kuinka aktiivinen olet!",
          inputTitle: "",
          imageButton: "",
          submit: "Tallenna!",
          enumValues: {}
        },
      }
    },
    {
      activityLevel: 10,
      rarityLevel: 0,
      feedbackType: "markCompleted",
      translations: {
        en: {
          title: "Get some fresh air",
          description: "Take a break and walk around the building. I'm proud of how active you are!",
          inputTitle: "",
          imageButton: "",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "Haukkaa hetki happea",
          description: "Pidä tauko ja kävele rakennuksen ympäri. Olen ylpeä siitä, kuinka aktiivinen olet!",
          inputTitle: "",
          imageButton: "",
          submit: "Tallenna!",
          enumValues: {}
        },
      }
    },
    {
      activityLevel: 20,
      rarityLevel: 0,
      feedbackType: "markCompleted",
      translations: {
        en: {
          title: "Get some fresh air",
          description: "Take a break and walk around the building. I'm proud of how active you are!",
          inputTitle: "",
          imageButton: "",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "Haukkaa hetki happea",
          description: "Pidä tauko ja kävele rakennuksen ympäri. Olen ylpeä siitä, kuinka aktiivinen olet!",
          inputTitle: "",
          imageButton: "",
          submit: "Tallenna!",
          enumValues: {}
        },
      }
    },
    {
      activityLevel: 20,
      rarityLevel: 10,
      feedbackType: "freeTextWithPic",
      translations: {
        en: {
          title: "Go for a walk",
          description: "Walk for at least 30 minutes in your neighbourhood and pay attention to you surroundings. Maybe you will spot a squirrel or some other animal on your way.",
          inputTitle: "How do you feel after the walk?",
          imageButton: "Upload a photo from your walk",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "Käy kävelyllä",
          description: "Kävele vähintään 30 minuutin ajan naapurustossasi ja havainnoi ympäristöäsi. Hyvällä tuurilla satut näkemään oravan tai jonkun muun eläimen",
          inputTitle: "Miltä tuntuu kävelyn jälkeen?",
          imageButton: "Lataa kuva kävelyltäsi",
          submit: "Tallenna!",
          enumValues: {}
        },
      }
    },
    {
      activityLevel: 10,
      rarityLevel: 10,
      feedbackType: "freeTextWithPic",
      translations: {
        en: {
          title: "Go for a walk",
          description: "Walk for at least 15 minutes in your neighbourhood and pay attention to you surroundings. Maybe you will spot a squirrel or some other animal on your way.",
          inputTitle: "How do you feel after the walk?",
          imageButton: "Upload a photo from your walk",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "Käy kävelyllä",
          description: "Kävele vähintään 15 minuutin ajan naapurustossasi ja havainnoi ympäristöäsi. Hyvällä tuurilla satut näkemään oravan tai jonkun muun eläimen",
          inputTitle: "Miltä tuntuu kävelyn jälkeen?",
          imageButton: "Lataa kuva kävelyltäsi",
          submit: "Tallenna!",
          enumValues: {}
        },
      }
    },
    {
      activityLevel: 10,
      rarityLevel: 20,
      feedbackType: "markCompleted",
      translations: {
        en: {
          title: "Sing in the shower",
          description: "Sing like nobody is listening because nobody is listening. Unleash your inner rockstar and take some time for yourself",
          inputTitle: "",
          imageButton: "",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "Laula suihkussa",
          description: "Vapauta sisäinen rokkistarasi ja ota aikaa itsellesi.",
          inputTitle: "",
          imageButton: "",
          submit: "Tallenna!",
          enumValues: {}
        },
      }
    },
    {
      activityLevel: 20,
      rarityLevel: 20,
      feedbackType: "markCompleted",
      translations: {
        en: {
          title: "Sing in the shower",
          description: "Sing like nobody is listening because nobody is listening. Unleash your inner rockstar and take some time for yourself",
          inputTitle: "",
          imageButton: "",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "Laula suihkussa",
          description: "Vapauta sisäinen rokkistarasi ja ota aikaa itsellesi.",
          inputTitle: "",
          imageButton: "",
          submit: "Tallenna!",
          enumValues: {}
        },
      }
    },
    {
      activityLevel: 10,
      rarityLevel: 30,
      feedbackType: "freeText",
      translations: {
        en: {
          title: "Complete an Iron Man",
          description: "It's important to have concrete goals in your life. Write down what you want to achive in the future.",
          inputTitle: "What are you goals for the following year?",
          imageButton: "",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "Suorita Iron Man",
          description: "On tärkeätä olla konkreettisia tavoitteita elämässä. Kirjoita ylös, mitä haluat saavuttaa tulevaisuudessa.",
          inputTitle: "Mitä haluat saavuttaa ensi vuoden aikana?",
          imageButton: "",
          submit: "Tallenna!",
          enumValues: {}
        },
      }
    },
    {
      activityLevel: 20,
      rarityLevel: 30,
      feedbackType: "freeText",
      translations: {
        en: {
          title: "Complete an Iron Man",
          description: "It's important to have concrete goals in your life. Write down what you want to achive in the future.",
          inputTitle: "What are you goals for the following year?",
          imageButton: "",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "Suorita Iron Man",
          description: "On tärkeätä olla konkreettisia tavoitteita elämässä. Kirjoita ylös, mitä haluat saavuttaa tulevaisuudessa.",
          inputTitle: "Mitä haluat saavuttaa ensi vuoden aikana?",
          imageButton: "",
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
          title: "List things you are good at",
          description: "You are talented, smart and skilful in many ways. Write down a few of them. It can be something you learned reasently or trait you were born with.",
          inputTitle: "Tell me 3-5 things you have succeeded in this week",
          imageButton: "",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "Listaa asioita joissa olet hyvä",
          description: "Olet lahjakas, fiksu ja taitava monella tavalla. Kirjoita ylös pari niistä. Se voi olla jotain, mitä olet oppinut viimeaikoina tai ominaisuus joka sinulla on ollut aina.",
          inputTitle: "Kerro minulle 3-5 asiaa, joissa olet tällä viikolla onnistunut",
          imageButton: "",
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
          title: "List things you enjoy doing",
          description: "It's important to prioritize thing fun and rewarding thing in your life. What has been fun lately?",
          inputTitle: "Tell me 3-5 things you have enjoyed this week",
          imageButton: "",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "Listaa asioita joita tykkäät tehdä",
          description: "On tärkeä priorisoida asioita, jotka ovat hauskoja ja palkitsevia asioita elämässä. Mistä olet nauttinut viime aikoina?",
          inputTitle: "Kerro minulle 3-5 asiaa, joista olet tykännyt tällä viikolla.",
          imageButton: "",
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
          title: "10 min meditation",
          description: "Meditation and mindfulness are good ways to cope with stress and increase self-awarness. Here is an example you can follow: https://www.youtube.com/watch?v=U9YKY7fdwyg",
          inputTitle: "How was it?",
          imageButton: "",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "10 minuutin meditaatio",
          description: "Meditaatio ja mindfulness ovat hyviä tapoja hallita stressiä ja lisätä itsetietoisuutta. Tässä on esimerkki jota voit seurata: https://www.youtube.com/watch?v=U9YKY7fdwyg",
          inputTitle: "Miltä tuntui?",
          imageButton: "",
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
          title: "Put on your favorite song",
          description: "Listen to a song that you really like and try to focus purely on the music. Do you find something new from a familiar song?",
          inputTitle: "Tell me about the piece you chose",
          imageButton: "",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "Kuuntele lempikappaleesi",
          description: "Laita soimaan jokin laulu, josta pidät kovasti and yritä keskittyä pelkästään musiikkiin. Löydätkö tutusta kappaleesta vielä jotain uutta?",
          inputTitle: "Kerro kappaleesta, jonka kuuntelit",
          imageButton: "",
          submit: "Tallenna!",
          enumValues: {}
        },
      }
    },
    {
      activityLevel: 10,
      rarityLevel: 0,
      feedbackType: "markCompleted",
      translations: {
        en: {
          title: "Do 10 squats",
          description: "Small exercise in the middle of day helps you to stay focused. I'm proud of how active you are!",
          inputTitle: "",
          imageButton: "",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "Tee 10 kyykkyä",
          description: "Small exercise in the middle of day helps you to stay focused. I'm proud of how active you are!",
          inputTitle: "",
          imageButton: "",
          submit: "Tallenna!",
          enumValues: {}
        },
      }
    },
    {
      activityLevel: 20,
      rarityLevel: 0,
      feedbackType: "markCompleted",
      translations: {
        en: {
          title: "Do 20 squats",
          description: "Small exercise in the middle of day helps you to stay focused. I'm proud of how active you are!",
          inputTitle: "",
          imageButton: "",
          submit: "Save!",
          enumValues: {}
        },
        fi: {
          title: "Tee 20 kyykkyä",
          description: "Small exercise in the middle of day helps you to stay focused. I'm proud of how active you are!",
          inputTitle: "",
          imageButton: "",
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
