import { cva, VariantProps } from "class-variance-authority";
import { CardText } from "./CardText";

const cardWithImageStyles = cva(
  "flex flex-row items-center space-x-4 justify-between"
);

interface ExtraTypes {
  imageUrl?: string;
  imageAlt?: string;
  textColor?: "green" | "blue" | "black" | null;
}

export interface Props
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    VariantProps<typeof cardWithImageStyles>,
    ExtraTypes {}

// TODO: update to <Image />

export function CardWithImage({
  imageUrl,
  imageAlt,
  textColor,
  ...props
}: Props) {
  return (
    <div className={cardWithImageStyles()}>
      <CardText textColor={textColor} {...props} />
      <img
        className="h-24 w-24 object-cover rounded-md"
        src={imageUrl}
        alt={imageAlt}
      />
    </div>
  );
}
