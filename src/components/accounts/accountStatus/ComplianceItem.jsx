import { CheckCircle, Circle } from "lucide-react";

function ComplianceItem({ label }) {
  return (
    <div className="flex items-center space-x-2 text-white text-sm">
      <CheckCircle className="text-[#00D084] w-4 h-4" />
      <span>{label}</span>
    </div>
  );
}
export default ComplianceItem;
