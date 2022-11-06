import { ActivityLevel } from "../../lib/types";
import { useTranslations } from "next-intl";
import { useFormContext, useController } from "react-hook-form";
import { Card } from "@ui/Card/Card";
import { CardTitle } from "@ui/Card/CardTitle";
import { CardText } from "@ui/Card/CardText";
import { Ping } from "@ui/Ping";

export const IntroStep = () => {
  const t = useTranslations("registration");

  return (
    <div className="w-3/4 mx-auto">
      <h2 className="font-semibold text-xl">{t("steps.intro.header")}</h2>
      <div>{t("steps.intro.description")}</div>
    </div>
  );
};

export const RarityStep = () => {
  const t = useTranslations("registration");

  return (
    <div className="w-3/4 mx-auto">
      <h2 className="font-semibold text-xl">{t("steps.rarity.header")}</h2>
      <div>{t("steps.rarity.description")}</div>
      <div className="grid grid-cols-2 pt-2">
        <div>Common</div>
        <Ping rarity={0} />
        <div>Rare</div>
        <Ping rarity={10} />
        <div>Epic</div>
        <Ping rarity={20} />
        <div>Legendary</div>
        <Ping rarity={30} />
      </div>
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
            padding={0}
            onClick={() => onChange(ActivityLevel.High)}
            isActive={
              value === ActivityLevel.High ? "primaryActive" : undefined
            }
          >
            <div className="p-2 flex flex-col items-center justify-center">
              <CardTitle>{t("steps.activity.high")}</CardTitle>
              <CardText>{t("steps.activity.example")}</CardText>
            </div>
          </Card>
        </div>
        <div className="pb-2">
          <Card
            padding={0}
            onClick={() => onChange(ActivityLevel.Medium)}
            isActive={
              value === ActivityLevel.Medium ? "primaryActive" : undefined
            }
          >
            <div className="p-2 flex flex-col items-center justify-center">
              <CardTitle>{t("steps.activity.medium")}</CardTitle>
              <CardText>{t("steps.activity.example")}</CardText>
            </div>
          </Card>
        </div>
        <div className="pb-2">
          <Card
            padding={0}
            onClick={() => onChange(ActivityLevel.Low)}
            isActive={value === ActivityLevel.Low ? "primaryActive" : undefined}
          >
            <div className="p-2 flex flex-col items-center justify-center">
              <CardTitle>{t("steps.activity.low")}</CardTitle>
              <CardText>{t("steps.activity.example")}</CardText>
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
    <div className="w-3/4 mx-auto">
      <h2>{t("steps.sharing.header")}</h2>
      <div>{t("steps.sharing.description")}</div>
      <div className="pt-6">
        <div className="pb-2">
          <Card
            padding={0}
            onClick={() => onChange(true)}
            isActive={value ? "primaryActive" : undefined}
          >
            <div className="p-2 flex flex-col items-center justify-center">
              <CardTitle>{t("steps.sharing.share")}</CardTitle>
            </div>
          </Card>
        </div>
        <div className="pb-2">
          <Card
            padding={0}
            onClick={() => onChange(false)}
            isActive={!value ? "primaryActive" : undefined}
          >
            <div className="p-2 flex flex-col items-center justify-center">
              <CardTitle>{t("steps.sharing.dontShare")}</CardTitle>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
