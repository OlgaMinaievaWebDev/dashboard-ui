import { MoreVertical } from "lucide-react";
import StatusDot from "./StatusDot";
import { statusColors } from "../../data/workQueue";

export default function TableRow({ row, className = "" }) {
  return (
    <tr
      className={`border-b border-gray-800 hover:bg-[#1f2630] transition ${className}`}
    >
      <td className="flex items-center space-x-3 px-2 py-3">
        <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center text-sm font-medium text-white">
          {row.initials}
        </div>
        <span>{row.name}</span>
      </td>
      <td className="px-2 py-3">
        <div className="font-medium">{row.client}</div>
        <div className="text-xs text-gray-400">{row.line}</div>
      </td>
      <td className="px-2 py-3">{row.type}</td>
      <td className="px-2 py-3 flex items-center space-x-2">
        <StatusDot colorClass={statusColors[row.status]} />
        <span>{row.status}</span>
      </td>
      <td className="px-2 py-3">{row.date}</td>
      <td className="px-2 py-3 text-right">
        <MoreVertical size={16} />
      </td>
    </tr>
  );
}

