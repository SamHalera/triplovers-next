import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const dashboardPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    const prevUrl = `/dashboard`;
    redirect(`/sign-in?prevUrl=${encodeURIComponent(prevUrl)}`);
  }
  return <div>DASHBOARD</div>;
};

export default dashboardPage;
