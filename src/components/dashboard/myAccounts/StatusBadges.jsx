export const StatusBadges = ({ status }) => {
 const statusColors = {
   "32%": "bg-jade text-white px-4 py-2 rounded-full",
   "25%": "bg-jade text-white px-4 py-2 rounded-full",
   "38%": "bg-yellow-500 text-white px-4 py-2 rounded-full",
   "67%": "bg-red-500 text-white px-4 py-2 rounded-full",
   HIGH: "bg-azure px-4 py-2 rounded-full w-24 text-center flex items-center justify-center",
   ACTIVE:
     "bg-azure px-4 py-2 rounded-full w-24 text-center flex items-center justify-center",
   CAUTIOUS:
     "bg-azure px-4 py-2 rounded-full w-24 text-center flex items-center justify-center",
   MEDIUM:
     "bg-azure px-4 py-2 rounded-full w-24 text-center flex items-center justify-center",
   182: "border-2 border-azure px-4 py-2 rounded-full text-azure",
   180: "border-2 border-azure px-4 py-2 rounded-full text-azure",
   165: "border-2 border-azure px-4 py-2 rounded-full text-azure",
   158: "border-2 border-azure px-4 py-2 rounded-full text-azure",
   "Very Strong":
     "border-2 border-azure px-4 py-2 rounded-full w-24 text-center flex items-center justify-center",
   Strong:
     "border-2 border-azure px-4 py-2 rounded-full w-24 text-center flex items-center justify-center",
   "Medium":
     "border-2 border-azure px-4 py-2 rounded-full w-24 text-center flex items-center justify-center",
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
