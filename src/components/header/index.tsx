"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "rizzui";
import NavTab from "../nav-tab";
import Link from "next/link";

const Header = () => {
  const [state, setState] = useState<string>("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.trim()) {
      window.location.href = `/search?query=${state}`;
    }
  };

  const navItems = [
    { label: "Recent", href: "/" },
    { label: "Popular", href: "/popular" },
    { label: "Trending", href: "/trending" },
  ];

  return (
    <div className="w-full h-[70px] bg-white flex items-center justify-center">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo-with-text.png"
            width={80}
            height={80}
            alt="Feenix logo"
          />
        </Link>

        <NavTab items={navItems} />

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
