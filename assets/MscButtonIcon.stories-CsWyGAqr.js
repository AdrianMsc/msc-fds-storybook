import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";/* empty css               */const n=({icon:u="fa-solid fa-thumbs-up",size:c="default",disabled:r=!1})=>{const s={default:"",small:"-sm",large:"-lg"},d=`msc-icon-button${s[c]||s.default}`;return a.jsx("button",{className:d,disabled:r,children:a.jsx("i",{className:u})})};n.__docgenInfo={description:"",methods:[],displayName:"MscButtonIcon",props:{icon:{defaultValue:{value:'"fa-solid fa-thumbs-up"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const p={title:"Action/Button",component:n,parameters:{layout:"centered"},argTypes:{icon:{control:"select",options:["fa-solid fa-thumbs-up","fa-solid fa-magnifying-glass","fa-solid fa-comment"]},size:{control:"select",options:["default","small","large"]},disabled:{control:"boolean"}}},e={args:{icon:"fa-solid fa-thumbs-up",size:"default",disabled:!1}};var t,o,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    icon: "fa-solid fa-thumbs-up",
    size: "default",
    disabled: false
  }
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const b=["mscButtonIcon"];export{b as __namedExportsOrder,p as default,e as mscButtonIcon};
