const PolicyCard = ({ icon, title, premium, date }) => {
  return (
    <div className="bg-[#12172A] rounded-2xl p-4">
      <p className="text-lg text-gray-400">
        <span className="text-2xl mb-2 mr-2">{icon}</span>
         {title}
      </p>
      <p className="text-md text-gray-400">Premium: {premium}</p>
      <p className="text-md text-gray-400">Eff.Date: {date}</p>
    </div>
  );
};

export default PolicyCard;
