import { PromptInstance } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
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
  console.log(friendPrompts);

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
};

export default Home;
