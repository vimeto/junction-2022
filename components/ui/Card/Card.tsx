import { cva, VariantProps } from "class-variance-authority";

const cardStyles = cva("card shadow-aapon-varjo rounded-xl", {
  variants: {
    isActive: {
      primaryActive: "bg-sky-500",
      primaryNonActive: "bg-sky-200",
      secondaryActive: "bg-teal-500",
      secondaryNonActive: "bg-teal-200",
    },
    padding: {
      0: "p-0",
      2: "p-2",
      4: "p-4",
      6: "p-6",
    },
  },
  defaultVariants: {
    padding: 6,
  },
});

export interface Props
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    VariantProps<typeof cardStyles> {}

export function Card({ isActive, padding, ...props }: Props) {
  return <div className={cardStyles({ isActive, padding })} {...props} />;
}
