"use client";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DashboardIcon } from "@radix-ui/react-icons";

import {
  LogOut,
  Settings,
  SquareUser,
  User,
  UserCircle,
  UserCircleIcon,
  UserRound,
} from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

const DropdownProfile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserCircleIcon className="text-white cursor-pointer" size={40} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-primary">
          My Profile
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-primary cursor-pointer">
            Room Dashboard <DashboardIcon />
          </DropdownMenuItem>
          <DropdownMenuItem className="text-primary cursor-pointer">
            Profile <SquareUser />
          </DropdownMenuItem>
          <DropdownMenuItem className="text-primary cursor-pointer">
            Settings <Settings />
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => {
              signOut({ callbackUrl: `/` });
            }}
            className="text-primary cursor-pointer"
          >
            Log out <LogOut size={20} />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownProfile;
