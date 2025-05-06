import MetricCard from "./MetricCard";
import ExposureDistributionCard from "./ExposureDistributionCard";

function PerformanceMetrics() {
  return (
    <>
      <h1 className="text-3xl mb-3">Performance Metrics</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard
          title="Winnability"
          subtitle="Very Strong"
          indicatorCount={3}
          linkText="See all factors →"
        />
        <MetricCard
          title="Loss Ratio"
          subtitle="25%"
          description="vs 42% target"
          linkText="View history →"
        />
        <MetricCard
          title="Premium Growth"
          subtitle="12.4%"
          description="YOY increase"
          extra=" $123M vs $150M Target"
          linkText="View trend →"
        />
        <ExposureDistributionCard />
      </div>
    </>
  );
}

export default PerformanceMetrics;
