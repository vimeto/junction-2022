import { cva, VariantProps } from "class-variance-authority";
import React from "react";

export interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const CheckBox = React.forwardRef<HTMLInputElement, Props>(
  ({ checked, onChange, ...props }: Props, ref) => {
    return (
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text" {...props} />
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="m-4 checkbox checkbox-md"
            ref={ref}
          />
        </label>
      </div>
    );
  }
);

CheckBox.displayName = "CheckBox";
