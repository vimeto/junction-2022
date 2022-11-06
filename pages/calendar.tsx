import { Prompt, PromptInstance, User } from "@prisma/client";
import { Card } from "@ui/Card/Card";
import { CardText } from "@ui/Card/CardText";
import { CardTitle } from "@ui/Card/CardTitle";
import { CardWithImage } from "@ui/Card/CardWithImage";
import { Ping } from "@ui/Ping";
import { format } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import { getServerSideProps as gSSP } from "../lib/calendar/utils";
import { getTranslations } from "../lib/translationUtils";
import { PromptInstanceWithPrompt } from "../lib/types";

export const getServerSideProps = gSSP;

type PromptInstances = PromptInstanceWithPrompt[];

const Calendar: NextPage<{ promptInstances: PromptInstances }> = ({
  promptInstances,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className="w-11/12 mx-auto flex justify-center flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
        exit={{ opacity: 0 }}
      >
        <div className="font-bold text-2xl my-4">Calendar</div>
        <div className="w-full">
          {promptInstances.map((p) => {
            const translations = getTranslations(p.prompt.translations);

            return (
              <div className="pb-4" key={p.id}>
                <Card>
                  <CardTitle>
                    <div className="flex justify-between">
                      {format(new Date(p.date), "dd-MM-yyyy")}
                      <Ping rarity={p.prompt.rarityLevel} />
                    </div>
                  </CardTitle>
                  {p.imageSecureURL ? (
                    <CardWithImage imageUrl={p.imageSecureURL}>
                      <div className="font-bold mb-1">{translations.title}</div>
                      {p.inputValue}
                    </CardWithImage>
                  ) : (
                    <CardText>
                      <div className="font-semibold mb-1">
                        {translations.title}
                      </div>
                      {p.inputValue}
                    </CardText>
                  )}
                </Card>
              </div>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Calendar;
