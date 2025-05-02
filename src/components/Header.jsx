function Header() {
 return (
   <header className="flex justify-between mr-0 items-center bg-white p-4 shadow-md font-display">
     <h1>Hi Arthur, welcome! You have 12 open tasks.</h1>
     <div>
       <input type="text" placeholder="Search..." className="" />
       <span className="rounded-full text-2xl text-white bg-blue-700 p-1">
         AR
       </span>
     </div>
   </header>
 );
}

export default Header
