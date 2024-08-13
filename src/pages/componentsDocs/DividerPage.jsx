import React from "react";
import { Codeblock } from "../../components";

const DividerPage = () => {
  return (
    <>
      <small className="text-sm text-primary-blue">Layout</small>
      <h1 className="font-bold text-3xl mb-3">Dividers</h1>

      <h2 className="mb-2">Horizontal</h2>
      <div className="msc-component-container-col gap-6">
        <div className="msc-h-divider-gray"></div>
        <div className="msc-h-divider-blue"></div>
      </div>

      <Codeblock>
        {`
  // Horizontal Gray Divider
  <div class="msc-h-divider-gray"></div>
  
  // Horizontal Blue Divider
  <div class="msc-h-divider-blue"></div>
        `}
      </Codeblock>

      <h2 className="mb-2">Vertical</h2>
      <div className="flex flex-row gap-2 place-content-evenly w-[100px] h-[300px] bg-white rounded py-3 px-4">
        <div className="msc-v-divider-gray"></div>
        <div className="msc-v-divider-blue"></div>
      </div>

      <Codeblock>
        {`
  // Vertical Gray Divider
  <div class="msc-v-divider-gray"></div>
  
  // Vertical Blue Divider
  <div class="msc-v-divider-blue"></div>
        `}
      </Codeblock>
    </>
  );
};

export default DividerPage;
