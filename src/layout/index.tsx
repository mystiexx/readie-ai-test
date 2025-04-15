import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="hidden lg:block">
        <Sidebar/>
      </div>

      <div className="w-full linear">
        <Navbar/>
        <div className="h-screen overflow-y-scroll px-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
