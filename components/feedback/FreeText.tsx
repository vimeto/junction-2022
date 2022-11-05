import { CardTitle } from "@ui/Card/CardTitle";
import { TextArea } from "@ui/TextArea";
import { useFormContext } from "react-hook-form";

type Props = {
  title: string;
  inputTitle: string;
};

const FreeText = ({ title, inputTitle }: Props) => {
  const { register } = useFormContext();

  return (
    <>
      <CardTitle>{title}</CardTitle>
      <TextArea {...register("inputValue")} placeholder={inputTitle} rows={4} />
    </>
  );
};

export default FreeText;
