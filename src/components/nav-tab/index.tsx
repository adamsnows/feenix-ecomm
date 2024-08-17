"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";

interface NavTabProps {
  items: { label: string; href: string }[];
}

const NavTab: React.FC<NavTabProps> = ({ items }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>(pathname);

  const handleClick = (href: string) => {
    router.push(href);
    setActiveTab(href);
  };

  return (
    <div className="relative">
      <div className="flex space-x-4">
        {items.map((item) => (
          <div
            key={item.href}
            onClick={() => handleClick(item.href)}
            className={classNames(
              "cursor-pointer px-4 py-2 transition-colors duration-300",
              {
                "border-b-2 border-[#ff6347]": activeTab === item.href,
                "text-gray-600": activeTab !== item.href,
              }
            )}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavTab;
