import React from "react";
import {myAccounts} from "../../data/myAccounts";
const AccountsTable = () => {
  

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My accounts</h1>
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
            Search
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
            Filter
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
            Sort
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
            Group
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">
            New
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ACCOUNT NAME/TYPE
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                LINE
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                BROKER
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                REVIEWAL DATE
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PREMIUM
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                RATED PREMIUM
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                LOSS RATIO
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                APPEITTE
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                STATUS
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                TRADE
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                WORKABILITY
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {accounts.map((account, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">
                    {account.accountName}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {account.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {account.broker}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {account.reviewDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
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
                <td
                  className={`px-6 py-4 whitespace-nowrap ${
                    account.status === "Under review"
                      ? "text-orange-500"
                      : "text-green-500"
                  }`}
                >
                  {account.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {account.trade}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {account.workability}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountsTable;
