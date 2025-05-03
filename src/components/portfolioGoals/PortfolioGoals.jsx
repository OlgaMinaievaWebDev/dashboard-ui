import ProgressWithTarget from "./ProgressWithTarget";

export default function PortfolioGoals() {
  return (
    <div className="bg-[#101827] text-white rounded-2xl shadow-lg p-6 w-full max-w-md space-y-6">
      <h2 className="text-xl font-semibold">Portfolio goals</h2>

      <ProgressWithTarget
        label="PORTFOLIO LOSS RATIO TARGET"
        value={48.2}
        valueLabel="48.2%"
        target="55%"
        targetMarker={55}
        statusLabel="-6.8% (GOOD)"
        thresholds={[
          { from: 0, to: 55, color: "bg-green-500" },
          { from: 55, to: 70, color: "bg-yellow-400" },
          { from: 70, to: 100, color: "bg-red-600" },
        ]}
      />

      <ProgressWithTarget
        label="RENEWAL RETENTION"
        value={88}
        valueLabel="88%"
        target="85–90%"
        targetMarker={88}
        statusLabel="ON TARGET"
        thresholds={[
          { from: 0, to: 80, color: "bg-red-600" },
          { from: 80, to: 90, color: "bg-green-500" },
          { from: 90, to: 100, color: "bg-yellow-400" },
        ]}
      />

      <ProgressWithTarget
        label="NEW BUSINESS TARGET"
        value={67}
        valueLabel="$8.1M"
        target="$12M"
        thresholds={[
          { from: 0, to: 67, color: "bg-blue-700" },
          { from: 67, to: 100, color: "bg-gray-700" },
        ]}
      />

      <ProgressWithTarget
        label="ANNUAL GWP TARGET"
        value={68}
        valueLabel="$28.4M"
        target="$42M"
        thresholds={[
          { from: 0, to: 68, color: "bg-blue-700" },
          { from: 68, to: 100, color: "bg-gray-700" },
        ]}
      />
    </div>
  );
}
