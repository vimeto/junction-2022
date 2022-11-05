import { Button } from "@ui/Button/Button";
import { Card } from "@ui/Card/Card";
import { CardText } from "@ui/Card/CardText";
import { CardTitle } from "@ui/Card/CardTitle";
import { CheckBox } from "@ui/CheckBox";
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
    <div>
      <Card padding={2}>
        <AnimatePresence>
          {completed ? (
            <motion.div
              key="FeedbackCard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Button onClick={() => setCompleted(false)}>Go back</Button>
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
              <CardTitle>{translations.title}</CardTitle>
              <CardText>{translations.description}</CardText>
              <div className="flex items-center w-full justify-center py-2">
                <Button onClick={() => setCompleted(true)}>Completed</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
};

export default TaskComponent;
