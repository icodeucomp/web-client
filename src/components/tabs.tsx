"use client";

import React from "react";
import { motion } from "framer-motion";

interface TabProps {
  label: string;
  children: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = React.useState<number>(0);

  return (
    <>
      <div className="flex justify-center gap-2 p-1 mx-auto rounded-full bg-light w-max">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium duration-300 
            ${activeTab === index ? "bg-orange rounded-full" : "text-gray-500"}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="p-4"
      >
        {tabs[activeTab]?.children}
      </motion.div>
    </>
  );
};
export default Tabs;
