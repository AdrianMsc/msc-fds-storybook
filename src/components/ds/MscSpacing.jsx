import React from "react";

const MscSpacing = ({ size }) => {
  return (
    <>
      <h2 class="mt-5">{size}px</h2>

      <div class="p-1 outline outline-slate-300 my-4 min-w-[200px]">
        <div class={`w-full h-[${size}px] bg-slate-300`}></div>
      </div>
    </>
  );
};

export default MscSpacing;
