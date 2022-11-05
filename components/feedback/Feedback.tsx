import { Button } from "@ui/Button/Button";
import { CheckBox } from "@ui/CheckBox";
import { LoadSpinner } from "@ui/LoadingSpinner";
import router from "next/router";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { getTranslations } from "../../lib/translationUtils";
import { FeedbackType, PromptInstanceWithPrompt } from "../../lib/types";
import FreeTextWithPic from "./FreeTextWithPic";
import FreeText from "./FreeText";
import MultipleChoice from "./MultipleChoice";

type Props = {
  promptInstanceWithPrompt: PromptInstanceWithPrompt;
};

const renderingUtils = ({ promptInstanceWithPrompt }: Props) => {
  const { prompt } = promptInstanceWithPrompt;
  const translations = getTranslations(prompt.translations);
  switch (prompt.feedbackType) {
    case "freeText":
      return (
        <FreeText
          inputTitle={translations.inputTitle}
          title={translations.title}
        />
      );
    case "freeTextWithPic":
      return (
        <FreeTextWithPic
          title={translations.title}
          inputTitle={translations.inputTitle}
          imageButton={translations.imageButton}
        />
      );
    case "multipleChoice":
      return <MultipleChoice title={translations.title} enumValues={[]} />;
    case "markCompleted":
      return "Click save to mark as completed";
  }
};

const Feedback = ({ promptInstanceWithPrompt }: Props) => {
  const [loading, setLoading] = useState(false);
  const methods = useForm({
    defaultValues: {
      inputValue: undefined, // string
      enumValue: undefined, // number
      images: undefined, // file[]
      share: false,
    },
  });

  const onSubmit = async (data: any) => {
    try {
      // promptInstanceWithPrompt.i
      const feedbackData = new FormData();
      feedbackData.append("inputValue", data.inputValue ?? "");
      feedbackData.append("enumValue", data.enumValue ?? "");
      feedbackData.append("share", data.share ?? "");
      if (data.images?.length) {
        feedbackData.append(
          "file",
          data.images.length ? data.images[0] : undefined
        );
      }
      console.log(data);
      setLoading(true);
      const res = await fetch(
        `/api/promptInstances/feedBack/${promptInstanceWithPrompt.id}`,
        {
          method: "POST",
          body: feedbackData,
        }
      );
      setLoading(false);

      if (res.status >= 400) throw new Error("Failed to save activity");
      router.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  const handleSave = methods.handleSubmit(onSubmit);

  return (
    <FormProvider {...methods}>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full">
          {renderingUtils({ promptInstanceWithPrompt })}
        </div>
        <div className="pt-2">
          <div className="flex items-center m-auto pt-2 justify-evenly">
            <div className="flex items-center">
              <div>Share with friends</div>
              <CheckBox {...methods.register("share")} />
            </div>
            <div className="flex-1">
              <Button fullWidth onClick={handleSave}>
                Save!
              </Button>
              {loading && <LoadSpinner />}
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default Feedback;
