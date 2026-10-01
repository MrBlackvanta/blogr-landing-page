import type { NavGroup } from "./data.types";

export const navGroups: NavGroup[] = [
  {
    id: "product",
    label: "Product",
    links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  },
  {
    id: "company",
    label: "Company",
    links: ["About", "Team", "Blog", "Careers"],
  },
  {
    id: "connect",
    label: "Connect",
    links: ["Contact", "Newsletter", "LinkedIn"],
  },
];
