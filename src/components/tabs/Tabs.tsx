import React, { FC, useState } from "react";

export interface TabsProps {
  value: string;
  label: string;
}

export interface TabContent {
  tabValue: string;
  component: React.FC<any>;
  //FIXME: fix any type
  data: any;
}

interface MovieTabsProps {
  tabs: TabsProps[];
  tabContents: TabContent[];
}

const Tabs: FC<MovieTabsProps> = ({ tabs, tabContents }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const activeTabContent = tabContents.find((tc) => tc.tabValue === activeTab);

  if (!activeTabContent) {
    throw new Error(`No tab content found for ${activeTab} tab`);
  }

  const ActiveTabComponent = activeTabContent.component;

  return (
    <div className="movie-tabs">
      <div className="tabs">
        <ul className="tab-links tabs-mv">
          {tabs.map((tab) => (
            <li
              className={`cursor-class ${
                activeTab === tab.value ? "active" : ""
              }`}
              key={tab.value}
            >
              <a onClick={() => handleTabClick(tab.value)}>{tab.label}</a>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          <ActiveTabComponent {...{ data: activeTabContent.data }} />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
