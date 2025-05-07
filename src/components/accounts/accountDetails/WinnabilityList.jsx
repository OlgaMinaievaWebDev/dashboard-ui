export function WinnabilityList({ title, icon, color, items }) {
  return (
    <div className="bg-[#1E293B] p-4 rounded-xl">
      <div className="flex items-center space-x-2 mb-4">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2 text-sm">
        {items.map(([label, value], i) => (
          <li key={i}>
            <div className="flex justify-between">
              <span>
                {i + 1}. {label}
              </span>
              <span>{value}</span>
            </div>
            <div className="bg-gray-700 h-2 rounded-full">
              <div
                className={`${color} h-full`}
                style={{ width: Math.abs(parseInt(value)) + "%" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
