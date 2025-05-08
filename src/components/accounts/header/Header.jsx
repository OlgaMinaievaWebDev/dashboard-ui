import logoImg from "../../../assets/Ship-Logo.jpg";


function Header() {
  return (
    <div>
      <p className="text-sm text-gray-400">
        Dashboard // Accounts //{" "}
        <span className="text-blue-400">Maritime Logistics Corp</span>
      </p>
      <div className="flex items-center space-x-4 mt-4">
        <div className="w-20 h-18 rounded-full flex items-center justify-center">
          <img src={logoImg} alt="Logo" className="rounded-full w-20 h-18 " />
        </div>
        <div className="flex flex-col justify-center pr-4">
          <div>
            <h1 className="text-2xl space-x-1">Maritime Logistics Corp</h1>
          </div>
          <div className="flex items-center justify-evenly space-x-4 text-sm mt-2 w-xl">
            <div>
              <p className="text-sm border-r border-gray-400">
                425 Harbor Boulevard, Suite 300, Seattle, WA 98104
              </p>
            </div>
            <div className="flex flex-col text-sm border-r border-gray-400 text-gray-400">
              <p>
                EXISTING ACCOUNT <span className="text-white block">54383</span>
              </p>
            </div>
            <div className="flex flex-col space-x-4 text-sm text-gray-400 mt-1 border-r border-gray-400">
              <p>
                BROKER <span className="text-white block">Marsh McLennan</span>
              </p>
            </div>
            <div className="flex flex-col space-x-4 text-sm text-gray-400 mt-1">
              <p>
                UNDERWRITER
                <span className="text-white block">Kate Johnson</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
