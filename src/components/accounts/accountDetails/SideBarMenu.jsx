export default function SidebarMenu() {
  return (
    <aside className=" w-80  p-4 space-y-6 border-r border-dashed border-gray-400">
      {/* DECISION SUPPORT section inside a box */}
      <div className="bg-[#1E293B] rounded-lg p-3 space-y-2">
        <h3 className="text-md flex items-center justify-between mb-5">
          <span>DECISION SUPPORT</span>
          <span className="border border-white px-2 py-0.5 rounded-md  text-s">
            4
          </span>
        </h3>
        <div className="space-y-1 mt-2">
          {[
            "Winnability",
            "Exposure Review & Suggested Coverage",
            "Portfolio Strategy Alignment",
            "Broker Analytics",
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-md cursor-pointer hover:bg-blue-700 ${
                item === "Winnability" ? "bg-blue-800" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Other sections remain outside the box */}
      <div>
        <h3 className="text-sm font-semibold text-gray-400 flex items-center justify-between">
          <span>RISK ASSESSMENT</span>
          <span className="bg-[#334155] px-2 py-0.5 rounded-full text-xs">
            6
          </span>
        </h3>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-400 flex items-center justify-between">
          <span>DOCUMENTS AND COMPLIANCE</span>
          <span className="bg-[#334155] px-2 py-0.5 rounded-full text-xs">
            2
          </span>
        </h3>
      </div>
    </aside>
  );
}
