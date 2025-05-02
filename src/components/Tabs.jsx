import { House, Database, Users, FileCode2, Building2,Goal, KeyRound, ChevronRight, ChevronLeft } from "lucide-react"
import { useRef } from "react";
function Tabs() {
 // Tabs data
 const tabs = [
   { name: "Dashboard", icon: <House size={20} /> },
   { name: "Accounts", icon: <Database size={20} /> },
   { name: "Brokers", icon: <Users size={20} /> },
   { name: "Submission", icon: <FileCode2 size={20} /> },
   { name: "Organizations", icon: <Building2 size={20} /> },
   { name: "Goals & Rules", icon: <Goal size={20} /> },
   { name: "Admin", icon: <KeyRound size={20} />, id: "admin1" },
   { name: "Admin", icon: <KeyRound size={20} />, id: "admin2" },
   { name: "Admin", icon: <KeyRound size={20} />, id: "admin3" },
   { name: "Admin", icon: <KeyRound size={20} />, id: "admin4" },
   { name: "Admin", icon: <KeyRound size={20} />, id: "admin5" },
 ];

 const scrollRef = useRef(null)

 const scroll = (direction) => {
  if (scrollRef.current) {
   const scrollAmount = 150
   scrollRef.current.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
   });
  }
 }

 return (
   <div className="flex items-center gap-2 w-full">
     <div
       ref={scrollRef}
       className="flex overflow-x-auto no-scrollbar space-x-2 w-full px-2"
     >
       {tabs.map((tab) => (
         <div
           key={tab.id || tab.name}
           className="flex items-center p-2 hover:bg-gray-200 cursor-pointer flex-shrink-0 rounded-md"
         >
           {tab.icon}
           <span className="ml-2">{tab.name}</span>
         </div>
       ))}
     </div>
     <div>
       <button onClick={() => scroll("left")}>
         <ChevronLeft size={20} />
       </button>
       <button>
         <ChevronRight size={20}  onClick={()=>scroll('right')}/>
       </button>
     </div>
   </div>
 );
}

export default Tabs
