import ProgressBarItem from "./ProgressBarItem";

function ExposureDistributionCard() {
  const data = [
    { label: "Marine Cargo", value: "71.4%", percentage: 70 },
    { label: "General Liability", value: "20%", percentage: 45 },
    { label: "Workers Comp", value: "8.6%", percentage: 25 },
  ];

  return (
    <div className="bg-[#12172A] rounded-2xl p-4">
      <p className="text-md mb-2">Exposure Distribution</p>
      <div className="space-y-1 flex flex-col">
        {data.map((item, index) => (
          <ProgressBarItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ExposureDistributionCard;
