import Container from "@/components/container";
import Tabs from "@/components/tabs";

import Product from "./card/product";
import Service from "./card/service";
import MotionComponent from "@/components/motion";

const products = [
  {
    pathImg: "/temporary-image-2.png",
    title: "Website TopUp Gaming",
    price: 200000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim, sed a blanditiis tempore corporis harum distinctio, consequatur earum possimus repudiandae soluta totam libero qui exercitationem, fugit officia ipsam error!",
  },
  {
    pathImg: "/temporary-image-2.png",
    title: "Website TopUp Netflix",
    price: 100000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim, sed a blanditiis tempore corporis harum distinctio, consequatur earum possimus repudiandae soluta totam libero qui exercitationem, fugit officia ipsam error!",
  },
  {
    pathImg: "/temporary-image-2.png",
    title: "Custom UI/UX Design",
    price: 300000,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim, sed a blanditiis tempore corporis harum distinctio, consequatur earum possimus repudiandae soluta totam libero qui exercitationem, fugit officia ipsam error!",
  },
];

const services = [
  {
    pathImg: "/icons/code-orange.svg",
    title: "Responsive Web Development",
    price: 200000,
    list: ["Free Domain", "Free Server", "Exclusive Design", "Up to 10 revision"],
    description: "Feugiat finibus conubia sollicitudin iaculis nullam suspendisse netus curae faucibus euismod fringilla quisque",
  },
  {
    pathImg: "/icons/process-orange.svg",
    title: "SEO & Website Performance Optimization",
    price: 100000,
    list: ["Free Domain", "Free Server", "Exclusive Design"],
    description: "Ultrices et ut mauris sapien eros sed sollicitudin sollicitudin conubia quisque laoreet hac conubia mauris",
  },
  {
    pathImg: "/icons/figma-orange.svg",
    title: "Custom UI/UX Design",
    price: 300000,
    list: ["Include Source Files", "Up to 10 Revision", "Free Mockup"],
    description: "Aliquam consectetuer class netus vestibulum duis venenatis potenti consectetur vehicula habitasse luctus purus",
  },
  {
    pathImg: "/icons/figma-orange.svg",
    title: "Wordpress",
    price: 300000,
    list: ["Include Source Files", "Up to 10 Revision", "Free Mockup"],
    description: "Aliquam consectetuer class netus vestibulum duis venenatis potenti consectetur vehicula habitasse luctus purus",
  },
];

const tabData = [
  {
    label: "Products",
    children: (
      <div className="grid grid-cols-3 gap-8 mt-8 place-items-center">
        {products.map((item, index) => {
          const { description, pathImg, price, title } = item;
          return <Product key={index} index={index} description={description} pathImg={pathImg} price={price} title={title} />;
        })}
      </div>
    ),
  },
  {
    label: "Services",
    children: (
      <div className="grid grid-cols-3 gap-8 mt-8 place-items-center">
        {services.map((item, index) => {
          const { description, pathImg, price, title, list } = item;
          return <Service key={index} index={index} list={list} description={description} pathImg={pathImg} price={price} title={title} />;
        })}
      </div>
    ),
  },
];

const Business = () => {
  return (
    <Container className="pt-40 pb-20">
      <div className="flex flex-col items-center justify-center w-full text-3xl leading-snug">
        <MotionComponent tag="h4" duration={0.5} initialO={0} initialY={40} animateO={1} animateY={0} className="text-gradient">
          Streamline your teamwork. Start free.
        </MotionComponent>
        <MotionComponent tag="h4" duration={1} delay={0.5} initialO={0} initialY={40} animateO={1} animateY={0} className="text-gradient">
          Choose the perfect plan for your business needs
        </MotionComponent>
      </div>
      <div className="mt-10">
        <Tabs tabs={tabData} />
      </div>
    </Container>
  );
};

export default Business;
