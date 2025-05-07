export function ScoreCard({ title, value, description }) {
  return (
    <div className="bg-[#1E293B] p-4 rounded-xl">
      <h2 className="text-sm text-gray-400">{title}</h2>
      <p className="text-4xl font-bold">{value}</p>
      <p className="text-blue-400 text-sm mt-1">{description}</p>
    </div>
  );
}
