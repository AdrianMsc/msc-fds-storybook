import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const d=({label:s,errorMessage:r,required:l,disabled:c})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"msc-input-wrapper",children:[e.jsx("input",{id:"default",type:"text",placeholder:s,className:`msc-input peer ${r&&r.trim()?" !border-error-red !text-error-red hover:!border-error-red focus:!border-error-red":""} `,disabled:c}),e.jsxs("label",{htmlFor:"default",className:`msc-input-label ${r&&r.trim()?" !text-error-red hover:!border-error-red focus:!border-error-red":""}`,children:[s,e.jsx("span",{className:`text-error-red ${l===!0?"":"hidden"}`,children:"*"})]}),e.jsx("small",{className:`msc-error-message ${r&&r.trim()?"block":""}`,children:r})]})}),m=d;d.__docgenInfo={description:"",methods:[],displayName:"MscInput"};const u={title:"Form/Input",component:m,parameters:{layout:"centered"},argTypes:{label:{control:"text"},errorMessage:{control:"text"},required:{control:"boolean"},disabled:{control:"boolean"}}},t={args:{label:"Default",errorMessage:"",required:!0,disabled:!1}};var o,a,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Default",
    errorMessage: "",
    required: true,
    disabled: false
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const x=["mscInput"];export{x as __namedExportsOrder,u as default,t as mscInput};
