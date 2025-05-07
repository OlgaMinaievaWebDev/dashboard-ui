export function PositionProgress({ score }) {
  return (
    <div className="bg-[#1E293B] p-4 rounded-xl">
      <h2 className="text-sm text-gray-400">Position</h2>
      <div className="text-sm mt-2 space-y-1">
        <div className="flex justify-between">
          <span>Your score: {score}%</span>
        </div>
        <div className="bg-gray-700 h-2 rounded-full w-full overflow-hidden">
          <div className="bg-blue-500 h-full" style={{ width: `${score}%` }} />
        </div>
        <div className="flex justify-between text-xs text-gray-400">
          <span>Market Avg: 68%</span>
          <span>Top competitor: 88%</span>
        </div>
      </div>
    </div>
  );
}
