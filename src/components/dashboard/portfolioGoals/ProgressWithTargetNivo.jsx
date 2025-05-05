import { ResponsiveBar } from "@nivo/bar";

const ProgressWithTargetNivo = ({
  value = 0,
  target = 0,
  label = "",
  max = 100,
  barColors = [],
}) => {
  const safeBarColors = Array.isArray(barColors) ? barColors : [];

  const data = [
    {
      label: "Progress",
      ...safeBarColors.reduce((acc, seg, i) => {
        acc[`segment${i}`] = seg.value;
        return acc;
      }, {}),
    },
  ];

  const keys = safeBarColors.map((_, i) => `segment${i}`);
  const colors = safeBarColors.map((seg) => seg.color);

  return (
    <div style={{ height: 60 }}>
      <div className="text-xs text-gray-400 font-medium mb-1">{label}</div>
      <ResponsiveBar
        data={data}
        keys={keys}
        indexBy="label"
        layout="horizontal"
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        padding={0}
        innerPadding={0}
        enableGridX={false}
        enableGridY={false}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        labelSkipWidth={999}
        labelSkipHeight={999}
        isInteractive={false}
        colors={({ id }) => {
          const idx = keys.indexOf(id);
          return colors[idx];
        }}
        markers={[
          {
            axis: "x",
            value: target,
            lineStyle: { stroke: "#FFD700", strokeWidth: 2 },
            legend: `${target}% TG`,
            legendPosition: "top",
          },
          {
            axis: "x",
            value: value,
            lineStyle: { stroke: "#00FF7F", strokeWidth: 2 },
            legend: `${value}%`,
            legendPosition: "bottom",
          },
        ]}
      />
    </div>
  );
};

export default ProgressWithTargetNivo;
