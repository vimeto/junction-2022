import { PromptInstance } from "@prisma/client";
import { Card } from "@ui/Card/Card";
import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import TaskContainer from "../components/containers/TaskContainer";
import TaskSaved from "../components/containers/TaskSaved";
import Feed from "../components/Feed";
import TaskPill from "../components/TaskPill";
import prisma from "../lib/prisma";
import { getServerSideProps as gSSP } from "../lib/prompts/utils";
import {
  PromptInstanceWithUsernameAndTranslations,
  UserWithPromptInstance,
} from "../lib/types";

export const getServerSideProps = gSSP;

type Props = {
  locale?: string;
  user: UserWithPromptInstance;
  friendPrompts: PromptInstanceWithUsernameAndTranslations[];
};

const Home = ({ user, locale, friendPrompts }: Props) => {
  if (user.sharing) {
    return (
      <div className="flex flex-col items-center h-full justify-between ">
        <div className="flex-1 w-full p-4">
          <TaskPill user={user} locale={locale} />
        </div>
        <div className="font-bold text-2xl mb-4">Companions</div>
        <div className="flex items-center w-11/12">
          <Feed friendPromps={friendPrompts} />
        </div>
      </div>
    );
  }

  return (
    <>
      {user.promptInstances[0] && user.promptInstances[0].completed ? (
        <TaskSaved locale={locale} user={user} />
      ) : (
        <TaskContainer locale={locale} user={user} />
      )}
    </>
  );
};

export default Home;
