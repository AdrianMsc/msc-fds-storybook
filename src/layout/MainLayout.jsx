import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <main className="flex flex-row">
        <Sidebar />
        {children}
      </main>
    </>
  );
};

export default MainLayout;
