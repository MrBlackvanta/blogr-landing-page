import type { Feature, NavGroup } from "./data.types";

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

export const editorFeatures: Feature[] = [
  {
    title: "Introducing an extensible editor",
    body: "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
  },
  {
    title: "Robust content management",
    body: "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.",
  },
];
