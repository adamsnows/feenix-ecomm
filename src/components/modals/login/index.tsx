"use client";

import { useState } from "react";
import { Modal, Button, Text, ActionIcon, Input, Password } from "rizzui";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const defaultUser = {
  username: "johnd",
  password: "m38rmF$",
};

const LoginModal = ({
  isOpen,
  onClose,
  onLoginSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { username: string; photo: string }) => void;
}) => {
  const [username, setUsername] = useState(defaultUser.username);
  const [password, setPassword] = useState(defaultUser.password);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });
      const { token } = response.data;
      const userInfo = {
        username,
        photo: "/photos/john.png",
      };
      localStorage.setItem("authToken", token);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      toast.success("Logged in successfully!");
      onLoginSuccess(userInfo);
      router.push("/");
      onClose();
    } catch (err) {
      setError("Invalid username or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="m-auto px-7 pt-6 pb-8">
        <div className="mb-7 flex items-center justify-between">
          <Text>Login</Text>
          <ActionIcon size="sm" variant="text" onClick={onClose}>
            <IoMdClose className="h-auto w-6" strokeWidth={1.8} />
          </ActionIcon>
        </div>
        <form onSubmit={handleLogin} className="grid grid-cols-1 gap-y-6">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <Input
            label="Username"
            inputClassName="border-2"
            size="lg"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Password
            label="Password"
            inputClassName="border-2"
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            size="lg"
            className="mt-2"
            isLoading={isLoading}
          >
            Login
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
