import BulletPoint from "./BulletPoint";

function MarketIntelligenceItem({ color, children }) {
  return (
    <li className="flex items-start border-b border-gray-700 pb-2">
      <BulletPoint color={color} />
      <span>{children}</span>
    </li>
  );
}
export default MarketIntelligenceItem;
