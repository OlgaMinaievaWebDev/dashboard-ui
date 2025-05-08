// src/pages/AccountsPage.jsx

import { accounts } from "../../../data/myAccounts";
import { AccountsTable } from "./AccountsTable";

export const AccountsPage = () => {
  return (
    <div className="bg-[#101827] text-white rounded-2xl shadow-lg w-full mx-auto px-4 sm:px-6 md:px-8 py-4">
      <div className="w-full">
        <AccountsTable data={accounts}  />
      </div>
    </div>
  );
};
