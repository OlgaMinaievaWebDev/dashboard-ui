const ProgressWithTarget = ({
  label,
  value,
  target,
  delta,
  statusLabel,
  targetMarker,
  valueLabel, // e.g. "48.2%" or "$8.1M"
  thresholds = [], // [{ from: 0, to: 55, color: 'bg-green-500' }, ...]
}) => {
  return (
    <div className="mb-8">
      <div className="text-gray-400 text-sm font-semibold mb-1">{label}</div>
      <div className="text-xs text-gray-500 mb-2">TG:{target}</div>

      <div className="relative h-6 rounded-full bg-gray-700 overflow-hidden">
        {/* Background segments based on thresholds */}
        {thresholds.map((t, idx) => (
          <div
            key={idx}
            className={`absolute top-0 left-[${t.from}%] h-full ${t.color}`}
            style={{ width: `${t.to - t.from}%` }}
          />
        ))}

        {/* Actual value progress marker */}
        <div
          className="absolute top-0 h-6 bg-black/40 flex items-center justify-center px-2 text-xs font-bold text-white rounded-full"
          style={{ left: `${value}%`, transform: "translateX(-50%)" }}
        >
          {valueLabel ?? `${value}%`}
        </div>

        {/* Arrow to show the target */}
        {targetMarker !== undefined && (
          <div
            className="absolute -top-3 w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-blue-500"
            style={{ left: `${targetMarker}%`, transform: "translateX(-50%)" }}
          />
        )}

        {/* Triangle and status label */}
        {statusLabel && (
          <div
            className="absolute top-full mt-2 text-xs font-semibold text-green-400 text-center"
            style={{ left: `${value}%`, transform: "translateX(-50%)" }}
          >
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-green-500 mx-auto" />
            <div>{statusLabel}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressWithTarget;
