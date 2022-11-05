import { Card } from "@ui/Card/Card";
import { CardText } from "@ui/Card/CardText";
import { CardTitle } from "@ui/Card/CardTitle";
import { CheckBox } from "@ui/CheckBox";
import { getTranslations } from "../../lib/translationUtils";
import { UserWithPromptInstance } from "../../lib/types";

type Props = {
  locale?: string;
  user: UserWithPromptInstance;
};

const TaskSaved = ({ locale, user }: Props) => {
  const promptInstance = user.promptInstances[0];
  const prompt = promptInstance.prompt;
  const translations = getTranslations(prompt.translations, locale);

  console.log(promptInstance);

  return (
    <div className="flex flex-col items-center h-full justify-center">
      <div className="flex flex-col justify-center w-3/4">
        <Card>
          <div className="flex items-center justify-center">
            <CardTitle>{translations.title}</CardTitle>
            <CheckBox checked readOnly />
          </div>
          <CardText>{promptInstance.inputValue ?? ""}</CardText>
          <div>
            {promptInstance.imageSecureURL && (
              <img
                className="w-3/4 h-auto"
                src={promptInstance.imageSecureURL}
                alt=""
              />
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TaskSaved;
