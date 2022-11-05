import { PromptInstance } from "@prisma/client";
import { Card } from "@ui/Card/Card";
import { CardText } from "@ui/Card/CardText";
import { CardTitle } from "@ui/Card/CardTitle";
import { CardWithImage } from "@ui/Card/CardWithImage";
import { getTranslations } from "../lib/translationUtils";
import { PromptInstanceWithUsernameAndTranslations } from "../lib/types";

const test = [
  {
    name: "Santeri",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, harum, tenetur cum vitae eum corrupti ad facilis veritatis provident, delectus rem. Quidem soluta illum corrupti.",
    imageSrc: "/happy_bear.svg",
  },
  {
    name: "Santeri",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, harum, tenetur cum vitae eum corrupti ad facilis veritatis provident, delectus rem. Quidem soluta illum corrupti.",
    imageSrc: "/happy_bear.svg",
  },
  {
    name: "Santeri",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, harum, tenetur cum vitae eum corrupti ad facilis veritatis provident, delectus rem. Quidem soluta illum corrupti.",
    imageSrc: "/happy_bear.svg",
  },
  {
    name: "Santeri",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, harum, tenetur cum vitae eum corrupti ad facilis veritatis provident, delectus rem. Quidem soluta illum corrupti.",
    imageSrc: "/happy_bear.svg",
  },
];

type Props = {
  friendPromps: PromptInstanceWithUsernameAndTranslations[];
};

const Feed = ({ friendPromps }: Props) => {
  return (
    <div className="w-full">
      {friendPromps.map((p) => {
        const translations = getTranslations(p.prompt.translations);

        return (
          <div className="pb-4" key={p.id}>
            <Card>
              <CardTitle>{p.user.name}</CardTitle>
              {p.imageSecureURL ? (
                <CardWithImage imageUrl={p.imageSecureURL}>
                  <div className="font-bold mb-1">{translations.title}</div>
                  {p.inputValue}
                </CardWithImage>
              ) : (
                <CardText>
                  <div className="font-bold mb-1">{translations.title}</div>
                  {p.inputValue}
                </CardText>
              )}
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
