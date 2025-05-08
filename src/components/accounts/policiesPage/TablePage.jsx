import { AccountsTable } from "../../dashboard/myAccounts/AccountsTable";

const otherData = [
  {
    id: 1,
    name: "🚢 Marine Cargo",
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
    name: "🛡️ General Liability",
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
    name: "🔰 Workers Corp",
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
    name: " 🔰 Umbrella",
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
  effDate: item.type,
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
  const tableData = transformedData;

  const parseNumber = (value) =>
    parseFloat(value?.toString().replace(/[^0-9.-]/g, "")) || 0;

  const formatCurrency = (value) =>
    "$" + value.toLocaleString(undefined, { minimumFractionDigits: 0 });

  const safeAverage = (key) => {
    const values = tableData
      .map((item) => parseFloat(item[key]?.toString().replace(/[^0-9.-]/g, "")))
      .filter((v) => !isNaN(v));
    const avg = values.reduce((sum, v) => sum + v, 0) / (values.length || 1);
    return avg.toFixed(1) + "%";
  };

  const calculateTotals = () => {
    const totals = {
      id: "totals",
      line: "TOTALS",
      effDate: "",
      expDate: "",
      status: "",
    };

    // Sum numeric columns
    const sumColumn = (key) =>
      tableData.reduce((sum, item) => sum + parseNumber(item[key]), 0);

    totals.expiringTech = formatCurrency(sumColumn("expiringTech"));
    totals.expiringPremium = formatCurrency(sumColumn("expiringPremium"));
    totals.renewalToTech = formatCurrency(sumColumn("renewalToTech"));
    totals.renewalTech = formatCurrency(sumColumn("renewalTech"));
    totals.renewalPremium = formatCurrency(sumColumn("renewalPremium"));

    totals.rateChange = safeAverage("rateChange");
    totals.lossRatio = safeAverage("lossRatio");

    return totals;
  };

  const totalsRow = calculateTotals();
  const dataWithTotals = [...tableData, totalsRow];

  return (
    <div className="p-4 md:p-8 bg-[#101827] min-h-screen">
      <div className="mx-auto">
        <AccountsTable
          data={dataWithTotals}
          columns={customColumns}
          title=""
        />
      </div>
    </div>
  );
};

export default TablePage;
