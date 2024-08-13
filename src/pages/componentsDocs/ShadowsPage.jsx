import React from "react";

const ShadowsPage = () => {
  return (
    <>
      <small className="category-tag">Foundations</small>
      <h1>Shadows</h1>

      <div className="msc-component-container-row">
        <div className="size-[128px] rounded-md shadow-sm text-fuchsia-600 text-center content-center font-bold">
          .shadow-sm
        </div>
        <div className="size-[128px] rounded-md shadow text-fuchsia-600 text-center content-center font-bold">
          .shadow
        </div>
        <div className="size-[128px] rounded-md shadow-md text-fuchsia-600 text-center content-center font-bold">
          .shadow-md
        </div>
        <div className="size-[128px] rounded-md shadow-lg text-fuchsia-600 text-center content-center font-bold">
          .shadow-lg
        </div>
        <div className="size-[128px] rounded-md shadow-xl text-fuchsia-600 text-center content-center font-bold">
          .shadow-xl
        </div>
        <div className="size-[128px] rounded-md shadow-2xl text-fuchsia-600 text-center content-center font-bold">
          .shadow-2xl
        </div>
        <div className="size-[128px] rounded-md shadow-inner text-fuchsia-600 text-center content-center font-bold">
          .shadow-inner
        </div>
      </div>
    </>
  );
};

export default ShadowsPage;
