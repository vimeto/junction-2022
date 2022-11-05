import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "flex items-center justify-center px-4 py-2 rounded-full font-medium focus:outline-none overflow-hidden",
  {
    variants: {
      intent: {
        primary: "bg-blue-300 enabled:hover:bg-blue-500",
        secondary: "bg-gray-200",
        danger: "bg-red-500",
      },
      fullWidth: {
        true: "w-full",
      },
      noPadding: {
        true: "py-0",
      },
      disableBtn: {
        true: "cursor-not-allowed",
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
  disableBtn,
  noPadding,
  textColor,
  disabled,
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
        disableBtn,
      })}
      {...props}
      disabled={disableBtn ?? undefined}
    />
  );
}
