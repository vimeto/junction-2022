export interface Props extends React.HTMLProps<HTMLButtonElement> {};

export function TextButton({type, ...props}: Props) {
  return(
    <button className='font-serif text-sm mb-2 text-black hover:text-sky-500' {...props}/>
  )
}