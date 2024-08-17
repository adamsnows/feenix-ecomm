// Header.tsx

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Input, Button } from "rizzui";
import Link from "next/link";
import NavTab from "../nav-tab";
import LoginModal from "../modals/login";

const Header = () => {
  const [state, setState] = useState<string>("");
  const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [user, setUser] = useState<{ username: string; photo: string } | null>(
    null
  );

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const { username, photo } = JSON.parse(userInfo);
      setUser({
        username,
        photo: photo || "/photos/default.png", // Defina uma foto padrão, se necessário
      });
    }
  }, []);

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

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    setUser(null);
  };

  const handleLoginSuccess = (userInfo: {
    username: string;
    photo: string;
  }) => {
    setUser(userInfo);
  };

  return (
    <>
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

          {user ? (
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={user.photo}
                  alt={user.username}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <span className="text-lg font-semibold">{user.username}</span>
              <Button onClick={handleLogout} variant="outline" className="ml-4">
                Logout
              </Button>
            </div>
          ) : (
            <Button onClick={() => setLoginModalOpen(true)}>Login</Button>
          )}
        </div>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess} // Passe a função de callback
      />
    </>
  );
};

export default Header;
