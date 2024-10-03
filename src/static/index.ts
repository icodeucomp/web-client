import { BlogField, ImagesField, NavbarField, OurService, PriceField, ServeField, TemplateField, TestimonialField } from "@/types";

export const navbarList: NavbarField[] = [
  { title: "Home", path: "/home" },
  { title: "About Us", path: "/about" },
  { title: "Services", path: "/service" },
  { title: "Pricing", path: "/price" },
  { title: "Contact Us", path: "/contact" },
];

export const mission: string[] = [
  "Develop technology solutions that meet the specific needs of businesses, driving success and growth.",
  "Build and nurture strong partnerships with clients and stakeholders, creating an environment where collaborative efforts lead to shared growth and achievement.",
  "Cultivate an agile, fair, and harmonious workplace that fosters a culture of innovation and productivity.",
  "Implement agile methodologies to ensure flexibility, rapid adaptation, and precise execution of technology solutions, optimizing results and enhancing client satisfaction.",
];

export const coreValues: TemplateField[] = [
  { pathIcon: "/icons/nano-technology.svg", title: "Adaptability", description: "Embrace and navigate change with flexibility and efficiency." },
  {
    pathIcon: "/icons/load-balancer.svg",
    title: "Balance",
    description: "Foster a harmonious work environment that supports well-being and satisfaction.",
  },
  {
    pathIcon: "/icons/shield-check.svg",
    title: "Trust",
    description: "Build reliable and transparent relationships with clients, partners, and team members.",
  },
  {
    pathIcon: "/icons/backup-restore.svg",
    title: "Resilience",
    description: "Adapt and recover quickly from challenges, maintaining effectiveness and stability.",
  },
  {
    pathIcon: "/icons/people-team.svg",
    title: "Collaboration",
    description: "Engage in cooperative efforts to achieve shared objectives and enhance team success.",
  },
];

export const service: TemplateField[] = [
  {
    pathIcon: "/icons/code-white.svg",
    title: "Responsive Website Development",
    description: "Designing websites that adapt to all devices, from desktops to mobile phones.",
  },
  {
    pathIcon: "/icons/process-white.svg",
    title: "SEO & Website Performance Optimization",
    description:
      "Improving your website's visibility on search engines and attracting more visitors, also ensuring your website runs fast and efficiently, providing the best user experience.",
  },
  {
    pathIcon: "/icons/figma-white.svg",
    title: "Custom UI/UX Design",
    description: "Creating attractive interfaces and intuitive user experiences for your website.",
  },
  {
    pathIcon: "/icons/wordpress-white.svg",
    title: "Wordpress Development",
    description: "Developing WordPress-based websites tailored to your business needs.",
  },
  {
    pathIcon: "/icons/task-white.svg",
    title: "IT & Non-IT Task Completion",
    description: "Professional assistance for various IT and non-IT tasks, ensuring all your technology needs are met.",
  },
];

export const serve: ServeField[] = [
  { pathImg: "/icons/price.svg", description: "Highly Affordable Prices" },
  { pathImg: "/icons/person.svg", description: "Professional and Experienced Team" },
  { pathImg: "/icons/customer.svg", description: "Excellent Customer Service" },
  { pathImg: "/icons/list.svg", description: "Customized Solutions to Meet Your Needs" },
  { pathImg: "/icons/hand.svg", description: "Focus on Customer Satisfaction" },
];

export const experience: TemplateField[] = [
  {
    pathIcon: "/images/discover.png",
    title: "Discover",
    description: "We begin each project by thoroughly understanding the challenge and its context...",
  },
  {
    pathIcon: "/images/design.png",
    title: "Design",
    description: "...which enables us to craft a solution that aligns with your requirements...",
  },
  {
    pathIcon: "/images/coding.png",
    title: "Develop",
    description: "...maintaining high development standards while optimizing costs...",
  },
  {
    pathIcon: "/images/deliver.png",
    title: "Deliver",
    description: "...delivering a customized solution that maximizes your value.",
  },
];

export const ourService: OurService[] = [
  {
    pathIcon: "/icons/code-computer.svg",
    pathImg: "/images/service/responsive.png",
    slug: "responsive-web-development",
    title: "Responsive Web Development",
    description:
      "Our Responsive Web Development service ensures that your website looks and functions flawlessly on any screen size, from desktops to smartphones and tablets.",
  },
  {
    pathIcon: "/icons/statistics.svg",
    pathImg: "/images/service/notebook.png",
    slug: "seo-website-performance-optimization",
    title: "SEO & Website Performance Optimization",
    description:
      "Boost your online visibility and enhance your website's performance with our comprehensive SEO & Website Performance Optimization service. We help you achieve higher search engine rankings and ensure your site runs smoothly, providing an exceptional user experience that keeps visitors engaged.",
  },
  {
    pathIcon: "/icons/wordpress-white.svg",
    pathImg: "/images/service/wordpress.png",
    slug: "wordpress-development",
    title: "WordPress Development",
    description:
      "Unlock the full potential of your online presence with our WordPress Development service. We create powerful, customizable, and easy-to-manage websites tailored to meet your specific needs and goals.",
  },
  {
    pathIcon: "/icons/figma-white.svg",
    pathImg: "/images/service/uiux-phone.png",
    slug: "custom-uiux-design",
    title: "UI/UX Custom Design",
    description:
      "Elevate your digital experience with our UI/UX Custom Design service. We combine stunning visuals with seamless functionality to create engaging and user-friendly interfaces that resonate with your audience.",
  },
  {
    pathIcon: "/icons/task-white.svg",
    pathImg: "/images/service/time-management.png",
    slug: "graphic-design",
    title: "Graphic Design",
    description:
      "Harness the power of professional graphic design in your brand. Unique logos, eye-catching marketing materials and digital graphic/illustrated work... to make your brand look awesome. By info graphics that speak for themselves, to packaging designs of the future -- we create compelling work designed specifically to captivate & communicate.",
  },
];

export const stackImages: string[] = [
  "/images/price/stack-1.png",
  "/images/price/stack-2.png",
  "/images/price/stack-3.png",
  "/images/price/stack-4.png",
  "/images/price/stack-5.png",
  "/images/price/stack-6.png",
  "/images/price/stack-7.png",
  "/images/price/stack-8.png",
  "/images/price/stack-9.png",
  "/images/price/stack-10.png",
  "/images/price/stack-11.png",
  "/images/price/stack-12.png",
  "/images/price/stack-13.png",
  "/images/price/stack-14.png",
];

export const images: ImagesField[] = [
  { slug: "custom-uiux-design", pathIcon: "/icons/figma-orange.svg" },
  { slug: "wordpress-development", pathIcon: "/icons/wordpress-orange.svg" },
  { slug: "responsive-web-development", pathIcon: "/icons/code-orange.svg" },
  { slug: "seo-website-performance-optimization", pathIcon: "/icons/process-orange.svg" },
  { slug: "graphic-design", pathIcon: "/icons/task-orange.svg" },
];

//temporary
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
    pathIcon: "/images/home/blog-one.png",
    date: "2024-08-03T12:43:47.432Z",
    topic: "SEO",
  },
  {
    title: "Make a great first impression with these titles",
    description:
      "Pretium venenatis felis turpis scelerisque justo. Leo urna dignissim ultrices accumsan ipsum fusce phasellus. Laoreet amet nec id aliquet platea vel per efficitur curabitur accumsan.",
    pathIcon: "/images/home/blog-two.png",
    date: "2024-08-03T12:43:47.432Z",
    topic: "Social Media",
  },
  {
    title: "How to Grab Your Reader's Attention",
    description:
      "Facilisi laoreet mattis montes vehicula quisque nisi ultrices ridiculus fringilla nostra in. Habitant ullamcorper volutpat nullam nibh ante nam suscipit et. Id natoque leo ridiculus augue litora arcu massa nibh fusce.",
    pathIcon: "/images/home/blog-three.png",
    date: "2024-08-03T12:43:47.432Z",
    topic: "Strategy",
  },
];
