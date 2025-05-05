import React from "react";

const Header = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white p-8 space-y-10">
      {/* Breadcrumb and Header */}
      <div>
        <p className="text-sm text-gray-400">
          Dashboard // Accounts //{" "}
          <span className="text-blue-400">Maritime Logistics Corp</span>
        </p>
        <div className="flex items-center space-x-4 mt-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <img src="/logo-placeholder.png" alt="Logo" className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Maritime Logistics Corp</h1>
            <p className="text-sm text-gray-400">
              425 Harbor Boulevard, Suite 300, Seattle, WA 98104
            </p>
            <div className="flex space-x-4 text-sm text-gray-400 mt-1">
              <span>EXISTING ACCOUNT: 54383</span>
              <span>BROKER: Marsh McLennan</span>
              <span>UNDERWRITER: Kate Johnson</span>
            </div>
          </div>
        </div>
      </div>

      {/* Attention Banner */}
      <div className="border border-yellow-400 bg-yellow-900 bg-opacity-10 p-4 rounded-lg space-y-2">
        <p className="text-yellow-400 font-medium flex items-center">
          <span className="mr-2">⚠️</span> Needs Attention
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-blue-400">
          <p>
            Marine Survey Required{" "}
            <span className="text-gray-400">Scheduled for 06/12/2025</span>{" "}
            <a href="#" className="underline">
              Review details link →
            </a>
          </p>
          <p>
            Loss Control Complete{" "}
            <span className="text-gray-400">Last inspection: 02/15/2025</span>{" "}
            <a href="#" className="underline">
              View report →
            </a>
          </p>
          <p>
            Claims Review Required{" "}
            <span className="text-gray-400">3 open claims // $245,000 TTL</span>{" "}
            <a href="#" className="underline">
              View claims →
            </a>
          </p>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#12172A] rounded-2xl p-4">
          <p className="text-sm text-gray-400 mb-2">Winnability</p>
          <h2 className="text-2xl font-semibold">Very Strong</h2>
          <a
            href="#"
            className="text-blue-400 text-sm underline mt-2 inline-block"
          >
            See all factors →
          </a>
        </div>
        <div className="bg-[#12172A] rounded-2xl p-4">
          <p className="text-sm text-gray-400 mb-2">Loss Ratio</p>
          <h2 className="text-2xl font-semibold">25%</h2>
          <p className="text-sm text-gray-400">vs 42% target</p>
          <a
            href="#"
            className="text-blue-400 text-sm underline mt-2 inline-block"
          >
            View history →
          </a>
        </div>
        <div className="bg-[#12172A] rounded-2xl p-4">
          <p className="text-sm text-gray-400 mb-2">Premium Growth</p>
          <h2 className="text-2xl font-semibold">12.4%</h2>
          <p className="text-sm text-gray-400">$123M vs $150M Target</p>
          <a
            href="#"
            className="text-blue-400 text-sm underline mt-2 inline-block"
          >
            View trend →
          </a>
        </div>
        <div className="bg-[#12172A] rounded-2xl p-4">
          <p className="text-sm text-gray-400 mb-2">Exposure Distribution</p>
          <div className="space-y-1">
            <div className="text-sm flex justify-between">
              <span>Marine Cargo</span>
              <span>71.4%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-full"
                style={{ width: "71.4%" }}
              ></div>
            </div>
            <div className="text-sm flex justify-between">
              <span>General Liability</span>
              <span>20%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="bg-blue-400 h-full"
                style={{ width: "20%" }}
              ></div>
            </div>
            <div className="text-sm flex justify-between">
              <span>Workers Comp</span>
              <span>8.6%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="bg-blue-300 h-full"
                style={{ width: "8.6%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Policies */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Policies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {[
            {
              title: "Marine Cargo",
              premium: "$625,000",
              date: "6/30/2026",
              icon: "🚢",
            },
            {
              title: "General Liability",
              premium: "$175,000",
              date: "6/30/2026",
              icon: "🛡️",
            },
            {
              title: "Workers Comp",
              premium: "$75,000",
              date: "---",
              icon: "⚒️",
            },
            {
              title: "Property",
              premium: "$64,829.83",
              date: "---",
              icon: "🏢",
            },
            {
              title: "Umbrella",
              premium: "$275,000",
              date: "13/03/2026",
              icon: "🌂",
            },
          ].map((policy, index) => (
            <div key={index} className="bg-[#12172A] rounded-2xl p-4">
              <div className="text-2xl mb-2">{policy.icon}</div>
              <p className="text-sm text-gray-400">{policy.title}</p>
              <p className="text-lg font-medium">Premium: {policy.premium}</p>
              <p className="text-sm text-gray-400">Eff.Date: {policy.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
