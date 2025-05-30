export  const tabs = [
  { label: "Assigned to me", count: 12 },
  { label: "Pending Review", count: 8 },
  { label: "Referrals", count: 3 },
];

export const data = [
  {
    initials: "SM",
    name: "Sam Masters",
    client: "NAMEX Tech Solutions",
    line: "Cyber Liability",
    type: "Underwriter Referral",
    status: "New",
    date: "04/16/2025",
  },
  {
    initials: "AW",
    name: "Annalise Willis",
    client: "Maritime Logistics Corp",
    line: "Marine Cargo",
    type: "Underwriter Referral",
    status: "New",
    date: "04/20/2025",
  },
  {
    initials: "PD",
    name: "Patrick Devenport",
    client: "GreenField Energy Ltd",
    line: "Environmental",
    type: "Loss Control Request",
    status: "New",
    date: "04/16/2025",
  },
  {
    initials: "AK",
    name: "Ana Killian",
    client: "NorthStar Financial Group",
    line: "D&O Liability",
    type: "Underwriter Referral",
    status: "Pending Review",
    date: "04/22/2025",
  },
  {
    initials: "AK",
    name: "Ana Killian",
    client: "Alliance Healthcare Systems",
    line: "Medical Malpractice",
    type: "Email",
    status: "Completed",
    date: "04/28/2025",
  },
  {
    initials: "MK",
    name: "Me",
    client: "QuantumTech Industries",
    line: "Product Liability",
    type: "Email",
    status: "Completed",
    date: "04/20/2025",
  },
];

export const statusColors = {
  New: "bg-blue-500",
  "Pending Review": "bg-yellow-400",
  Completed: "bg-green-500",
};

