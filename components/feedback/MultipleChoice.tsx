import { CardTitle } from "@ui/Card/CardTitle";
import { TextArea } from "@ui/TextArea";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  title: string;
  enumValues: {
    label: string;
    value: number;
  }[];
};

const FreeTextWithPic = ({ title, enumValues }: Props) => {
  const { register } = useFormContext();

  return (
    <>
      <CardTitle>{title}</CardTitle>
      {enumValues.map((option) => (
        <div key={option.value}>
          <div>{option.label}</div>
          <div>
            <input
              {...register("enumValue")}
              value={option.value}
              type="radio"
              className="radio radio-primary"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default FreeTextWithPic;
