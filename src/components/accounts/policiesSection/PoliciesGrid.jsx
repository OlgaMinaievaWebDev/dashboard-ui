import PolicyCard from "./PolicyCard";

const policyData = [
  {
    title: "Marine Cargo",
    premium: "$625,000",
    date: "6/30/2026",
    icon: "🚢",
  },
  {
    title: "General Liability",
    premium: "$175,000",
    date: "6/30/2026",
    icon: "🛡️",
  },
  {
    title: "Workers Comp",
    premium: "$75,000",
    date: "---",
    icon: "⚒️",
  },
  {
    title: "Property",
    premium: "$64,829.83",
    date: "---",
    icon: "🏢",
  },
  {
    title: "Umbrella",
    premium: "$275,000",
    date: "13/03/2026",
    icon: "🌂",
  },
];

const PoliciesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 bg-space-cadet p-4 rounded-lg shadow-sm">
      {policyData.map((policy, index) => (
        <PolicyCard key={index} {...policy} />
      ))}
    </div>
  );
};

export default PoliciesGrid;
