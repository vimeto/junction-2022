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
  <>
    {user.promptInstances[0] && user.promptInstances[0].completed ? (
      <TaskSaved locale={locale} user={user} />
    ) : (
      <TaskContainer locale={locale} user={user} />
    )}
  </>
);

export default Task;
