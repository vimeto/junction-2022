import { Prompt, PromptInstance, User } from "@prisma/client";
import { Card } from "@ui/Card/Card";
import { CardTitle } from "@ui/Card/CardTitle";
import { CardText } from "@ui/Card/CardText";
import { useEffect, useState } from "react";
import BearWithBubble from "../components/BearWithBubble";
import { getServerSideProps as gSSP } from "../lib/prompts/utils";
import { defaultLocale, TaskType } from "../lib/types";
import router from "next/router";
import { Button } from "@ui/Button";
import { TextArea } from "@ui/TextArea";

export const getServerSideProps = gSSP;

type Props = {
  locale?: string;
  user: User & { promptInstances: PromptInstance & { prompt: Prompt }[] };
};

const Task = ({ locale, user }: Props) => {
  console.log(user);
  const [completed, setCompleted] = useState(false);

  const { promptInstances } = user;

  useEffect(() => {
    if (!promptInstances.length) {
      router.push("/newTask");
    }
  }, []);

  const handleComplete = () => {
    setCompleted(true);
  };

  const handleSave = async () => {
    console.log("save");
  };

  const prompt = promptInstances[0].prompt;
  const translations = (prompt.translations as Record<string, any>)[
    locale ?? defaultLocale
  ] as {
    description: string;
    imageButton: string;
    inputTitle: string;
    submit: string;
    title: string;
  };
  return (
    <div className="flex flex-col items-center h-full justify-between">
      <div className="flex-1 w-full">
        <BearWithBubble title="Here is your quest" />
      </div>
      <div className="flex flex-col justify-center">
        <Card>
          {!completed ? (
            <>
              <CardTitle>{translations.title}</CardTitle>
              <CardText>{translations.description}</CardText>
              <div
                onClick={handleComplete}
                className="flex items-center w-full justify-center py-4"
              >
                <Button>Completed</Button>
              </div>
            </>
          ) : (
            <div className="flex flex-col align-center justify-center">
              <CardTitle>{translations.title}</CardTitle>
              <TextArea placeholder={translations.inputTitle} rows={4} />
              <div className="w-3/4 m-auto py-4">
                {translations.imageButton}
              </div>
              <div className="w-3/4 m-auto py-4">
                <Button fullWidth onClick={handleSave}>
                  {translations.submit}
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
      <div className="pt-4">
        {completed ? <>fill later</> : <> I cant do this task today. Reroll</>}
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
