import { cva, VariantProps } from 'class-variance-authority';

export interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {};

export function CheckBox({checked, ...props}: Props) {
  return(
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text" {...props} /> 
        <input type="checkbox" checked={checked} className="m-4 checkbox checkbox-md" />
      </label>
    </div>
  )
}