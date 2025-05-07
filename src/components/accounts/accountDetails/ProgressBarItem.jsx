function ProgressBarItem({ label, value, percentage }) {
  return (
    <div className="text-sm flex items-center gap-5">
      <div className="w-full h-4 bg-gray-700 rounded-r-2xl overflow-hidden flex-1/2">
        <div
          className="bg-gradient-to-r from-blue-900 to-azure h-full rounded-r-2xl"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-md flex gap-1 flex-1/2">
        <span>{label}: </span>
        <span>{value}</span>
      </div>
    </div>
  );
}

export default ProgressBarItem;
