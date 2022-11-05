import Link, { LinkProps } from "next/link";
import { cva, VariantProps } from 'class-variance-authority';


const NavStyles = cva(
  'font-serif text-sm',
  {
    variants: {
      isActive: {
        true: "text-teal-400",
        false: "text-black"
      },
    },
  },
);

interface ChildrenProps {
  children: React.ReactNode
}

// type a = LinkProps


export interface Props extends LinkProps, VariantProps<typeof NavStyles>, ChildrenProps  {};

export function NavLink({href, isActive, children, ...props}: Props){
  return(
    <Link href={href} className={NavStyles({isActive})} {...props}>
      {children}
    </Link>
  )
}
