"use client";

import React from "react";
import { useAnimation, motion } from "framer-motion";

interface TabProps {
  label: string;
  children: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = React.useState<number>(0);

  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, delay: 0.8 },
    });
  }, [controls]);

  return (
    <>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={controls} className="flex justify-center gap-2 p-1 mx-auto rounded-full bg-light w-max">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-xs md:text-sm font-medium duration-300 ${activeTab === index ? "bg-orange rounded-full" : "text-gray-500"}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>
      <div className="p-4">{tabs[activeTab]?.children}</div>
    </>
  );
};
export default Tabs;
