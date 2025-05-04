import ProgressWithTargetNivo from "./ProgressWithTargetNivo";

export default function PortfolioGoalsNivo() {
  return (
    <div className= "text-white rounded-2xl shadow-lg p-6 w-full max-w-md space-y-8 h-max">
      <h2 className="text-xl font-semibold">Portfolio goals</h2>

      <ProgressWithTargetNivo
        value={48.2}
        target={55}
        label="PORTFOLIO LOSS RATIO TARGET"
        barColors={[
          { value: 48.2, color: "#22C55E" }, // green
          { value: 36, color: "#FACC15" }, // yellow
          { value: 45, color: "#DC2626" }, // red
        ]}
      />

      <ProgressWithTargetNivo
        value={88}
        target={90}
        label="RENEWAL RETENTION"
        barColors={[
          { value: 15, color: "#DC2626" }, // red
          { value: 12, color: "#22C55E" }, // green
          { value: 70, color: "#FACC15" }, // yellow
        ]}
      />

      <ProgressWithTargetNivo
        value={8.1}
        target={12}
        label="NEW BUSINESS TARGET"
        barColors={[
          { value: 8.1, color: "#3B82F6" }, // blue
          { value: 3.9, color: "#374151" }, // gray (remaining)
        ]}
      />

      <ProgressWithTargetNivo
        value={28.4}
        target={42}
        label="ANNUAL GWP TARGET"
        barColors={[
          { value: 28.4, color: "#3B82F6" }, // blue
          { value: 13.6, color: "#374151" }, // gray
        ]}
      />
    </div>
  );
}
