import Link from "next/link";
import React from "react";

const Navbar = ({ mainMenu }: { mainMenu?: MenuType }) => {
  return (
    <nav className="flex gap-4">
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
    </nav>
  );
};

export default Navbar;
