import SignInForm from "@/components/auth/SignInForm";
import Loader from "@/components/Loader";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div>
        LOGIN
        <SignInForm />
      </div>
    </Suspense>
  );
};

export default page;
