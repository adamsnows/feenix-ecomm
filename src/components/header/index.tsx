"use client";

import Image from "next/image";
import { useState } from "react";
import { Input, Tab } from "rizzui";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const [state, setState] = useState<string>("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.trim()) {
      router.push(`/search?query=${state}`);
    }
  };

  return (
    <div className="w-full h-[70px] bg-white flex items-center justify-center">
      <div className="w-9/12 flex justify-around items-center">
        <Link href="/">
          <Image
            src="/logo-with-text.png"
            width={80}
            height={80}
            alt="Feenix logo"
          />
        </Link>

        <div className="">
          <Tab>
            <Tab.List>
              <Tab.ListItem onClick={() => router.push("/")}>
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

        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex items-center">
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
        </form>
      </div>
    </div>
  );
};

export default Header;
