import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const d=({label:a,errorMessage:r,disabled:c})=>e.jsx(e.Fragment,{children:e.jsxs("div",{class:"msc-input-unit-wrapper",children:[e.jsx("input",{id:"field",type:"number",placeholder:"1",disabled:c,class:`msc-input-unit order-2 peer ${r&&r.trim()?" !border-error-red !text-error-red hover:!border-error-red focus:!border-error-red":""}`}),e.jsx("label",{htmlFor:"field",className:`msc-input-unit-label order-1 peer ${r&&r.trim()?" !text-error-red hover:!border-error-red focus:!border-error-red":""}`,children:a}),e.jsx("small",{className:`msc-error-message order-3 ${r&&r.trim()?"block":""}`,children:r})]})}),l=d;d.__docgenInfo={description:"",methods:[],displayName:"MscInputUnit"};const m={title:"Form/Input",component:l,parameters:{layout:"centered"},argTypes:{label:{control:"text"},errorMessage:{control:"text"},disabled:{control:"boolean"}}},t={args:{label:"Length (ft)",errorMessage:"",disabled:!1}};var s,o,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "Length (ft)",
    errorMessage: "",
    disabled: false
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const u=["mscInputUnit"];export{u as __namedExportsOrder,m as default,t as mscInputUnit};
