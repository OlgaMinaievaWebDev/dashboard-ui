function BulletPoint({ color }) {
  const colorClasses = {
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
  };

  return (
    <span
      className={`flex-shrink-0 w-4 h-4 mt-2 rounded-full mr-2 ${colorClasses[color]}`}
    />
  );
}
export default BulletPoint;