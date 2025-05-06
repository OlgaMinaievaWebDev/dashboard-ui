function PerformanceMetrics() {
  return (
    <>
      <h1 className="text-3xl mb-3">Performance Metrics</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#12172A] rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <p className="text-lg items-center ">Winnability</p>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-azure rounded-full"></div>
                <div className="w-3 h-3 bg-azure rounded-full"></div>
                <div className="w-3 h-3 bg-azure rounded-full"></div>
              </div>
            </div>
            <h2 className="text-5xl ">Very Strong</h2>
          </div>
          <a
            href="#"
            className="text-azure text-sm underline mt-2 inline-block "
          >
            See all factors →
          </a>
        </div>
        <div className="bg-[#12172A] rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <p className="text-lg  mb-2">Loss Ratio</p>

            <p className="text-md  text-gray-400">
              <span className="text-4xl text-white ">25%</span> vs 42% target
            </p>
          </div>
          <a
            href="#"
            className="text-blue-400 text-sm underline mt-2 inline-block"
          >
            View history →
          </a>
        </div>
        <div className="bg-[#12172A] rounded-2xl p-4 flex flex-col justify-between">
          <div>
            <p className="text-lg mb-2">Premium Growth</p>

            <p className="text-md text-gray-400">
              <span className="text-4xl text-white">12.4%</span> YOY increase
            </p>
            <p className="text-gray-400"> $123M vs $150M Target</p>
          </div>
          <a
            href="#"
            className="text-blue-400 text-sm underline mt-2 inline-block"
          >
            View trend →
          </a>
        </div>
        <div className="bg-[#12172A] rounded-2xl p-4 ">
          <p className="text-md mb-2">Exposure Distribution</p>
          <div className="space-y-1 flex flex-col">
            <div className="text-sm flex items-center gap-5">
              <div className="w-full h-4 bg-gray-700 rounded-r-2xl overflow-hidden flex-1/2">
                <div
                  className="bg-gradient-to-r from-blue-900 to-azure h-full rounded-r-2xl"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <div className="text-md flex gap-1 flex-1/2 ">
                <span>Marine Cargo: </span>
                <span>71.4%</span>
              </div>
            </div>

            <div className="text-sm flex items-center gap-5">
              <div className="w-full h-4 bg-gray-700 rounded-r-2xl overflow-hidden flex-1/2">
                <div
                  className="bg-gradient-to-r from-blue-900 to-azure h-full rounded-r-2xl"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <div className="text-md flex gap-1 flex-1/2 ">
                <span>General Liability: </span>
                <span>20%</span>
              </div>
            </div>

            <div className="text-sm flex items-center gap-5">
              <div className="w-full h-4 bg-gray-700 rounded-r-2xl overflow-hidden flex-1/2">
                <div
                  className="bg-gradient-to-r from-blue-900 to-azure h-full rounded-r-2xl"
                  style={{ width: "25%" }}
                ></div>
              </div>
              <div className="text-md flex gap-1 flex-1/2 ">
                <span>Workers Comp: </span>
                <span>8.6%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PerformanceMetrics
