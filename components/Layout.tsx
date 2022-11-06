import React, { ReactNode } from "react";
import Navigation from "./Navigation";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <div className="max-w-sm mx-auto">
    <div className="pb-16">{children}</div>
    <Navigation />
  </div>
);

export default Layout;
