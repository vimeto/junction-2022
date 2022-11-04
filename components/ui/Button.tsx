import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
  'flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none',
  {
    variants: {
      intent: {
        primary: 'bg-green-200 hover:bg-green-300',
        secondary: 'bg-gray-200',
        danger: 'bg-red-500'
      },
      fullWidth: {
        true: 'w-full'
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  },
);

export interface Props extends React.HTMLProps<HTMLButtonElement>, VariantProps<typeof buttonStyles> {};

export function Button({ intent, fullWidth, type, ...props }: Props) {
  return (
    <button className={buttonStyles({ intent, fullWidth })} {...props} />
  )
}
