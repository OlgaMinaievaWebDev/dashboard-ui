// src/components/AccountsTable.jsx
import { TableActions } from "./TableActions";
import { AccountRow } from "./AccountRow";

const columns = [
  "ACCOUNT NAME/TYPE",
  "BROKER",
  "REVIEWAL DATE",
  "PREMIUM",
  "RATED PREMIUM",
  "LOSS RATIO",
  "APPETITE",
  "STATUS",
  "TRADE",
  "WORKABILITY",
];

export const AccountsTable = ({ data }) => (
  <div className=" p-6 rounded-lg shadow-sm">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold ">My Accounts</h1>
      <TableActions />
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead >
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200">
          {data.map((account) => (
            <AccountRow key={account.id} account={account} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
