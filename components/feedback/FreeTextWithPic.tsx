import { CardTitle } from "@ui/Card/CardTitle";
import { TextArea } from "@ui/TextArea";
import { useFormContext } from "react-hook-form";

type Props = {
  title: string;
  inputTitle: string;
  imageButton: string;
};

const FreeTextWithPic = ({ title, inputTitle, imageButton }: Props) => {
  const { register } = useFormContext();

  return (
    <>
      <CardTitle>{title}</CardTitle>
      <TextArea {...register("inputValue")} placeholder={inputTitle} rows={4} />
      <div className="w-3/4 m-auto py-4">
        {imageButton}
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          {...register("images")}
      />
      </div>
    </>
  );
};

export default FreeTextWithPic;
