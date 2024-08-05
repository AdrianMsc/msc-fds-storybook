import React from "react";

const DividerPage = () => {
  return (
    <section class="msc-grid-layout">
      <div class="msc-layout-container">
        <h1 class="font-bold text-3xl mb-3">
          <small class="text-sm text-primary-blue">Layout</small> <br />
          Dividers
        </h1>

        <h2 class="mb-2">Horizontal</h2>
        <div class="flex flex-col gap-2 place-content-evenly w-full h-[100px] bg-white rounded py-3 px-4">
          <div class="msc-h-divider-gray"></div>
          <div class="msc-h-divider-blue"></div>
        </div>

        <h2 class="mb-2">Vertical</h2>
        <div class="flex flex-row gap-2 place-content-evenly w-[100px] h-[300px] bg-white rounded py-3 px-4">
          <div class="msc-v-divider-gray"></div>
          <div class="msc-v-divider-blue"></div>
        </div>
      </div>
    </section>
  );
};

export default DividerPage;
