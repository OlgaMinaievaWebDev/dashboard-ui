// src/pages/AccountsPage.jsx

import { accounts } from "../../../data/myAccounts";
import { AccountsTable } from "./AccountsTable";

export const AccountsPage = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-[#101827] ">
      <div className=" mx-auto">
        <AccountsTable data={accounts} />
      </div>
    </div>
  );
};
