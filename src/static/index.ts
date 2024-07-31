import { PriceField, TemplateField } from "@/types";

export const service: TemplateField[] = [
  {
    pathImg: "/icons/code-white.svg",
    title: "Responsive Website Development",
    description: "Designing websites that adapt to all devices, from desktops to mobile phones.",
  },
  {
    pathImg: "/icons/process-white.svg",
    title: "SEO & Website Performance Optimization",
    description:
      "Improving your website's visibility on search engines and attracting more visitors, also ensuring your website runs fast and efficiently, providing the best user experience.",
  },
  {
    pathImg: "/icons/figma-white.svg",
    title: "Custom UI/UX Design",
    description: "Creating attractive interfaces and intuitive user experiences for your website.",
  },
  {
    pathImg: "/icons/wordpress-white.svg",
    title: "Wordpress Development",
    description: "Developing WordPress-based websites tailored to your business needs.",
  },
  {
    pathImg: "/icons/task-white.svg",
    title: "IT & Non-IT Task Completion",
    description: "Professional assistance for various IT and non-IT tasks, ensuring all your technology needs are met.",
  },
];

export const serve: { pathImg: string; description: string }[] = [
  { pathImg: "/icons/price.svg", description: "Highly Affordable Prices" },
  { pathImg: "/icons/person.svg", description: "Professional and Experienced Team" },
  { pathImg: "/icons/customer.svg", description: "Excellent Customer Service" },
  { pathImg: "/icons/list.svg", description: "Customized Solutions to Meet Your Needs" },
  { pathImg: "/icons/hand.svg", description: "Focus on Customer Satisfaction" },
];

export const price: PriceField[] = [
  {
    pathImg: "/icons/code-orange.svg",
    title: "Web Development",
    price: 200000,
    description: ["Free Domain", "Free Server", "Exclusive Design", "Up to 10 revision"],
  },
  {
    pathImg: "/icons/process-orange.svg",
    title: "SEO & Website Performance Optimization",
    price: 100000,
    description: ["Free Domain", "Free Server", "Exclusive Design"],
  },
  {
    pathImg: "/icons/figma-orange.svg",
    title: "Custom UI/UX Design",
    price: 300000,
    description: ["Include Source Files", "Up to 10 Revision", "Free Mockup"],
  },
];

export const experience: TemplateField[] = [
  {
    pathImg: "/images/discover.png",
    title: "Discover",
    description: "We begin each project by thoroughly understanding the challenge and its context...",
  },
  {
    pathImg: "/images/design.png",
    title: "Design",
    description: "...which enables us to craft a solution that aligns with your requirements...",
  },
  {
    pathImg: "/images/coding.png",
    title: "Develop",
    description: "...maintaining high development standards while optimizing costs...",
  },
  {
    pathImg: "/images/deliver.png",
    title: "Deliver",
    description: "...delivering a customized solution that maximizes your value.",
  },
];
