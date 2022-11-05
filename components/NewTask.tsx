import { Button } from "@ui/Button/Button";
import { createNewPrompt } from "../lib/createPrompt/utils";
import { TaskType } from "../lib/types";

type Props = {
  createPrompt: (type: TaskType) => Promise<void>;
};

const NewTask = ({ createPrompt }: Props) => {
  return (
    <div>
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
