export default function TargetLabel({ label, target }) {
  return (
    <div>
      <div className="text-xs text-gray-400 font-medium mb-1">{label}</div>
      <div className="text-xs text-gray-400 mb-1">TG: {target}</div>
    </div>
  );
}
