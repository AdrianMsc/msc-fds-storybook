import React from "react";
import MainLayout from "../layout/MainLayout";
import { Outlet } from "react-router-dom";

const Docs = () => {
  return (
    <MainLayout>
      <section className="main-container">
        <Outlet />
      </section>
    </MainLayout>
  );
};

export default Docs;
