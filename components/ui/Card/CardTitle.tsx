import { cva, VariantProps } from 'class-variance-authority';

const cardTitleStyles = cva(
  'font-bold text-xl mb-2',
  {
    variants: {
      titleTextColor: {
        green: "text-green-200",
        blue: "text-blue-200",
        black: "text-black-200"
      },
    },
  },
);


export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, VariantProps<typeof cardTitleStyles> {};

export function CardTitle({ titleTextColor, ...props }: Props) {
  return (
    <div className={cardTitleStyles({ titleTextColor })} {...props} />
  )
}
