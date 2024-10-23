import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import { getMenuItems } from "@/actions/menu";

const Header = async () => {
  const mainMenu = await getMenuItems();
  return (
    <header className=" h-24 bg-primary flex items-center justify-between px-10 sticky top-0 z-40">
      <Link href={"/"} className="text-default font-bold text-3xl">
        TRIPLOVERS
      </Link>
      <Navbar mainMenu={mainMenu} />
    </header>
  );
};

export default Header;
