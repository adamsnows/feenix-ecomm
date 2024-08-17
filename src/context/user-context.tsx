"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  username: string;
  photo: string;
}

interface UserContextType {
  user: User | null;
  isLoggedIn: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const { username, photo } = JSON.parse(userInfo);
      setUser({
        username,
        photo: photo || "/photos/default.png",
      });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cart");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn: !!user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
