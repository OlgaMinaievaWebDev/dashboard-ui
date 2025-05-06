function MetricCard({
  title,
  subtitle,
  description,
  extra,
  linkText,
  indicatorCount = 0,
}) {
  return (
    <div className="bg-[#12172A] rounded-2xl p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <p className="text-lg tracking-wide">{title}</p>{" "}
          {/* stretched title */}
          {indicatorCount > 0 && (
            <div className="flex space-x-2">
              {Array.from({ length: indicatorCount }).map((_, i) => (
                <div key={i} className="w-3 h-3 bg-azure rounded-full" />
              ))}
            </div>
          )}
        </div>
        <h2 className="text-4xl text-white tracking-wider">{subtitle}</h2>{" "}
        {/* subtitle stretched */}
        {description && (
          <p className="text-md text-gray-400 tracking-wide">{description}</p>
        )}
        {extra && <p className="text-gray-400 tracking-wider">{extra}</p>}
      </div>
      <a
        href="#"
        className="text-azure text-sm underline mt-2 inline-block tracking-wide"
      >
        {linkText}
      </a>
    </div>
  );
}
