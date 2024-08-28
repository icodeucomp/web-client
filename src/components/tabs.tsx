"use client";

import React from "react";
import MotionComponent from "./motion";

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
      <MotionComponent
        tag="div"
        duration={1.1}
        delay={0.8}
        initialO={0}
        initialY={40}
        animateO={1}
        animateY={0}
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
      </MotionComponent>
      <MotionComponent tag="div" duration={1.5} delay={1.2} initialO={0} initialY={40} animateO={1} animateY={0} key={activeTab} className="p-4">
        {tabs[activeTab]?.children}
      </MotionComponent>
    </>
  );
};
export default Tabs;
