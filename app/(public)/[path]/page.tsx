import { getPublicPage } from "@/actions/publicPage";
import React from "react";

const page = async ({ params }: { params: { path: string } }) => {
  const { path } = params;
  const pageData = await getPublicPage(path);
  if (!pageData) return null;
  return (
    <div>
      <h1 className="text-primary text-3xl">{pageData?.title}</h1>
      PAGE PATH
    </div>
  );
};

export default page;
