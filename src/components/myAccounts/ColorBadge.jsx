export const ColorBadge = ({ status }) => {
 const statusColors = {
  "32%": "bg-jade text-white",
  "25%": "bg-jade text-white", // Green for good status
   "38%": "bg-yellow-500 text-white", // Yellow for warning
   "67%": "bg-red-500 text-white", // Red for critical status
   HIGH: "bg-red-100 text-red-800 border-red-200", // For lossRatio
   Achiev: "bg-blue-100 text-blue-800 border-blue-200", // For appetite
   MEGUM: "bg-purple-100 text-purple-800 border-purple-200",
   "GUI/TODS": "bg-indigo-100 text-indigo-800 border-indigo-200",
   HR: "bg-green-100 text-green-800 border-green-200", // For status
   "Under review": "bg-orange-100 text-orange-800 border-orange-200",
 };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        statusColors[status] || "bg-gray-100 text-gray-800"
      }`}
    >
      {status}
    </span>
  );
};
