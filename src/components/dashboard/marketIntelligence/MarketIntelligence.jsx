import MarketIntelligenceItem from "./MarketIntelligenceItem";

import HighlightText from "./HighlightText";

function MarketIntelligence() {
  return (
    <div className="text-white rounded-2xl shadow-lg p-6 w-full max-w-md space-y-8 h-max flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Market intelligence</h2>
      <ul className="space-y-3">
        <MarketIntelligenceItem color="red">
          Rate hardening in Cyber market -{" "}
          <HighlightText>+15% YoY</HighlightText>
        </MarketIntelligenceItem>
        <MarketIntelligenceItem color="yellow">
          New capacity entering Marine market
        </MarketIntelligenceItem>
        <MarketIntelligenceItem color="blue">
          Environmental regulatory changes in CA
        </MarketIntelligenceItem>
      </ul>
    </div>
  );
}

export default MarketIntelligence;
