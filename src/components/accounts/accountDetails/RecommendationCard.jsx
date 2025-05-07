import { Rocket} from "lucide-react";

export function RecommendationCard({ recommendations }) {
  return (
    <div className="bg-[#1E293B] p-6 rounded-xl space-y-4">
      <div className="flex items-center text-green-400 font-semibold text-lg">
        <Rocket className="mr-2" />
        AI-Powered Recommendations
      </div>
      <div className="space-y-4 text-sm">
        {recommendations.map(({ title, details }, i) => (
          <div key={i} className="flex justify-between">
            <div className="max-w-2xl">
              <p>{title}</p>
              <p className="text-gray-400">{details}</p>
            </div>
            <button className="bg-green-500 text-black text-lg px-12 py-4 rounded-4xl self-start">
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
