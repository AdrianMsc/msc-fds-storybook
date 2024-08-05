import React from "react";
import Logo from "../assets/Logo";

const Navbar = () => {
  return (
    <header className="bg-white absolute">
      <nav className="flex w-screen py-4 px-3 h-[60px] items-center sticky">
        <Logo className="w-4" />
      </nav>
    </header>
  );
};

export default Navbar;
