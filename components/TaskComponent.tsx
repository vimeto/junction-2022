import { Button } from "@ui/Button/Button";
import { Card } from "@ui/Card/Card";
import { CardText } from "@ui/Card/CardText";
import { CardTitle } from "@ui/Card/CardTitle";
import { CheckBox } from "@ui/CheckBox";
import { Ping } from "@ui/Ping";
import { TextArea } from "@ui/TextArea";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { getTranslations } from "../lib/translationUtils";
import { PromptInstanceWithPrompt } from "../lib/types";
import Feedback from "./feedback/Feedback";

type Props = {
  promptInstanceWithPrompt: PromptInstanceWithPrompt;
  completed: boolean;
  setCompleted: (v: boolean) => void;
};

const TaskComponent = ({
  promptInstanceWithPrompt,
  completed,
  setCompleted,
}: Props) => {
  const translations = getTranslations(
    promptInstanceWithPrompt.prompt.translations
  );
  return (
    <div className="w-3/4 mx-auto h-full">
      <AnimatePresence>
        <Card padding={4}>
          {completed ? (
            <motion.div
              key="FeedbackCard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-full pt-4">
                <Feedback promptInstanceWithPrompt={promptInstanceWithPrompt} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="TaskCard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CardTitle>
                <div className="flex justify-between">
                  {translations.title}
                  <Ping rarity={promptInstanceWithPrompt.prompt.rarityLevel} />
                </div>
              </CardTitle>
              <CardText>{translations.description}</CardText>
              <div className="flex items-center w-full justify-center py-2">
                <Button onClick={() => setCompleted(true)}>Completed</Button>
              </div>
            </motion.div>
          )}
        </Card>
      </AnimatePresence>
    </div>
  );
};

export default TaskComponent;
