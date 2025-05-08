import { MoreVertical } from "lucide-react";
import { StatusBadges } from "./StatusBadges";

const getValue = (account, key) => {
  const mappings = {
    "ACCOUNT NAME/TYPE": (
      <div>
        <div className="font-medium">{account.accountName || account.name}</div>
        <div className="text-sm text-gray-500">{account.type}</div>
      </div>
    ),
    LINE: account.line || account.coverage,
    BROKER: account.broker,
    "REVIEWAL DATE": account.reviewDate || account.expirationDate,
    PREMIUM: account.premium || account.currentPremium,
    "RATED PREMIUM": account.ratedPremium || account.proposedPremium,
    "LOSS RATIO": <StatusBadges status={account.lossRatio} />,
    APPETITE: <StatusBadges status={account.appetite || account.status} />,
    STATUS: <StatusBadges status={account.status || account.activeStatus} />,
    TRIAGE: <StatusBadges status={account.triage} />,
    WINNABILITY: <StatusBadges status={account.winnability} />,
    "EFF.DATE": account.effDate,
    "EXP.DATE": account.expDate,
    "EXPIRING TECH": account.expiringTech,
    "EXPIRING PREMIUM": account.expiringPremium,
    "RENEWAL TO TECH": account.renewalToTech,
    "RENEWAL TECH": account.renewalTech,
    "RENEWAL PREMIUM": account.renewalPremium,
    "RATE CHANGE": account.rateChange,
    "ACTIONS": (
      <div className="flex justify-end">
        <MoreVertical className="w-5 h-5 text-white cursor-pointer" />
      </div>
    ),
  };

  return mappings[key] ?? "-";
};

export const AccountRow = ({ account, columns, className }) => (
  <tr className={`hover:bg-[#1f2630] ${className || ""}`}>
    {columns.map((col, index) => (
      <td
        key={index}
        className={`px-6 py-4 whitespace-nowrap text-sm text-white ${
          col === "ACTIONS" ? "text-right" : ""
        }`}
      >
        {getValue(account, col)}
      </td>
    ))}
  </tr>
);
