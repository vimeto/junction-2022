import { CardTitle } from "@ui/Card/CardTitle";
import { TextArea } from "@ui/TextArea";

type Props = {
  title: string;
  inputTitle: string;
  imageButton: string;
};

const FreeTextWithPic = ({ title, inputTitle, imageButton }: Props) => {
  return (
    <>
      <CardTitle>{title}</CardTitle>
      <TextArea placeholder={inputTitle} rows={4} />
      <div className="w-3/4 m-auto py-4">{imageButton}</div>
    </>
  );
};

export default FreeTextWithPic;
