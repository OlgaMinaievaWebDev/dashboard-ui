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
  // ... more data
];

const customColumns = [
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
  "ACTIONS",
];

const transformedData = otherData.map((item) => ({
  id: item.id,
  line: item.name,
  effDate: item.type, // Note: You might want to use a different field here
  expDate: item.expirationDate,
  status: item.status,
  expiringTech: item.currentPremium,
  expiringPremium: item.currentPremium,
  renewalToTech: item.proposedPremium,
  renewalTech: item.proposedPremium,
  renewalPremium: item.proposedPremium,
  rateChange: item.winnability,
  lossRatio: item.lossRatio,
}));

export const TablePage = () => {
  return (
    <div className="p-4 md:p-8 bg-[#101827]">
      <div className="mx-auto">
        <AccountsTable
          data={transformedData}  
          columns={customColumns}
        title=""
        />
      </div>
    </div>
  );
};

export default TablePage;