export default function GoalBar({ label, value, target, color }) {
  const width = `${value}%`;
  const remaining = 100 - value;

  return (
    <div>
      <div className="text-xs text-gray-400 font-medium mb-1">{label}</div>
      <div className="text-xs text-gray-400 mb-1">TG: {target}%</div>
      <div className="relative h-5 rounded-full overflow-hidden bg-red-600">
        <div
          className={`absolute left-0 top-0 h-full ${color} `}
          style={{ width }}
        />
        {remaining > 0 && (
          <div
            className="absolute top-0 right-0 h-full bg-gray-600"
            style={{ width: `${remaining}%` }}
          />
        )}
      </div>
      <div className="relative flex items-center justify-between mt-1 text-sm font-semibold">
        <span className={`text-white ml-[${width}] absolute -translate-x-1/2`}>
          {width}
        </span>
      </div>
    </div>
  );
}
