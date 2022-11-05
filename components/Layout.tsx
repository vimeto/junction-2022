import React, { ReactNode } from "react";
import Navigation from "./Navigation";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <div className="flex items-center h-screen w-screen">
      <div className="max-w-sm w-full border-black mx-auto border rounded-md h-screen max-h-screen overflow-hidden relative">
        <div className="w-full max-h-full overflow-scroll pb-16 h-full">
          {children}
        </div>
        <Navigation />
      </div>
    </div>
  </>
);

export default Layout;
