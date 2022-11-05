import { ActivityLevel } from "../../lib/types";
import { useTranslations } from "next-intl";
import { useFormContext, useController } from "react-hook-form";
import { Card } from "@ui/Card/Card";
import { CardTitle } from "@ui/Card/CardTitle";
import { CardText } from "@ui/Card/CardText";

export const IntroStep = () => {
  const t = useTranslations("registration");

  return (
    <div className="w-3/4 mx-auto">
      <h2 className="font-semibold text-xl">{t("steps.intro.header")}</h2>
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
      <div className="flex items-center flex-col w-3/4 mx-auto">
        <h2 className="font-semibold text-xl text-center">
          {t("steps.activity.header")}
        </h2>
        <div className="text-center">{t("steps.activity.description")}</div>
      </div>
      <div className="p-8">
        <div className="pb-2">
          <Card
            noPadding
            onClick={() => onChange(ActivityLevel.High)}
            isActive={
              value === ActivityLevel.High ? "primaryActive" : undefined
            }
          >
            <div className="p-2 flex flex-col items-center justify-center">
              <CardTitle>High</CardTitle>
              <CardText>example</CardText>
            </div>
          </Card>
        </div>
        <div className="pb-2">
          <Card
            noPadding
            onClick={() => onChange(ActivityLevel.Medium)}
            isActive={
              value === ActivityLevel.Medium ? "primaryActive" : undefined
            }
          >
            <div className="p-2 flex flex-col items-center justify-center">
              <CardTitle>Medium</CardTitle>
              <CardText>example</CardText>
            </div>
          </Card>
        </div>
        <div className="pb-2">
          <Card
            noPadding
            onClick={() => onChange(ActivityLevel.Low)}
            isActive={value === ActivityLevel.Low ? "primaryActive" : undefined}
          >
            <div className="p-2 flex flex-col items-center justify-center">
              <CardTitle>Low</CardTitle>
              <CardText>example</CardText>
            </div>
          </Card>
        </div>
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
      <div className="pt-6">
        <div className="pb-2">
          <Card
            noPadding
            onClick={() => onChange(true)}
            isActive={value ? "primaryActive" : undefined}
          >
            <div className="p-2 flex flex-col items-center justify-center">
              <CardTitle>Share</CardTitle>
            </div>
          </Card>
        </div>
        <div className="pb-2">
          <Card
            noPadding
            onClick={() => onChange(false)}
            isActive={!value ? "primaryActive" : undefined}
          >
            <div className="p-2 flex flex-col items-center justify-center">
              <CardTitle>{`Don't share`}</CardTitle>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
