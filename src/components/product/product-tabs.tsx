"use client";

import { Tab } from "rizzui";
import { GoDot } from "react-icons/go";

interface ProductTabsProps {
  description: string;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ description }) => {
  return (
    <div className="w-full h-full">
      <Tab className="text-sm">
        <Tab.List>
          <Tab.ListItem>Description</Tab.ListItem>
          <Tab.ListItem>Features</Tab.ListItem>
          <Tab.ListItem>Size</Tab.ListItem>
          <Tab.ListItem>Warranty</Tab.ListItem>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="flex flex-col gap-3">
            {description.split("\n").map((line, index) => (
              <div key={index} className="flex items-center gap-2">
                <GoDot className="h-4 w-4" />
                <span>{line}</span>
              </div>
            ))}
          </Tab.Panel>
          <Tab.Panel>Features panel</Tab.Panel>
          <Tab.Panel>Size panel</Tab.Panel>
          <Tab.Panel>Warranty panel</Tab.Panel>
        </Tab.Panels>
      </Tab>
    </div>
  );
};

export default ProductTabs;
