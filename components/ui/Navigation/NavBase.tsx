export function NavBase({ ...props }) {
  return (
    <nav className="fixed bottom-0 inset-z-0 w-full max-w-sm shadow-inner h-16 bg-white z-10 flex items-center">
      <div className="container mx-auto py-2">
        <div className="flex flex-row justify-around" {...props} />
      </div>
    </nav>
  );
}
