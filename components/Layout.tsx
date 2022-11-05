import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <div className="flex items-center h-screen w-screen">
      <div className="max-w-sm w-full border-black mx-auto border rounded-md h-full bg-white">
        {children}
      </div>
    </div>
  </>
);

export default Layout;
