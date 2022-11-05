import { cva, VariantProps } from "class-variance-authority";
import React from "react";

export interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const CheckBox = React.forwardRef<HTMLInputElement, Props>(
  ({ checked, onChange, name, readOnly, ...props }: Props, ref) => {
    return (
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text" {...props} />
          <input
            type="checkbox"
            ref={ref}
            checked={checked}
            onChange={onChange}
            name={name}
            readOnly={readOnly}
            className="m-4 checkbox checkbox-md"
          />
        </label>
      </div>
    );
  }
);

CheckBox.displayName = "CheckBox";
