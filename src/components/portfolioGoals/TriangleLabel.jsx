const TriangleLabel = ({ position, label, color = "border-t-green-500" }) => (
  <div
    className="absolute top-full mt-1 text-xs font-medium text-center"
    style={{ left: `${position}%`, transform: "translateX(-50%)" }}
  >
    <div
      className={`w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent ${color}`}
    />
    <div className="text-green-400">{label}</div>
  </div>
);

export default TriangleLabel;
