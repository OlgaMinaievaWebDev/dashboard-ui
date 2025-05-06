const PolicyCard = ({ icon, title, premium, date }) => {
  return (
    <div className="bg-[#12172A] rounded-2xl p-4">
      <div className="text-2xl mb-2">{icon}</div>
      <p className="text-sm text-gray-400">{title}</p>
      <p className="text-lg font-medium">Premium: {premium}</p>
      <p className="text-sm text-gray-400">Eff.Date: {date}</p>
    </div>
  );
};

export default PolicyCard;
