import { AccountsTable } from "../../dashboard/myAccounts/AccountsTable";
const otherData = [
  {
    id: 1,
    name: "Marine Cargo",
    type: "Property",
    coverage: "Marine",
    broker: "ABC Brokers",
    expirationDate: "6/30/2026",
    currentPremium: "$587,500",
    proposedPremium: "$605,000",
    lossRatio: "3.3%",
    status: "Active",
    triage: "High",
    winnability: "Very Strong",
  },
  // ... more data items
];

const otherColumns = [
  "LINE",
  "EFF.DATE",
  "EXP.DATE",
  "STATUS",
  "EXPIRING TECH",
  "EXPIRING PREMIUM",
  "RENEWAL TO TECH",
  "RENEWAL TECH",
 "RENEWAL PREMIUM",
  "RATE CHANGE",
  "LOSS RATIO",
 
];

export const OtherDataPage = () => {
  return (
    <div className="p-4 md:p-8 bg-[#101827]">
      <div className="mx-auto">
        <AccountsTable
          data={otherData}
          columns={otherColumns}
          title="Policy Review"
        />
      </div>
    </div>
  );
};

export default OtherDataPage;