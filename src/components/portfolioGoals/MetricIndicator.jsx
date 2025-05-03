export default function MetricIndicator({ value, status }) {
  return (
    <div className="relative flex items-center justify-between mt-1 text-sm font-semibold">
      <span className="text-white ml-[48.2%] absolute -translate-x-1/2">
        {value}%
      </span>
      <div
        className={`text-${
          status === "GOOD" ? "green" : "yellow"
        }-400 text-xs text-center mt-1`}
      >
        {status}
      </div>
    </div>
  );
}
