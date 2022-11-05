import { Button } from "@ui/Button";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { ActivityStep, IntroStep, SharingStep } from "./StepContent";

const Steps = ({ step }: { step: number }) => (
  <ul className="steps">
    <li
      className={`step ${step >= 0 ? "step-primary" : ""}`}
      data-content=""
    ></li>
    <li
      className={`step ${step >= 1 ? "step-primary" : ""}`}
      data-content=""
    ></li>
    <li
      className={`step ${step >= 2 ? "step-primary" : ""}`}
      data-content=""
    ></li>
  </ul>
);

const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <IntroStep />;
    case 1:
      return <ActivityStep />;
    case 2:
      return <SharingStep />;
    default:
      return "Unknown step";
  }
};

export const FormStepper = ({ handleFinish }: { handleFinish: () => void }) => {
  const t = useTranslations("actions");
  const [step, setStep] = useState<number>(0);

  return (
    <div className="flex items-center w-full h-full direction flex-col justify-between">
      <div />
      <div>{getStepContent(step)}</div>
      <div className="justify-self-end pb-16 flex items-center flex-col">
        <div className="flex items-center justify-between w-full">
          <div className="p-4">
            <Button onClick={() => setStep(step - 1)}>{t("back")}</Button>
          </div>
          <div className="p-4">
            {step < 2 ? (
              <Button onClick={() => setStep(step + 1)}>{t("next")}</Button>
            ) : (
              <Button onClick={handleFinish}>{t("finish")}</Button>
            )}
          </div>
        </div>
        <div className="p-8">
          <Steps step={step} />
        </div>
      </div>
    </div>
  );
};
