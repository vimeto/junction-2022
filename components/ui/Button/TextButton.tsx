import { cva, VariantProps } from "class-variance-authority";

const textButtonStyles = cva(
  "font-serif text-md text-black hover:text-cyan-500 text-cyan-700",
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
