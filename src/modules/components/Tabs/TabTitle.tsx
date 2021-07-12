import React from 'react';

interface TabTitleProps {
  tab: number;
  HandlerTab: (state: number) => void;
  title: string;
  currentTab: number;
}

const TabTitle: React.FC<TabTitleProps> = ({ tab, HandlerTab, title, currentTab }) => {
  return (
    <li
      className={`-mb-px w-3/6 min-w-medium px-2 box-border rounded-t-xl ${
        currentTab === tab ? 'bg-purpleCust-dark ' : 'bg-purpleCust-card'
      }`}
    >
      <a
        className={
          'dark:text-white text-base  py-3 px-2 rounded block leading-normal font-herbo font-normal'
        }
        onClick={e => {
          e.preventDefault();
          HandlerTab(tab);
        }}
        data-toggle="tab"
        href="#link1"
        role="tablist"
      >
        {title}
      </a>
    </li>
  );
};

export default TabTitle;
