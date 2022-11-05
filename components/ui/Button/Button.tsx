import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "flex items-center justify-center px-4 py-2 rounded-full font-medium focus:outline-none",
  {
    variants: {
      intent: {
        primary: "bg-blue-300 hover:bg-blue-500",
        secondary: "bg-gray-200",
        danger: "bg-red-500",
      },
      fullWidth: {
        true: "w-full",
      },
      noPadding: {
        true: "py-0",
      },
      btnSize: {
        large: "w-80 py-4",
      },
      textColor: {
        white: "text-white",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export interface Props
  extends React.HTMLProps<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export function Button({
  intent,
  fullWidth,
  type,
  btnSize,
  noPadding,
  textColor,
  ...props
}: Props) {
  return (
    <button
      className={buttonStyles({
        intent,
        fullWidth,
        btnSize,
        noPadding,
        textColor,
      })}
      {...props}
    />
  );
}
