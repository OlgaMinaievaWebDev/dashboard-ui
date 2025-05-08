export const StatusBadges = ({ status }) => {
  if (!status) return null;

  const statusColors = {
    // Numeric percentages
    ...Object.fromEntries(
      Array.from({ length: 101 }, (_, i) => [
        `${i}%`,
        i <= 30
          ? "bg-jade text-white px-4 py-2 rounded-full"
          : i <= 60
          ? "bg-yellow-500 text-white px-4 py-2 rounded-full"
          : "bg-red-500 text-white px-4 py-2 rounded-full",
      ])
    ),

    // Status types
    HIGH: "bg-azure px-4 py-2 rounded-full w-24 text-center flex items-center justify-center",
    ACTIVE:
      "bg-azure px-4 py-2 rounded-full w-24 text-center flex items-center justify-center",
    CAUTIOUS:
      "bg-azure px-4 py-2 rounded-full w-24 text-center flex items-center justify-center",
    MEDIUM:
      "bg-azure px-4 py-2 rounded-full w-24 text-center flex items-center justify-center",
    PENDING:
      "bg-yellow-500 px-4 py-2 rounded-full w-24 text-center flex items-center justify-center",

    // Numeric values
    ...Object.fromEntries(
      Array.from({ length: 200 }, (_, i) => [
        i,
        "border-2 border-azure px-4 py-2 rounded-full text-azure",
      ])
    ),

    // Text values
    "Very Strong":
      "border-2 border-azure px-4 py-2 rounded-full w-24 text-center flex items-center justify-center",
    Strong:
      "border-2 border-azure px-4 py-2 rounded-full w-24 text-center flex items-center justify-center",
    Medium:
      "border-2 border-azure px-4 py-2 rounded-full w-24 text-center flex items-center justify-center",
    Weak: "border-2 border-azure px-4 py-2 rounded-full w-24 text-center flex items-center justify-center",
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
