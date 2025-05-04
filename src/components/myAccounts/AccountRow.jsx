// src/components/AccountRow.jsx
import { StatusBadge } from "./StatusBadge";
import { ColorBadge } from "./ColorBadge";

export const AccountRow = ({ account }) => (
  <tr className="hover:bg-gray-50 transition-colors">
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="font-medium text-gray-900">{account.accountName}</div>
      <div className="text-sm text-gray-500">{account.type}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
      {account.broker}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
      {account.reviewDate}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-gray-500 font-medium">
      {account.reviewDate}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
      {account.premium}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
      {account.ratedPremium}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
      <ColorBadge status={account.lossRatio} />
    </td>
    <td className="px-6 py-4 whitespace-nowrap">{account.appetite}</td>
    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
      {account.status}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
      {account.triage}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
      {account.winnability}
    </td>
  </tr>
);
