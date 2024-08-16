import Image from "next/image";
import { Tab } from "rizzui";

const Header = () => {
  return (
    <div className="w-full h-[70px] bg-white flex items-center justify-center">
      <div className="w-80 flex justify-between">
        <Image
          src="/logo-with-text.png"
          width={100}
          height={100}
          alt="Feenix logo"
        />

        <Tab>
          <Tab.List>
            <Tab.ListItem>Recent</Tab.ListItem>
            <Tab.ListItem>Popular</Tab.ListItem>
            <Tab.ListItem>Trending</Tab.ListItem>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>Recent panel</Tab.Panel>
            <Tab.Panel>Popular panel</Tab.Panel>
            <Tab.Panel>Trending panel</Tab.Panel>
          </Tab.Panels>
        </Tab>
      </div>
    </div>
  );
};

export default Header;
