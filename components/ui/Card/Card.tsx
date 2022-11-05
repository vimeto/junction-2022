import { cva, VariantProps } from "class-variance-authority";

const cardStyles = cva("card w-96 bg-base-100 shadow-xl p-6 rounded-xl", {
  variants: {
    bgGray: {
      true: "bg-blue-300 hover:bg-green-300",
    },
  },
});

export interface Props
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    VariantProps<typeof cardStyles> {}

export function Card({ bgGray, ...props }: Props) {
  return <div className={cardStyles({ bgGray })} {...props} />;
}
