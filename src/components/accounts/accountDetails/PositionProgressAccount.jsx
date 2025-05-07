import ProgressBarItem from "./ProgressBarItem";


function PositionProgressAccount() {
  const data = [
    { label: "Your score", value: "82%", percentage: 82 },
    { label: "Market Avg", value: "68%", percentage: 65 },
    { label: "Top competitor", value: "88%", percentage: 88 },
  ];

  return (
    <div className="bg-[#1E293B] p-4 rounded-xl flex flex-col  gap-4 ">
      <p className="text-xl">Position</p>
      <div className="space-y-1 flex flex-col">
        {data.map((item, index) => (
          <ProgressBarItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default PositionProgressAccount;
