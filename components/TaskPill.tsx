import { Button } from "@ui/Button/Button";
import { CheckBox } from "@ui/CheckBox";
import router from "next/router";
import { getTranslations } from "../lib/translationUtils";
import { UserWithPromptInstance } from "../lib/types";

type Props = {
  user: UserWithPromptInstance;
  locale?: string;
};

const TaskPill = ({ user, locale }: Props) => {
  const { promptInstances } = user;

  const handleNewTask = () => {
    router.push("/task");
  };

  const handleTask = () => {
    router.push("/task");
  };

  if (!promptInstances.length) {
    return (
      <Button intent="primary" btnSize="large" onClick={handleNewTask}>
        Choose a task
      </Button>
    );
  }

  const { prompt, completed } = promptInstances[0];

  const translations = getTranslations(prompt.translations, locale);
  return (
    <Button intent="primary" onClick={handleTask} fullWidth noPadding>
      <div className="flex items-center justify-center">
        <div className="px-2 text-left">{translations.title}</div>
        <CheckBox checked={completed} />
        <div className="pt-2 pl-2">
          <img
            className="w-14 h-14"
            src="/questioning_bear.svg"
            alt="sad bear"
          />
        </div>
      </div>
    </Button>
  );
};

export default TaskPill;
