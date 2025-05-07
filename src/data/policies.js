// mock data for accounts page
export const accountInfo = {
  name: "Maritime Logistics Corp",
  address: "425 Harbor Boulevard, Suite 300",
  location: "Seattle, WA 98104",
  accountNumber: "54383",
  broker: "Marsh McLennan",
  underwriter: "Kate Johnson",
};

export const attentionItems = [
  {
    title: "Marine Survey Required",
    description: "Scheduled for 06/12/2025",
    link: "#",
    linkText: "Review details link",
  },
  {
    title: "Loss Control Complete",
    description: "Last inspection: 02/15/2025",
    link: "#",
    linkText: "View report",
  },
  {
    title: "Claims Review Required",
    description: "3 open claims  //  $245,000 TTL",
    link: "#",
    linkText: "View claims",
  },
];

export const performanceMetrics = {
  winnability: "Very Strong",
  lossRatio: 25,
  lossTarget: 42,
  premiumGrowth: 12.4,
  premiumCurrent: "$123M",
  premiumTarget: "$150M",
};

export const exposureDistribution = [
  { label: "Marine Cargo", percent: 71.4 },
  { label: "General Liability", percent: 20 },
  { label: "Workers Comp", percent: 8.6 },
];

export const policies = [
  {
    name: "Marine Cargo",
    premium: "$625,000",
    effDate: "6/30/2026",
    icon: "🚢",
  },
  {
    name: "General Liability",
    premium: "$175,000",
    effDate: "6/30/2026",
    icon: "🛡️",
  },
  {
    name: "Workers Comp",
    premium: "$75,000",
    effDate: "---",
    icon: "⚙️",
  },
  {
    name: "Property",
    premium: "$64,829.83",
    effDate: "---",
    icon: "🏢",
  },
  {
    name: "Umbrella",
    premium: "$275,000",
    effDate: "13/03/2026",
    icon: "☂️",
  },
];


export const accounts = [
  {
    accountName: "NAMEX Tech Solutions",
    type: "Large Enterprise",
    line: "D&O Liability",
    broker: "Willis Towers",
    reviewDate: "04/16/2025",
    premium: "$2.3M",
    ratedPremium: "$2.8M",
    lossRatio: "32%",
    appetite: "HIGH",
    status: "Active",
    triage: "180",
    winnability: "Very Strong",
  },
  {
    accountName: "Alliance Healthcare Systems",
    type: "Mid-Market",
    line: "Medical Malpractice",
    broker: "Aon Risk",
    reviewDate: "06/30/2025",
    premium: "$1.7M",
    ratedPremium: "$1.9M",
    lossRatio: "38%",
    appetite: "MEDIUM",
    status: "Under review",
    triage: "165",
    winnability: "Strong",
  },
  {
    accountName: "Maritime Logistics Corp",
    type: "Shipping/Logistics",
    line: "Marine Cargo",
    broker: "Marsh McLennan",
    reviewDate: "09/05/2025",
    premium: "$975K",
    ratedPremium: "$920K",
    lossRatio: "25%",
    appetite: "HIGH",
    status: "Active",
    triage: "182",
    winnability: "Very Strong",
  },
  {
    accountName: "GreenField Energy Ltd",
    type: "Energy Sector",
    line: "Environmental Liability",
    broker: "Aon Risk",
    reviewDate: "07/22/2025",
    premium: "$1.2M",
    ratedPremium: "$1.4M",
    lossRatio: "67%",
    appetite: "CAUTIOUS",
    status: "Under review",
    triage: "158",
    winnability: "Medium",
  },
];
