import { useState } from "react";
import { tabs, data } from "../../../data/workQueue";
import Tabs from "./Tabs";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function WorkQueue() {
  const [activeTab, setActiveTab] = useState("Assigned to me");

  return (
    <div className="bg-[#101827] text-white rounded-2xl shadow-lg w-full  mx-auto px-6 py-4">
      <h2 className="text-xl mb-4">Work Queue</h2>

      <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <TableHeader />
          <tbody>
            {data.map((row, idx) => (
              <TableRow
                key={idx}
                row={row}
                className={idx % 2 === 0 ? "bg-[#1a2332]" : "bg-[#202e4b]"}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
