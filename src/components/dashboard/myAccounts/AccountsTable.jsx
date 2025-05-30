import { TableActions } from "./TableActions";
import { AccountRow } from "./AccountRow";

const defaultColumns = [
  "ACCOUNT NAME/TYPE",
  "LINE",
  "BROKER",
  "REVIEWAL DATE",
  "PREMIUM",
  "RATED PREMIUM",
  "LOSS RATIO",
  "APPETITE",
  "STATUS",
  "TRIAGE",
  "WINNABILITY",
  "ACTIONS",
];

export const AccountsTable = ({
  data,
  columns = defaultColumns,
  title = "My Accounts",
}) => (
  <div className="rounded-lg shadow-sm ">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold ">{title}</h1>
      <input
        type="text"
        placeholder="Search"
        className="bg-space-cadet text-white px-4 py-2 rounded-2xl w-64 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <TableActions />
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={`column-${index}`}
                scope="col"
                className={`px-6 py-3 text-xs font-medium uppercase tracking-wider ${
                  column === "ACTIONS" ? "text-right" : "text-left"
                }`}
              >
                {column === "ACTIONS" ? "" : column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((account, index) => (
            <AccountRow
              key={account.id || index}
              account={account}
              columns={columns}
              className={index % 2 === 0 ? "bg-[#1a2332]" : "bg-[#202e4b]"}
            />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
