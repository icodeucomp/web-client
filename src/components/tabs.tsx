"use client";

import { useState } from "react";

import useInView from "@/hooks/useInView";

import { motion } from "framer-motion";

import { TabsProps } from "@/types";

const Tabs = ({ tabs }: { tabs: TabsProps[] }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const { isInView, elementRef } = useInView<HTMLDivElement>();

  const variantsDivOne = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

  return (
    <>
      <motion.div
        ref={elementRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variantsDivOne}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex justify-center gap-2 p-1 mx-auto rounded-full bg-light w-max"
      >
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
