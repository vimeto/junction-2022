import { AnimatePresence, motion } from "framer-motion";
import router from "next/router";
import { useState } from "react";
import BearWithBubble from "../components/BearWithBubble";
import NewTask from "../components/NewTask";
import TaskComponent from "../components/TaskComponent";
import { createNewPrompt } from "../lib/createPrompt/utils";
import { getServerSideProps as gSSP } from "../lib/prompts/utils";
import { getTranslations } from "../lib/translationUtils";
import {
  PromptInstanceWithPrompt,
  TaskType,
  UserWithPromptInstance,
} from "../lib/types";

export const getServerSideProps = gSSP;

type Props = {
  locale?: string;
  user: UserWithPromptInstance;
};

const Task = ({ locale, user }: Props) => {
  const [prompt, setPrompt] = useState<PromptInstanceWithPrompt | null>(
    user.promptInstances.length ? user.promptInstances[0] : null
  );

  const handleNewPrompt = async (type: TaskType) => {
    try {
      const active = type === TaskType.Active ? user.activityLevel : 0;
      const res = await fetch("/api/promptInstances", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          active,
        }),
      });
      const newPrompt = await res.json();
      const { promptInstance } = newPrompt;
      setPrompt(promptInstance);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col items-center h-full justify-between">
      <div className="flex-1 w-full">
        <BearWithBubble
          title={prompt ? "Here is your quest!" : "Choose a quest type"}
          aux={prompt ? undefined : "How are you doing today?"}
          bearSrc="/winking_bear.svg"
        />
      </div>
      <div className="flex flex-col justify-center w-3/4">
        <AnimatePresence>
          {prompt ? (
            <motion.div
              key="Task"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TaskComponent
                promptInstanceWithPrompt={user.promptInstances[0]}
              />
            </motion.div>
          ) : (
            <motion.div
              key="NewTask"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <NewTask createPrompt={handleNewPrompt} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex-1 flex-col">
        <div className="pt-32" onClick={() => router.push("/")}>
          Remind me later
        </div>
      </div>
    </div>
  );
};

export default Task;
