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

export const openSourceFeatures: Feature[] = [
  {
    title: "Free, open, simple",
    body: "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
  },
  {
    title: "Powerful tooling",
    body: "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
  },
];
