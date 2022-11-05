export function NavBase({...props}){
  return(
    <nav className="fixed bottom-0 inset-z-0 w-screen shadow-inner h-16 bg-white z-10">
      <div className="container mx-auto py-2">
        <div className="flex flex-row justify-around" {...props}/>
      </div>
    </nav>
  )
}