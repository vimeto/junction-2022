import { cva, VariantProps } from 'class-variance-authority';

const cardTextStyles = cva(
  'font-serif text-sm mb-2',
  {
    variants: {
      textColor: {
        green: "text-green-200",
        blue: "text-blue-200",
        black: "text-black-200"
      },
    },
  },
);


export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, VariantProps<typeof cardTextStyles> {};

export function CardText({ textColor, ...props }: Props) {
  return (
    <div className={cardTextStyles({ textColor })} {...props} />
  )
}