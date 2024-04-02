import { UserButton } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import React from "react";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const NabBar = () => {
  return (
    <nav className=" flex w-full items-centered justify-between p-4 px-8 h-[60px]">
      <Logo />
      <div className="flex gap-4 items-center    ">
        <UserButton afterSignOutUrl="/" />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default NabBar;
