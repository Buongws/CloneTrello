import { auth } from "@clerk/nextjs";
import React from "react";

const Layout = () => {
  const { userId, orgId } = auth();
  return <div>{orgId}</div>;
};

export default Layout;
