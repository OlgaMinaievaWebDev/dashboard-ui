import { CheckCircle, Circle } from "lucide-react";

function StatusCard({ label, isCompleted }) {
  return (
    <div className="flex flex-col items-center text-white">
      <div
        className="w-6 h-6 flex items-center justify-center rounded-full border border-dashed"
        style={{ borderColor: isCompleted ? "#00D084" : "#888" }}
      >
        {isCompleted ? (
          <CheckCircle className="text-[#00D084] w-5 h-5" />
        ) : (
          <Circle className="text-gray-500 w-5 h-5" />
        )}
      </div>
      <span className="text-sm mt-1">{label}</span>
    </div>
  );
}
export default StatusCard;
