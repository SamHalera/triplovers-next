import { getMenuItems } from "@/actions/menu";
import SignUpForm from "@/components/auth/SignUpForm";
import React from "react";

const page = async () => {
  return (
    <div>
      SIGN UP
      <SignUpForm />
    </div>
  );
};

export default page;
