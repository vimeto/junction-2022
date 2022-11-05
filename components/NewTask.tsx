import { Button } from "@ui/Button/Button";
import { ActivityLevel, TaskType } from "../lib/types";

type Props = {
  createPrompt: (type: TaskType) => Promise<void>;
  activityLevel: ActivityLevel;
};

const NewTask = ({ createPrompt, activityLevel }: Props) => {
  return (
    <div>
      {activityLevel !== ActivityLevel.Low && (
        <div className="my-4">
          <Button
            intent="primary"
            btnSize="large"
            fullWidth
            onClick={() => createPrompt(TaskType.Active)}
          >
            Active Task
          </Button>
        </div>
      )}
      <div>
        <Button
          intent="secondary"
          btnSize="large"
          fullWidth
          onClick={() => createPrompt(TaskType.Mindful)}
        >
          Mindfulness Task
        </Button>
      </div>
    </div>
  );
};

export default NewTask;
