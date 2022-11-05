import { cva, VariantProps } from "class-variance-authority";

const cardStyles = cva("card shadow-aapon-varjo p-6 rounded-xl", {
  variants: {
    isActive: {
      primaryActive: "bg-sky-500",
      primaryNonActive: "bg-sky-200",
      secondaryActive: "bg-teal-500",
      secondaryNonActive: "bg-teal-200",
    },
  },
});

export interface Props
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    VariantProps<typeof cardStyles> {}

export function Card({ isActive, ...props }: Props) {
  return <div className={cardStyles({ isActive })} {...props} />;
}
