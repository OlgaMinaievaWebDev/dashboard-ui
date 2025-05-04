// src/components/AccountRow.jsx
import { StatusBadge } from "./StatusBadge";

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
      {account.premium}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
      {account.ratedPremium}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
      {account.lossRatio}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
      {account.appetite}
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <StatusBadge status={account.status} />
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
      {account.trade}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
      {account.workability}
    </td>
  </tr>
);
