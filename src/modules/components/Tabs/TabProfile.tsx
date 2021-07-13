import { useState } from "react";
import TabTitle from "./TabTitle";

interface TabsProps {
  children: [React.ReactNode, React.ReactNode?];
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 w-full pb-0"
          role="tablist"
        >
          <TabTitle
            title="Edit Profile"
            tab={1}
            handlerTab={setOpenTab}
            currentTab={openTab}
          />
          <TabTitle
            title="Edit Account"
            tab={2}
            handlerTab={setOpenTab}
            currentTab={openTab}
          />
        </ul>
        <div className="relative p-3 flex flex-col min-w-0 break-words w-full mb-6 bg-purpleCust-dark">
          <div className="flex-auto">
            <div>
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                {children[0]}
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                {children[1]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
