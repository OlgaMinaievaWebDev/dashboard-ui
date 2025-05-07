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
    <div className="bg-[#1E293B] p-4 rounded-xl">
      <h2 className="text-sm text-gray-400">Historical trend</h2>
      <ResponsiveContainer width="100%" height={60}>
        <LineChart data={data}>
          <XAxis dataKey="name" hide />
          <YAxis hide />
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
  );
}
