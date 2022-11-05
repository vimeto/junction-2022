import { Button } from "@ui/Button/Button";
import { Card } from "@ui/Card/Card";
import { CardText } from "@ui/Card/CardText";
import { CardTitle } from "@ui/Card/CardTitle";
import { TextArea } from "@ui/TextArea";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { getTranslations } from "../lib/translationUtils";
import { PromptInstanceWithPrompt } from "../lib/types";

type Props = {
  promptInstanceWithPrompt: PromptInstanceWithPrompt;
};

const TaskComponent = ({ promptInstanceWithPrompt }: Props) => {
  const [completed, setCompleted] = useState<boolean>(false);

  const handleSave = async () => {
    console.log("save");
  };

  const translations = getTranslations(
    promptInstanceWithPrompt.prompt.translations
  );
  return (
    <div>
      <Card>
        <AnimatePresence>
          {completed ? (
            <motion.div
              key="TaskCard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Button onClick={() => setCompleted(false)}>Go back</Button>
              <CardTitle>{translations.title}</CardTitle>
              <TextArea placeholder={translations.inputTitle} rows={4} />
              <div className="w-3/4 m-auto py-4">
                {translations.imageButton}
              </div>
              <div className="w-3/4 m-auto py-4">
                <Button fullWidth onClick={handleSave}>
                  {translations.submit}
                </Button>
              </div>
              <div className="flex items-center w-full justify-center py-4"></div>
            </motion.div>
          ) : (
            <motion.div
              key="FeedbackCard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CardTitle>{translations.title}</CardTitle>
              <CardText>{translations.description}</CardText>
              <div className="flex items-center w-full justify-center py-4">
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
