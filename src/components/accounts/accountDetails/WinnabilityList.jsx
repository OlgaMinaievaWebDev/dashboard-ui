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
            <div className="flex items-center justify-between mb-4">
              {/* Number on the left with very small gap */}
              <div className="flex items-center space-x-0.5 w-1/12">
                <span className="w-8 h-8 flex items-center justify-center border-2 border-green-500 rounded-full text-xs text-green-500">
                  {i + 1}
                </span>
              </div>

              {/* Title above the bar, bar, and percentage in the same line */}
              <div className="flex flex-col w-11/12">
                <span className="text-sm text-white mb-2">{label}</span>
                <div className="flex items-center w-full">
                  <div className="flex-1 bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${color}`}
                      style={{ width: `${Math.abs(parseInt(value))}%` }}
                    />
                  </div>
                  <span className="text-gray-400 text-sm ml-2">{value}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
