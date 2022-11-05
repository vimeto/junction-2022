import { CardTitle } from "@ui/Card/CardTitle";
import { TextArea } from "@ui/TextArea";

type Props = {
  title: string;
  inputTitle: string;
};

const FreeTextWithPic = ({ title, inputTitle }: Props) => {
  return (
    <>
      <CardTitle>{title}</CardTitle>
      <TextArea placeholder={inputTitle} rows={4} />
    </>
  );
};

export default FreeTextWithPic;
