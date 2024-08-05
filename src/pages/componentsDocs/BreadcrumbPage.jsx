import React from "react";
import { Codeblock } from "../../components";

const BreadcrumbPage = () => {
  return (
    <>
      <small className="category-tag">Navigation</small>
      <h1>Breadcrumb</h1>

      <div className="msc-component-container-col">
        <ol className="msc-breadcrumb-container">
          <li>
            <a className="msc-breadcrumb">breadcrumb</a>
            <span>/</span>
          </li>
          <li>
            <a className="msc-breadcrumb">breadcrumb</a>
            <span>/</span>
          </li>
          <li>
            <a className="msc-breadcrumb">breadcrumb</a>
            <span>/</span>
          </li>
          <li>
            <a className="msc-breadcrumb">breadcrumb</a>
            <span>/</span>
          </li>
          <li>
            <a className="msc-breadcrumb">breadcrumb</a>
            <span>/</span>
          </li>
          <li>
            <a className="msc-breadcrumb">breadcrumb</a>
            <span>/</span>
          </li>
          <li>
            <a className="msc-breadcrumb">breadcrumb</a>
            <span>/</span>
          </li>
          <li>
            <a className="msc-breadcrumb">breadcrumb</a>
            <span>/</span>
          </li>
        </ol>
      </div>

      <h1>Code</h1>
      <Codeblock>
        {`
  <ol class="msc-breadcrumb-container">
    <li>
      <a class="msc-breadcrumb">breadcrumb</a>
      <span>/</span>
    </li>
    <li>
      <a class="msc-breadcrumb">breadcrumb</a>
      <span>/</span>
    </li>
    <li>
      <a class="msc-breadcrumb">breadcrumb</a>
      <span>/</span>
    </li>
  </ol>
          `}
      </Codeblock>
    </>
  );
};

export default BreadcrumbPage;
