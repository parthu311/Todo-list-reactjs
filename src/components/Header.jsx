import { CheckSquare } from 'lucide-react';


function Header() {
  return (
    <>
    <div className=" bg-background  flex flex-col my-9 items-center p-4">
      <div className="w-full max-w-2xl">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckSquare className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Todo List</h1>
          </div>
        </header>
        </div>
        </div>
    </>
  );
}

export default Header;
