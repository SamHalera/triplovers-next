import Link from "next/link";
import React from "react";
import DropdownProfile from "./userProfile/DropdownProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const Navbar = async ({ mainMenu }: { mainMenu?: MenuType }) => {
  const session = await getServerSession(authOptions);
  return (
    <nav className="flex gap-6 items-center">
      {mainMenu?.map((item: MenuItemType) => {
        return (
          <Link
            key={item.label}
            href={`${process.env.NEXT_PUBLIC_FRONT}/${item.path}`}
            className="text-default text-2xl font-light"
          >
            {item.label}
          </Link>
        );
      })}

      {session ? (
        <DropdownProfile />
      ) : (
        <div className="flex gap-4">
          <Link
            className="px-5 py-1 font-semibold border bg-default text-primary rounded-full hover:bg-transparent hover:text-default duration-300"
            href={"/sign-in"}
          >
            Sign In
          </Link>

          <Link
            className="px-5 py-1 font-semibold   bg-secondary text-default rounded-full hover:bg-ternary hover:text-primary duration-300"
            href={"/sign-up"}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
