import { AnimatePresence, motion } from "framer-motion";
import TaskContainer from "../components/containers/TaskContainer";
import TaskSaved from "../components/containers/TaskSaved";
import { getServerSideProps as gSSP } from "../lib/prompts/utils";
import { UserWithPromptInstance } from "../lib/types";

export const getServerSideProps = gSSP;

type Props = {
  locale?: string;
  user: UserWithPromptInstance;
};

const Task = ({ locale, user }: Props) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
      className="h-full"
    >
      {user.promptInstances[0] && user.promptInstances[0].completed ? (
        <TaskSaved locale={locale} user={user} />
      ) : (
        <TaskContainer locale={locale} user={user} />
      )}
    </motion.div>
  </AnimatePresence>
);

export default Task;
