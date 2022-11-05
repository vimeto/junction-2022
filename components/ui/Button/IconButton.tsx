import { cva, VariantProps } from "class-variance-authority";

export interface Props extends React.HTMLProps<HTMLButtonElement> {}

export function IconButton({ type, ...props }: Props) {
  return (
    <button
      className="btn btn-square text-black hover:text-sky-500"
      {...props}
    />
  );
}
