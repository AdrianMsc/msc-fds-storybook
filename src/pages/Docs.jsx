import React from "react";
import MainLayout from "../layout/MainLayout";
import { Outlet } from "react-router-dom";

const Docs = () => {
  return (
    <MainLayout>
      <main className="main-container">
        <section className="msc-grid-layout">
          <div className="msc-layout-container">
            <Outlet />
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default Docs;
