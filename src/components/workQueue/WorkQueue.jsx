import { useState } from "react";
import { tabs, data } from "../../data/workQueue";
import Tabs from "./Tabs";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function WorkQueue() {
  const [activeTab, setActiveTab] = useState("Assigned to me");

  return (
    <div className="bg-[#101827] text-white rounded-2xl shadow-lg w-full  mx-auto">
      <h2 className="text-xl font-semibold mb-4">Work Queue</h2>

      <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <TableHeader />
          <tbody>
            {data.map((row, idx) => (
              <TableRow key={idx} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
