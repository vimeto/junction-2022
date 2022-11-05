import { Prompt, PromptInstance, User } from "@prisma/client";
import { NextPage } from "next";
import { getServerSideProps as gSSP } from '../lib/calendar/utils';

export const getServerSideProps = gSSP;

type PromptInstances = (PromptInstance & {
  prompt: Prompt;
})[]

const Calendar: NextPage<{ promptInstances: PromptInstances }> = ({ promptInstances }) => {
  console.log(promptInstances);

  return (
    <div>
      Jea
    </div>
  )
};

export default Calendar;
