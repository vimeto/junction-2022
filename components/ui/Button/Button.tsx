import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "flex items-center justify-center px-4 py-2 rounded-full font-medium focus:outline-none overflow-hidden shadow-lg",
  {
    variants: {
      intent: {
        primary:
          "bg-gradient-to-r from-cyan-100 to-cyan-300 enabled:hover:from-cyan-200  enabled:hover:to-cyan-400",
        secondary:
          "bg-gradient-to-r from-teal-100 to-teal-300 enabled:hover:from-teal-200  enabled:hover:to-teal-400",
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
