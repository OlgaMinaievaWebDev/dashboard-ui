export default function Tabs({ tabs, activeTab, onTabClick }) {
  return (
    <div className="flex space-x-2 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => onTabClick(tab.label)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeTab === tab.label
              ? "bg-blue-600 text-white"
              : "bg-[#1f2630] text-white"
          }`}
        >
          {tab.label} ({tab.count})
        </button>
      ))}
    </div>
  );
}
