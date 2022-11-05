import { User } from "@prisma/client";
import { Button } from "@ui/Button/Button";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import router from "next/router";
import BearWithBubble from "../components/BearWithBubble";
import prisma from "../lib/prisma";
import { getServerSideProps as gSSP } from "../lib/prompts/utils";
import { TaskType } from "../lib/types";

export const getServerSideProps = gSSP;

type Props = {
  locale?: string;
  user: User;
};

const Task = ({ user }: Props) => {
  console.log(user);

  const handleTask = (type: TaskType) => {
    console.log(type);
  };

  return (
    <div className="flex flex-col items-center h-full justify-between">
      <div className="flex-1 w-full">
        <BearWithBubble title="title" aux="aux" />
      </div>
      <div className="flex flex-col justify-center w-3/4">
        <div className="my-4">
          <Button
            intent="primary"
            btnSize="large"
            fullWidth
            onClick={() => handleTask(TaskType.Active)}
          >
            Active Task
          </Button>
        </div>
        <div>
          <Button
            intent="secondary"
            btnSize="large"
            fullWidth
            onClick={() => handleTask(TaskType.Mindful)}
          >
            Mindfulness Task
          </Button>
        </div>
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
