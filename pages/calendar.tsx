import { Prompt, PromptInstance, User } from "@prisma/client";
import { Card } from "@ui/Card/Card";
import { CardText } from "@ui/Card/CardText";
import { CardTitle } from "@ui/Card/CardTitle";
import { CardWithImage } from "@ui/Card/CardWithImage";
import { format } from "date-fns";
import { NextPage } from "next";
import { getServerSideProps as gSSP } from "../lib/calendar/utils";
import { getTranslations } from "../lib/translationUtils";
import { PromptInstanceWithPrompt } from "../lib/types";

export const getServerSideProps = gSSP;

type PromptInstances = PromptInstanceWithPrompt[];

const Calendar: NextPage<{ promptInstances: PromptInstances }> = ({
  promptInstances,
}) => {
  console.log(promptInstances);

  return (
    <div className="w-11/12 mx-auto flex justify-center flex-col items-center">
      <div className="font-bold text-2xl my-4">Calendar</div>
      <div className="w-full">
        {promptInstances.map((p) => {
          const translations = getTranslations(p.prompt.translations);

          return (
            <div className="pb-4" key={p.id}>
              <Card>
                <CardTitle>{format(new Date(p.date), "dd-MM-yyyy")}</CardTitle>
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
    </div>
  );
};

export default Calendar;
