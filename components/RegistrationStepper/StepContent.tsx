import { ActivityLevel } from "../../lib/types";
import { useTranslations } from "next-intl";
import { useFormContext, useController } from "react-hook-form";

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
      <div>
        <h2 className="font-semibold text-2xl">{t("steps.activity.header")}</h2>
        <div>{t("steps.activity.description")}</div>
      </div>
      <div>
        <div
          onClick={() => onChange(ActivityLevel.High)}
          className={`${value === ActivityLevel.High ? "bg-slate-800" : ""}`}
        >
          High
        </div>
        <div
          onClick={() => onChange(ActivityLevel.Medium)}
          className={`${value === ActivityLevel.Medium ? "bg-slate-800" : ""}`}
        >
          Medium
        </div>
        <div
          onClick={() => onChange(ActivityLevel.Low)}
          className={`${value === ActivityLevel.Low ? "bg-slate-800" : ""}`}
        >
          Low
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
          Don'tshare
        </div>
      </div>
    </div>
  );
};
