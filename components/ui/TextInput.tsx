import { cva, VariantProps } from "class-variance-authority";
import React, { RefObject } from "react";

const inputStyles = cva("input w-full max-w-xs", {
  variants: {
    intent: {
      bordered: "input-bordered",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    intent: "bordered",
  },
});

export interface Props
  extends React.HTMLProps<HTMLInputElement>,
    VariantProps<typeof inputStyles> {}

export const TextInput = React.forwardRef<HTMLInputElement, Props>(
  ({ fullWidth, intent, ...props }: Props, ref) => {
    return (
      <input
        className={inputStyles({ fullWidth, intent })}
        {...props}
        ref={ref}
      />
    );
  }
);
