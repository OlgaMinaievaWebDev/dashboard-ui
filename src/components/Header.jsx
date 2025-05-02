function Header() {
 return (
   <header className="flex justify-between items-center">
     <h1 className="text-xl font-semibold">
       Hi Arthur, welcome! You have 12 open tasks.
     </h1>
     <div className="flex items-center gap-4">
       <input
         type="text"
         placeholder="Search"
         className="bg-[#161B22] text-white px-4 py-2 rounded-md w-64 placeholder:text-gray-400"
       />
       <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
         AR
       </div>
     </div>
   </header>
 );
}

export default Header
