export default function PortfolioGoals() {
  return (
    <div className="bg-[#101827] text-white rounded-2xl shadow-lg p-6 w-full h-full flex flex-col justify-between space-y-6">
      <h2 className="text-xl font-semibold">Portfolio goals</h2>

      {/* Portfolio Loss Ratio */}
      <div>
        <div className="text-xs text-gray-400 font-medium mb-1">
          PORTFOLIO LOSS RATIO TARGET
        </div>
        <div className="text-xs text-gray-400 mb-1">TG: 55%</div>
        <div className="relative h-5 rounded-full overflow-hidden bg-red-600">
          <div
            className="absolute left-0 top-0 h-full bg-green-500"
            style={{ width: "48.2%" }}
          />
          <div className="absolute left-[48.2%] top-0 h-full w-[6.8%] bg-yellow-400" />
        </div>
        <div className="relative flex items-center justify-between mt-1 text-sm font-semibold">
          <span className="text-white ml-[48.2%] absolute -translate-x-1/2">
            48.2%
          </span>
        </div>
        <div className="text-green-400 text-xs text-center mt-1">
          -6.8% (GOOD)
        </div>
      </div>

      {/* Renewal Retention */}
      <div>
        <div className="text-xs text-gray-400 font-medium mb-1">
          RENEWAL RETENTION
        </div>
        <div className="text-xs text-gray-400 mb-1">TG: 85–90%</div>
        <div className="relative h-5 rounded-full overflow-hidden">
          <div className="absolute left-0 top-0 h-full bg-red-600 w-[10%]" />
          <div className="absolute left-[10%] top-0 h-full bg-green-500 w-[78%]" />
          <div className="absolute left-[88%] top-0 h-full bg-yellow-400 w-[12%]" />
        </div>
        <div className="relative flex items-center justify-between mt-1 text-sm font-semibold">
          <span className="text-white ml-[88%] absolute -translate-x-1/2">
            88%
          </span>
        </div>
        <div className="text-green-400 text-xs text-center mt-1">ON TARGET</div>
      </div>

      {/* New Business Target */}
      <div>
        <div className="text-xs text-gray-400 font-medium mb-1">
          NEW BUSINESS TARGET
        </div>
        <div className="relative h-5 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="bg-blue-500 h-full rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ width: "67%" }}
          >
            $8.1M
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>67%</span>
          <span>$12M</span>
        </div>
      </div>

      {/* Annual GWP Target */}
      <div>
        <div className="text-xs text-gray-400 font-medium mb-1">
          ANNUAL GWP TARGET
        </div>
        <div className="relative h-5 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="bg-blue-500 h-full rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ width: "68%" }}
          >
            $28.4M
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>68%</span>
          <span>$42M</span>
        </div>
      </div>
    </div>
  );
}
