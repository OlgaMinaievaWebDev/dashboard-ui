// src/components/StatusBadge.jsx
export const StatusBadge = ({ status }) => {
  const statusColors = {
    "Under review": "bg-orange-100 text-orange-800",
    HR: "bg-green-100 text-green-800",
    Achiev: "bg-blue-100 text-blue-800",
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-medium rounded-full ${
        statusColors[status] || "bg-gray-100 text-gray-800"
      }`}
    >
      {status}
    </span>
  );
};
