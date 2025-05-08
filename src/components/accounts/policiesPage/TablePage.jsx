import { AccountsTable } from "../../dashboard/myAccounts/AccountsTable";

const otherData = [
  {
    id: 1,
    name: "Marine Cargo",
    type: "6/30/2026",
    coverage: "6/30/2027",
    broker: "Active",
    expirationDate: "587,500",
    currentPremium: "605,000",
    proposedPremium: "$610,000",
    lossRatio: "$620,000",
    status: "$625,000",
    triage: "3.3%",
    winnability: "22%",
  },
  {
    id: 2,
    name: "General Liability",
    type: "6/30/2026",
    coverage: "6/30/2027",
    broker: "Active",
    expirationDate: "160,000",
    currentPremium: "165,000",
    proposedPremium: "$170,000",
    lossRatio: "$172,500",
    status: "$175,000",
    triage: "6.1%",
    winnability: "55%",
  },
  {
    id: 3,
    name: "Workers Corp",
    type: "Pending",
    coverage: "Pending",
    broker: "Pending",
    expirationDate: "0",
    currentPremium: "0",
    proposedPremium: "$73,500",
    lossRatio: "$75,000",
    status: "$75,000",
    triage: "N/A",
    winnability: "N/A",
  },
  {
    id: 4,
    name: "Umbrella",
    type: "13/03/2026",
    coverage: "13/03/2027",
    broker: "Active",
    expirationDate: "245,000",
    currentPremium: "250,000",
    proposedPremium: "$267,500",
    lossRatio: "$270,000",
    status: "$275,000",
    triage: "10%",
    winnability: "78%",
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
  expDate: item.coverage,
  status: item.broker,
  expiringTech: item.expirationDate,
  expiringPremium: item.currentPremium,
  renewalToTech: item.proposedPremium,
  renewalTech: item.lossRatio,
  renewalPremium: item.status,
  rateChange: item.triage,
  lossRatio: item.winnability,
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