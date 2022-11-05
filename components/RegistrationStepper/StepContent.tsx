import { ActivityLevel } from "../../lib/types";
import { useTranslations } from "next-intl";
import { useFormContext, useController } from "react-hook-form";
import { Card } from "@ui/Card/Card";
import { CardTitle } from "@ui/Card/CardTitle";
import { CardText } from "@ui/Card/CardText";

export const IntroStep = () => {
  const t = useTranslations("registration");

  return (
    <div>
      <h2 className="font-semibold text-2xl">{t("steps.intro.header")}</h2>
      <div>{t("steps.intro.description")}</div>
    </div>
  );
};

export const ActivityStep = () => {
  const t = useTranslations("registration");

  const { control } = useFormContext();

  const {
    field: { onChange, value },
  } = useController({
    name: "activityLevel",
    control,
  });

  return (
    <div>
      <div className="flex items-center flex-col">
        <h2 className="font-semibold text-2xl text-center">
          {t("steps.activity.header")}
        </h2>
        <div className="text-center">{t("steps.activity.description")}</div>
      </div>
      <div className="p-8">
        <Card
          onClick={() => onChange(ActivityLevel.High)}
          // className={`${value === ActivityLevel.High ? "bg-slate-800" : ""}`}
        >
          <CardTitle>High</CardTitle>
          <CardText>example</CardText>
        </Card>
        <Card
          onClick={() => onChange(ActivityLevel.Medium)}
          // className={`${value === ActivityLevel.Medium ? "bg-slate-800" : ""}`}
        >
          <CardTitle>Medium</CardTitle>
          <CardText>example</CardText>
        </Card>
        <Card
          onClick={() => onChange(ActivityLevel.Low)}
          // className={`${value === ActivityLevel.Low ? "bg-slate-800" : ""}`}
        >
          <CardTitle>Low</CardTitle>
          <CardText>example</CardText>
        </Card>
      </div>
    </div>
  );
};

export const SharingStep = () => {
  const t = useTranslations("registration");

  const { control } = useFormContext();

  const {
    field: { onChange, value },
  } = useController({
    name: "sharing",
    control,
  });

  return (
    <div>
      <h2>{t("steps.sharing.header")}</h2>
      <div>{t("steps.sharing.description")}</div>
      <div>
        <div
          onClick={() => onChange(true)}
          className={`${value ? "bg-slate-800" : ""}`}
        >
          Share
        </div>
        <div
          onClick={() => onChange(false)}
          className={`${!value ? "bg-slate-800" : ""}`}
        >
          {"Don't share"}
        </div>
      </div>
    </div>
  );
};
