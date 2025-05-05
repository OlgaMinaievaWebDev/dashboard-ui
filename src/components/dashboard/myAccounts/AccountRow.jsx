import { MoreVertical } from "lucide-react";
import { StatusBadges } from "./StatusBadges";

export const AccountRow = ({ account, className }) => (
  <tr className={`hover:bg-[#1f2630] ${className || ""}`}>
    <td className="px-6 py-4 whitespace-nowrap text-sm">
      <div className="font-medium">{account.accountName}</div>
      <div className="text-sm text-gray-500">{account.type}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">{account.line}</td>
    <td className="px-6 py-4 whitespace-nowrap">{account.broker}</td>
    <td className="px-6 py-4 whitespace-nowrap">{account.reviewDate}</td>
    <td className="px-6 py-4 whitespace-nowrap font-medium text-azure">
      {account.premium}
    </td>
    <td className="px-6 py-4 whitespace-nowrap ">{account.ratedPremium}</td>
    <td className="px-6 py-4 whitespace-nowrap">
      <StatusBadges status={account.lossRatio} />
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <StatusBadges status={account.appetite} />
    </td>
    <td className="px-6 py-4 whitespace-nowrap">{account.status}</td>
    <td className="px-6 py-4 whitespace-nowrap">
      <StatusBadges status={account.triage} />
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <StatusBadges status={account.winnability} />
    </td>
    <td className="px-2 py-3 text-right">
      <MoreVertical className="p-1 rounded-full w-7 h-7 border border-white"/>
    </td>
  </tr>
);
