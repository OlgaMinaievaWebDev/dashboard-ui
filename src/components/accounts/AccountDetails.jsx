import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ArrowDownCircle, ArrowUpCircle, CheckCircle } from "lucide-react";

const data = [
  { name: "Jan", score: 78 },
  { name: "Feb", score: 76 },
  { name: "Mar", score: 79 },
  { name: "Apr", score: 81 },
  { name: "Now", score: 82 },
];

export default function AccountDetails() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-6 font-sans">
      <div className="flex space-x-4">
        {/* Sidebar */}
        <aside className="bg-[#1E293B] w-64 rounded-xl p-4 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-400">
              DECISION SUPPORT{" "}
              <span className="ml-2 bg-[#334155] px-2 py-0.5 rounded-full text-xs">
                4
              </span>
            </h3>
            <ul className="mt-2 space-y-2">
              <li className="bg-blue-800 rounded-lg p-2">Winnability</li>
              <li>Exposure Review & Suggested Coverage</li>
              <li>Portfolio Strategy Alignment</li>
              <li>Broker Analytics</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400">
              RISK ASSESSMENT{" "}
              <span className="ml-2 bg-[#334155] px-2 py-0.5 rounded-full text-xs">
                6
              </span>
            </h3>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400">
              DOCUMENTS AND COMPLIANCE{" "}
              <span className="ml-2 bg-[#334155] px-2 py-0.5 rounded-full text-xs">
                2
              </span>
            </h3>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 space-y-6">
          <h1 className="text-3xl font-semibold">Winnability</h1>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#1E293B] p-4 rounded-xl">
              <h2 className="text-sm text-gray-400">Overall Score</h2>
              <p className="text-4xl font-bold">82%</p>
              <p className="text-blue-400 text-sm mt-1">Very Strong</p>
            </div>
            <div className="bg-[#1E293B] p-4 rounded-xl">
              <h2 className="text-sm text-gray-400">Historical trend</h2>
              <ResponsiveContainer width="100%" height={60}>
                <LineChart data={data}>
                  <XAxis dataKey="name" hide={true} />
                  <YAxis hide={true} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#60A5FA"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-[#1E293B] p-4 rounded-xl">
              <h2 className="text-sm text-gray-400">Position</h2>
              <div className="text-sm mt-2 space-y-1">
                <div className="flex justify-between">
                  <span>Your score: 82%</span>
                </div>
                <div className="bg-gray-700 h-2 rounded-full w-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[82%]" />
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Market Avg: 68%</span>
                  <span>Top competitor: 88%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#1E293B] p-4 rounded-xl">
              <div className="flex items-center space-x-2 mb-4">
                <ArrowUpCircle className="text-green-400" />
                <h3 className="text-lg font-semibold">
                  Increasing Winnability
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  ["Brokers relationship", "+28%"],
                  ["Loss history", "+22%"],
                  ["Industry growth", "+16%"],
                  ["Multiline opportunity", "+11%"],
                ].map(([label, value], i) => (
                  <li key={i} className="text-sm">
                    <div className="flex justify-between">
                      <span>
                        {i + 1}. {label}
                      </span>
                      <span>{value}</span>
                    </div>
                    <div className="bg-gray-700 h-2 rounded-full">
                      <div
                        className="bg-green-400 h-full"
                        style={{ width: value }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1E293B] p-4 rounded-xl">
              <div className="flex items-center space-x-2 mb-4">
                <ArrowDownCircle className="text-yellow-400" />
                <h3 className="text-lg font-semibold">
                  Decreasing Winnability
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  ["Premium pricing", "-24%"],
                  ["Total exposure", "-18%"],
                  ["Loss ratio trend", "-13%"],
                  ["Market competition", "-5%"],
                ].map(([label, value], i) => (
                  <li key={i} className="text-sm">
                    <div className="flex justify-between">
                      <span>
                        {i + 1}. {label}
                      </span>
                      <span>{value}</span>
                    </div>
                    <div className="bg-gray-700 h-2 rounded-full">
                      <div
                        className="bg-yellow-400 h-full"
                        style={{ width: Math.abs(parseInt(value)) + "%" }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#1E293B] p-6 rounded-xl space-y-4">
            <div className="flex items-center text-green-400 font-semibold text-sm">
              <CheckCircle className="mr-2" />
              AI-Powered Recommendations
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <div className="max-w-2xl">
                  <p>
                    Offer 5% premium discount in exchange for 3-year commitment
                  </p>
                  <p className="text-gray-400">
                    Historical win rate increases 24% with multi-year
                    commitments. Current pricing is 12% above market average.
                    This approach would strengthen retention while maintaining
                    adequate profitability.
                  </p>
                </div>
                <button className="bg-green-500 text-black px-4 py-1 rounded-lg self-start">
                  Apply
                </button>
              </div>
              <div className="flex justify-between">
                <div className="max-w-2xl">
                  <p>
                    Propose risk control services for cargo handling procedures
                  </p>
                  <p className="text-gray-400">
                    Can potentially reduce loss ratio by 15–20% based on similar
                    maritime accounts in your portfolio. Specific focus on
                    loading/unloading operations would address the most frequent
                    claim scenarios.
                  </p>
                </div>
                <button className="bg-green-500 text-black px-4 py-1 rounded-lg self-start">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
