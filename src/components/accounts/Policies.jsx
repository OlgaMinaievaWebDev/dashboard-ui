function Policies() {
 return (
<div>
        <h2 className="text-xl font-semibold mb-4">Policies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {[
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
          ].map((policy, index) => (
            <div key={index} className="bg-[#12172A] rounded-2xl p-4">
              <div className="text-2xl mb-2">{policy.icon}</div>
              <p className="text-sm text-gray-400">{policy.title}</p>
              <p className="text-lg font-medium">Premium: {policy.premium}</p>
              <p className="text-sm text-gray-400">Eff.Date: {policy.date}</p>
            </div>
          ))}
        </div>
      </div>

  );
};


export default Policies
