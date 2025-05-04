export default function Tabs({ tabs}) {
  return (
    <div className="flex flex-col space-x-2 mb-4 gap-2">
      {tabs.map((tab) => (
        <button
        key={tab.label} 
        className="bg-azure text-white rounded-3xl text-md px-4 py-2">
          {tab.label}
        </button>
      ))}
    </div>
  );
}
