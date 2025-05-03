import { NavLink } from "react-router-dom";
import { tabsData } from "../../data/tabsData";
import TabButton from "./TabButton";

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

export default function TabsContainer({ scrollRef }) {
  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-auto no-scrollbar space-x-2 flex-1"
    >
      {tabsData.map((tab) => {
        const isDisabled = unavailableTabs.includes(tab.to);
        return <TabButton key={tab.to} tab={tab} isDisabled={isDisabled} />;
      })}
    </div>
  );
}
