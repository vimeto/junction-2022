import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const textAreaStyles = cva("textarea resize-none h-auto", {
  variants: {
    intent: {
      bordered: "textarea-bordered",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    intent: "bordered",
    fullWidth: true,
  },
});

export interface Props
  extends React.HTMLProps<HTMLTextAreaElement>,
    VariantProps<typeof textAreaStyles> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ fullWidth, intent, ...props }: Props, ref) => {
    return (
      <textarea
        className={textAreaStyles({ fullWidth, intent })}
        {...props}
        ref={ref}
      />
    );
  }
);

TextArea.displayName = "Textarea";

export { TextArea };
