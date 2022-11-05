import React, { ReactNode } from "react";
import Navigation from "./Navigation";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <div className="flex items-center h-screen w-screen max-h-screen">
      <div className="max-w-sm w-full border-black mx-auto border rounded-md h-full">
        {children}
        <Navigation />
      </div>
    </div>
  </>
);

export default Layout;
