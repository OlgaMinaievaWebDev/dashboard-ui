export default function SidebarMenu() {
  return (
    <aside className="bg-[#1E293B] w-64 rounded-xl p-4 space-y-6">
      {[
        {
          title: "DECISION SUPPORT",
          count: 4,
          items: [
            "Winnability",
            "Exposure Review & Suggested Coverage",
            "Portfolio Strategy Alignment",
            "Broker Analytics",
          ],
        },
        { title: "RISK ASSESSMENT", count: 6 },
        { title: "DOCUMENTS AND COMPLIANCE", count: 2 },
      ].map((section, i) => (
        <div key={i}>
          <h3 className="text-sm font-semibold text-gray-400">
            {section.title}
            <span className="ml-2 bg-[#334155] px-2 py-0.5 rounded-full text-xs">
              {section.count}
            </span>
          </h3>
          {section.items && (
            <ul className="mt-2 space-y-2">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className={
                    item === "Winnability" ? "bg-blue-800 rounded-lg p-2" : ""
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
}
