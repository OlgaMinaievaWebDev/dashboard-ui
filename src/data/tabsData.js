// /mock/tabsData.js
import {
  House,
  Database,
  Users,
  FileCode2,
  Building2,
  Goal,
  KeyRound,
} from "lucide-react";

export const tabsData = [
  { name: "Dashboard", icon: House, to: "/" },
  { name: "Accounts", icon: Database, to: "/accounts" },
  { name: "Brokers", icon: Users, to: "/brokers" },
  { name: "Submissions", icon: FileCode2, to: "/submissions" },
  { name: "Organizations", icon: Building2, to: "/organizations" },
  { name: "Goals & Rules", icon: Goal, to: "/goals" },
  { name: "Admin", icon: KeyRound, to: "/admin/1", id: "admin1" },
  { name: "Admin", icon: KeyRound, to: "/admin/2", id: "admin2" },
  { name: "Admin", icon: KeyRound, to: "/admin/3", id: "admin3" },
  { name: "Admin", icon: KeyRound, to: "/admin/4", id: "admin4" },
  { name: "Admin", icon: KeyRound, to: "/admin/5", id: "admin5" },
];
