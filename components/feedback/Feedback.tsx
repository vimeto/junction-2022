import { Button } from "@ui/Button/Button";
import { LoadSpinner } from "@ui/LoadingSpinner";
import router from "next/router";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { getTranslations } from "../../lib/translationUtils";
import { FeedbackType, PromptInstanceWithPrompt } from "../../lib/types";
import FreeTextWithPic from "./FreeText";
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
      imageUrl: undefined, // string
    },
  });

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const res = await fetch("/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      setLoading(false);
      if (res.status >= 400) throw new Error("Failed to save activity");
      router.push("/");
    } catch (e) {
      console.error();
    }
  };

  const handleSave = methods.handleSubmit(onSubmit);

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col items-center justify-center">
        <div>{renderingUtils({ promptInstanceWithPrompt })}</div>
        <div className="py-2">
          <Button onClick={handleSave} />
          {loading && <LoadSpinner />}
        </div>
      </div>
    </FormProvider>
  );
};

export default Feedback;
