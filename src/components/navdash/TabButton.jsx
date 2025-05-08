import { NavLink } from "react-router-dom";

export default function TabButton({ tab, isDisabled }) {
  const Icon = tab.icon;

  return (
    <NavLink
      to={isDisabled ? "#" : tab.to}
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded-full text-sm whitespace-nowrap hover:bg-[#1f2630] cursor-pointer ${
          isDisabled ? "" : isActive ? "bg-blue-600" : "bg-[#161B22]"
        }`
      }
      onClick={(e) => {
        if (isDisabled) {
          e.preventDefault();
        }
      }}
    >
      {({ isActive }) => (
        <>
          <Icon
            size={18}
            color={isDisabled || !isActive ? "#3B82F6" : "#FFFFFF"}
          />
          <span className="text-white">{tab.name}</span>
        </>
      )}
    </NavLink>
  );
}
