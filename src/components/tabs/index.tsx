import React from "react";

interface TabComponentProps {
  tabs: string[];
  selectedTab: string | null;
  setSelectedTab: (tab: string) => void;
}

const TabComponent: React.FC<TabComponentProps> = ({
  tabs,
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <div className="flex items-center gap-6 lg:gap-10 w-full overflow-y-auto">
      {tabs.map((tab, idnx) => (
        <div
          key={idnx}
          className={`capitalize cursor-pointer text-nowrap ${
            selectedTab?.replace('-', ' ') === tab ? "bg-dodger-blue text-white" : "bg-transparent"
          } p-2 rounded-lg duration-700 ease-in-out`}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default TabComponent;
