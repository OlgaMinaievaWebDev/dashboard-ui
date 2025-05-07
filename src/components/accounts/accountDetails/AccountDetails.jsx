import SidebarMenu from "./SidebarMenu";
import { ScoreCard } from "./ScoreCard";
import { TrendChart } from "./TrendChart";
import { PositionProgress } from "./PositionProgress";
import { WinnabilityList } from "./WinnabilityList";
import { RecommendationCard } from "./RecommendationCard";
import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";

const data = [
  { name: "Jan", score: 8 },
  { name: "Feb", score: 46 },
  { name: "Mar", score: 19 },
  { name: "Apr", score: 61 },
  { name: "Now", score: 80 },
];

export default function AccountDetails() {
  return (
    <div className="min-h-screen  text-white font-sans mt-10">
      <h2 className="text-3xl mb-5 ">Account Details</h2>
      <div className="flex space-x-4 bg-[#0F172A] rounded-lg shadow-sm p-6">
        <SidebarMenu />
        <main className="flex-1 space-y-6">
          <h1 className="text-3xl font-semibold">Winnability</h1>
          <div className="grid grid-cols-3 gap-4">
            <ScoreCard
              title="Overall Score"
              value="82%"
              description="Very Strong"
            />
            <TrendChart data={data} />
            <PositionProgress score={82} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <WinnabilityList
              title="Increasing Winnability"
              icon={<ArrowUpCircle className="text-green-400" />}
              color="bg-green-400"
              items={[
                ["Brokers relationship", "+28%"],
                ["Loss history", "+22%"],
                ["Industry growth", "+16%"],
                ["Multiline opportunity", "+11%"],
              ]}
            />
            <WinnabilityList
              title="Decreasing Winnability"
              icon={<ArrowDownCircle className="text-yellow-400" />}
              color="bg-yellow-400"
              items={[
                ["Premium pricing", "-24%"],
                ["Total exposure", "-18%"],
                ["Loss ratio trend", "-13%"],
                ["Market competition", "-5%"],
              ]}
            />
          </div>
          <RecommendationCard
            recommendations={[
              {
                title:
                  "Offer 5% premium discount in exchange for 3-year commitment",
                details:
                  "Historical win rate increases 24% with multi-year commitments. Current pricing is 12% above market average. This approach would strengthen retention while maintaining adequate profitability.",
              },
              {
                title:
                  "Propose risk control services for cargo handling procedures",
                details:
                  "Can potentially reduce loss ratio by 15–20% based on similar maritime accounts. Focus on loading/unloading operations to address frequent claims.",
              },
            ]}
          />
        </main>
      </div>
    </div>
  );
}
