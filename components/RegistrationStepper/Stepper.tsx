import { Button } from "@ui/Button/Button";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  ActivityStep,
  IntroStep,
  RarityStep,
  SharingStep,
} from "./StepContent";

const Steps = ({ step }: { step: number }) => (
  <div className="flex items-center justify-evenly transition-colors">
    <div
      className={`badge badge-md mx-2 border-none ${
        step >= 0 ? "bg-cyan-300" : ""
      }`}
    />
    <div
      className={`badge badge-md mx-2 border-none ${
        step >= 1 ? "bg-cyan-300" : ""
      }`}
    />
    <div
      className={`badge badge-md mx-2 border-none ${
        step >= 2 ? "bg-cyan-300" : ""
      }`}
    />
    <div
      className={`badge badge-md mx-2 border-none ${
        step >= 3 ? "bg-cyan-300" : ""
      }`}
    />
  </div>
);

const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <IntroStep />;
    case 1:
      return <RarityStep />;
    case 2:
      return <ActivityStep />;
    case 3:
      return <SharingStep />;
    default:
      return "Unknown step";
  }
};

export const FormStepper = ({ handleFinish }: { handleFinish: () => void }) => {
  const t = useTranslations("actions");
  const [step, setStep] = useState<number>(0);

  return (
    <div
      className="absolute bottom-20 flex items-center w-full flex-col justify-between -translate-x-1/2 left-1/2 max-w-sm"
      // style={{ height: "90vh" }}
    >
      <div />
      <div>{getStepContent(step)}</div>
      <div className="justify-self-end flex items-center flex-col">
        <div className="flex items-center justify-between w-full">
          <div className="p-4">
            <Button
              onClick={() => setStep(Math.max(step - 1, 0))}
              disableBtn={step === 0}
            >
              {t("back")}
            </Button>
          </div>
          <div className="p-4">
            {step < 3 ? (
              <Button onClick={() => setStep(step + 1)}>{t("next")}</Button>
            ) : (
              <Button onClick={handleFinish}>{t("finish")}</Button>
            )}
          </div>
        </div>
        <div className="p-2">
          <Steps step={step} />
        </div>
      </div>
    </div>
  );
};
