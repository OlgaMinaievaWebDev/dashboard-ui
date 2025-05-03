function Header() {
  return (
    <>
      <header className="flex justify-between items-center border-b border-gray-700 pb-4">
        <h1 className="text-3xl font-weight-light">
          Hi Arthur, welcome! You have 12 open tasks.
        </h1>
        <div className="flex items-center gap-4 ">
          <input
            type="text"
            placeholder="Search"
            className="bg-space-cadet w-64 text-white px-4 py-2 rounded-2xl w-64 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <div className="w-12 h-12 bg-[#1e4c95] rounded-full flex items-center justify-center text-white text-xl">
            AR
          </div>
        </div>
      </header>
    </>
  );
}

export default Header
