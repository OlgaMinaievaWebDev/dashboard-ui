export function ScoreCard({ title, value, description }) {
  return (
    <div className="bg-[#1E293B] p-4 rounded-xl flex flex-col justify-between">
      <h2 className="text-xl">{title}</h2>
      <div className="flex items-center gap-2">
        <p className="text-4xl font-bold">{value}</p>
        <div className="flex items-center gap-1 text-azure justify-start text-sm mt-1 rounded-2xl border border-azure w-fit px-3 py-1">
          <div className="rounded-full w-2 h-2 bg-azure"></div>
          <div className="rounded-full w-2 h-2 bg-azure"></div>
          <div className="rounded-full w-2 h-2 bg-azure"></div>
          <div className="rounded-full w-2 h-2 bg-azure"></div>
          {description}
        </div>
      </div>
    </div>
  );
}
