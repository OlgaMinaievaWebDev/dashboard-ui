
export const TableActions = () => (
  <div className="flex gap-2">
    {["Filter", "Sort", "Group", "+ New"].map((action) => (
      <button
        key={action}
        className="px-8 py-1 text-azure  border border-azure rounded-2xl text-sm hover:bg-azure hover:text-white transition-colors"
      >
        {action}
      </button>
    ))}
  </div>
);
