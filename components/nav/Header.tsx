import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import { getMenuItems } from "@/actions/menu";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const Header = async () => {
  const session = await getServerSession(authOptions);

  const mainMenu = await getMenuItems();
  return (
    <header className=" h-24 bg-primary flex items-center justify-between px-14 sticky top-0 z-40">
      <Link href={"/"} className="text-default font-bold text-3xl">
        TRIPLOVERS
      </Link>
      <Navbar mainMenu={mainMenu} />
    </header>
  );
};

export default Header;
