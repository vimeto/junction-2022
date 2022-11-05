import { cva, VariantProps } from "class-variance-authority";

const textButtonStyles = cva(
  "font-serif text-sm text-black hover:text-sky-500",
  {
    variants: {
      paddingLeft: {
        true: "pl-2",
      },
    },
  }
);

export interface Props
  extends React.HTMLProps<HTMLButtonElement>,
    VariantProps<typeof textButtonStyles> {}

export function TextButton({ paddingLeft, type, ...props }: Props) {
  return <button className={textButtonStyles({ paddingLeft })} {...props} />;
}
