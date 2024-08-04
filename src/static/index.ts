import { BlogField, PriceField, TemplateField, TestimonialField } from "@/types";

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

export const testimonial: TestimonialField[] = [
  {
    name: "John Doe",
    job: "iCodeU",
    subject: "I recommend this agency",
    message:
      "Mus phasellus nunc maecenas feugiat lectus arcu iaculis aenean fusce malesuada ante. Elit ligula dolor neque mauris nisi aliquam leo si suspendisse pulvinar risus. Quisque aptent porta morbi velit egestas. Convallis litora aenean quam parturient placerat. Egestas consequat ut penatibus fermentum at porttitor suspendisse.",
    pathImg: "/images/home/john.png",
  },
  {
    name: "Alice Smith",
    job: "iCodeU",
    subject: "The support is awesome",
    message:
      "Lorem ipsum dolor sit amet ultrices erat imperdiet scelerisque. Curae ex diam mus nostra massa suspendisse enim quisque sodales. Sociosqu aliquam sed quam pretium maximus leo hac lorem dictum venenatis. Nostra curae ornare erat massa sed. Interdum magna faucibus tristique taciti facilisi.",
    pathImg: "/images/home/alice.png",
  },
  {
    name: "Sophia Miler",
    job: "iCodeU",
    subject: "A game changer for us",
    message:
      "Imperdiet volutpat phasellus amet auctor penatibus parturient. Lacus faucibus dignissim dictum libero tincidunt tellus purus eu ad montes. Parturient maximus pretium lacus tristique lacinia at. Conubia metus vehicula tincidunt parturient efficitur tristique enim eget facilisi eros lacinia. Odio dignissim natoque tempus ipsum nisi ad sodales dictum eros pede urna.",
    pathImg: "/images/home/sophia.png",
  },
];

export const blog: BlogField[] = [
  {
    title: "How to Use Social Proof in Marketing",
    description:
      "Ex fusce venenatis sit id ultrices lacus sapien integer natoque luctus. Tincidunt convallis sagittis imperdiet hendrerit nisl cursus diam. Quis vel facilisi vitae aliquam netus id euismod sem.",
    pathImg: "/images/home/blog-one.png",
    date: "2024-08-03T12:43:47.432Z",
    topic: "SEO",
  },
  {
    title: "Make a great first impression with these titles",
    description:
      "Pretium venenatis felis turpis scelerisque justo. Leo urna dignissim ultrices accumsan ipsum fusce phasellus. Laoreet amet nec id aliquet platea vel per efficitur curabitur accumsan.",
    pathImg: "/images/home/blog-two.png",
    date: "2024-08-03T12:43:47.432Z",
    topic: "Social Media",
  },
  {
    title: "How to Grab Your Reader's Attention",
    description:
      "Facilisi laoreet mattis montes vehicula quisque nisi ultrices ridiculus fringilla nostra in. Habitant ullamcorper volutpat nullam nibh ante nam suscipit et. Id natoque leo ridiculus augue litora arcu massa nibh fusce.",
    pathImg: "/images/home/blog-three.png",
    date: "2024-08-03T12:43:47.432Z",
    topic: "Strategy",
  },
];
