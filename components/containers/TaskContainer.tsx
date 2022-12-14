import { TextButton } from "@ui/Button/TextButton";
import router from "next/router";
import { useState } from "react";
import {
  PromptInstanceWithPrompt,
  TaskType,
  UserWithPromptInstance,
} from "../../lib/types";
import BearWithBubble from "../BearWithBubble";
import NewTask from "../NewTask";
import TaskComponent from "../TaskComponent";

type Props = {
  locale?: string;
  user: UserWithPromptInstance;
};

const TaskContainer = ({ locale, user }: Props) => {
  const [completed, setCompleted] = useState(false);

  const [prompt, setPrompt] = useState<PromptInstanceWithPrompt | null>(
    user.promptInstances.length ? user.promptInstances[0] : null
  );
  const [userPromptLength, setUserPromptLength] = useState<number>(
    user.promptInstances.length
  );

  const handleReroll = async (type: TaskType) => {
    if (userPromptLength > 1) {
      console.log("you have already rerolled");
      return;
    }

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
      setUserPromptLength(userPromptLength + 1);
      setPrompt(promptInstance);
    } catch (e) {
      console.log(e);
    }
  };

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
      setUserPromptLength(userPromptLength + 1);
      setPrompt(promptInstance);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col items-center h-full justify-between">
      <div className="flex-1 w-full pb-2">
        <BearWithBubble
          title={prompt ? "Here is your quest!" : "Choose a quest type"}
          aux={prompt ? undefined : "How are you doing today?"}
          bearSrc={completed ? "/happy_bear.svg" : "/winking_bear.svg"}
          hideBubble={completed}
        />
      </div>
      <div className="flex flex-col justify-center w-full">
        {prompt ? (
          <>
            <TaskComponent
              promptInstanceWithPrompt={prompt}
              completed={completed}
              setCompleted={setCompleted}
            />
            {userPromptLength <= 1 && !completed && (
              <div className="mt-4 flex items-center justify-center">
                <div className="pr-2">I cannot do this one.</div>
                <TextButton
                  onClick={() =>
                    handleReroll(
                      prompt.prompt.activityLevel > 0
                        ? TaskType.Active
                        : TaskType.Mindful
                    )
                  }
                >
                  Reroll
                </TextButton>
              </div>
            )}
          </>
        ) : (
          <div>
            <NewTask
              createPrompt={handleNewPrompt}
              activityLevel={user.activityLevel}
            />
          </div>
        )}
      </div>
      <div className="flex-1 flex-col text-center">
        {user.sharing && (
          <div className="pt-4 text-center">
            <TextButton onClick={() => router.push("/")}>
              Remind me later
            </TextButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskContainer;
