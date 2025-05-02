import { Outlet } from "react-router-dom"
import Header from "./Header"
import Tabs from "./Tabs"

function Layout() {
 return (
  <div className="min-h-screen flex flex-col bg-azure">
   <Header />
   <div className="bg-white shadow-sm px-4 py-2">
    <Tabs/>
   </div>
   <main className="flex-grow p-6">
  <Outlet/>
   </main>
  </div>
 )
}

export default Layout
