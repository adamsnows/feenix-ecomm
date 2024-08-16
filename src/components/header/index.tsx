"use client";

import Image from "next/image";
import { useState } from "react";
import { Input, Tab } from "rizzui";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [state, setState] = useState("");
  return (
    <div className="w-full h-[70px] bg-white flex items-center justify-center">
      <div className="w-9/12 flex justify-around items-center">
        <Image
          src="/logo-with-text.png"
          width={80}
          height={80}
          alt="Feenix logo"
        />
        <Input
          type="text"
          size="md"
          value={state}
          placeholder="Products search ..."
          onChange={(e) => setState(e.target.value)}
          onClear={() => setState("")}
          clearable
          className="mt-3"
        />
        <div className="">
          <Tab>
            <Tab.List>
              <Tab.ListItem onClick={() => router.push("/recent")}>
                Recent
              </Tab.ListItem>
              <Tab.ListItem onClick={() => router.push("/popular")}>
                Popular
              </Tab.ListItem>
              <Tab.ListItem onClick={() => router.push("/trending")}>
                Trending
              </Tab.ListItem>
            </Tab.List>
          </Tab>
        </div>
      </div>
    </div>
  );
};

export default Header;
