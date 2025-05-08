import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NewNavbar from "../components/navbar/NewNavbar";



function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-oxford-blue text-white px-12 py-6">
      <Header />
      <div className="px-4 py-2">
      <NewNavbar/>
      </div>
      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
