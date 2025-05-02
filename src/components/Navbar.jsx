import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { tabsData } from "../data/tabsData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Navbar() {
  const scrollRef = useRef(null);

  // Function to handle scrolling left or right
  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -100 : 100,
        behavior: "smooth",
      });
    }
  };

  // List of routes to disable for navigation
  const unavailableTabs = [
    "/brokers",
    "/submissions",
    "/organizations",
    "/goals",
    "/admin/1",
    "/admin/2",
    "/admin/3",
    "/admin/4",
    "/admin/5",
  ];

  return (
    <div className="text-white p-4 space-y-4">
      <div className="flex items-center gap-2">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar space-x-2 flex-1"
        >
          {tabsData.map((tab) => {
            const Icon = tab.icon;
            const isTabDisabled = unavailableTabs.includes(tab.to); // Check if the tab is disabled

            return (
              <NavLink
                key={tab.id || tab.name + tab.to}
                to={isTabDisabled ? "#" : tab.to} // Prevent navigation if disabled
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-full text-sm whitespace-nowrap hover:bg-[#1f2630] cursor-pointer ${
                    isTabDisabled
                      ? "" // No style changes for disabled tabs
                      : isActive
                      ? "bg-blue-600"
                      : "bg-[#161B22]"
                  }`
                }
                onClick={(e) => {
                  if (isTabDisabled) {
                    e.preventDefault(); // Prevent navigation if tab is disabled
                  }
                }}
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={18}
                      color={
                        isTabDisabled || !isActive ? "#3B82F6" : "#FFFFFF" // Blue icon for disabled tabs
                      }
                    />
                    <span className="text-white">{tab.name}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Scroll buttons */}
        <button onClick={() => scroll("left")} className="p-1">
          <ChevronLeft size={20} />
        </button>
        <button onClick={() => scroll("right")} className="p-1">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
