import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function TrendChart({ data }) {
  return (
    <div className="bg-[#1E293B] p-4 rounded-xl flex flex-col gap-4 justify-center ">
      <h2 className="text-xl mb-2">Historical trend</h2>
      <ResponsiveContainer width="100%" height={100}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <XAxis
            dataKey="name"
            interval={0}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip
            contentStyle={{ backgroundColor: "#1E293B", border: "none" }}
            labelStyle={{ color: "#94a3b8" }}
          />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#60A5FA"
            strokeWidth={3.5}
            dot={false}
            activeDot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
