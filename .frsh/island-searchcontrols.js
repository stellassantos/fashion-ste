import{a as f}from"./chunk-FHXDGFFW.js";import{a as i}from"./chunk-MWXQMU46.js";import{a as u}from"./chunk-ZQF3XTRU.js";import{a as p}from"./chunk-FHJRSYQF.js";import{a as c}from"./chunk-X2U7WVKR.js";import"./chunk-UXYBTFIZ.js";import"./chunk-JC3BWQRB.js";import"./chunk-U37GBM4D.js";import{b as m}from"./chunk-DSHYIDCS.js";import{c as n,f as e}from"./chunk-IAMGS6YL.js";import"./chunk-CRNLDV6W.js";import"./chunk-GGCEL3NW.js";var d=t=>{let o=t.split(":"),s=Number(o?.[0]),r=Number(o?.[1]);return Number.isNaN(s)||Number.isNaN(r)?null:{from:s,to:r}};var L=t=>t["@type"]==="FilterToggle";function g({url:t,selected:o,label:s,quantity:r}){return e("a",{href:t,class:"flex items-center gap-2",children:[e("div",{"aria-checked":o,class:"checkbox"}),e("span",{class:"text-sm",children:s}),r>0&&e("span",{class:"text-sm text-base-300",children:["(",r,")"]})]})}function S({key:t,values:o}){return e("ul",{class:`flex flex-wrap gap-2 ${t==="tamanho"||t==="cor"?"flex-row":"flex-col"}`,children:o.map(r=>{let{url:a,selected:v,value:w,quantity:M}=r;if(t==="cor"||t==="tamanho")return e("a",{href:a,children:e(f,{content:w,variant:v?"active":"default"})});if(t==="price"){let l=d(r.value);return l&&e(g,{...r,label:`${i(l.from)} - ${i(l.to)}`})}return e(g,{...r})})})}function F({filters:t}){return e("ul",{class:"flex flex-col gap-6 p-4",children:t.filter(L).map(o=>e("li",{class:"flex flex-col gap-4",children:[e("span",{children:o.label}),e(S,{...o})]}))})}var b=F;var x="sort",y=()=>n(()=>new URLSearchParams(window.location?.search).get(x)??"",[]),T=t=>{let o=new URLSearchParams(window.location.search);console.log(t.currentTarget.value),o.set(x,t.currentTarget.value),window.location.search=o.toString()};function E({sortOptions:t}){let o=y();return e("select",{id:"sort",name:"sort",onInput:T,class:"w-min h-[36px] px-1 rounded m-2 text-button font-button text-base-content cursor-pointer outline-none",children:t.map(({value:s,label:r})=>e("option",{value:s,selected:s===o,children:e("span",{class:"text-sm",children:r})},s))})}var P=E;function N({itemListElement:t=[]}){let o=[{name:"Home",item:"/"},...t];return e("div",{class:"text-caption breadcrumbs",children:e("ul",{children:o.filter(({name:s,item:r})=>s&&r).map(({name:s,item:r})=>e("li",{children:e("a",{href:r,children:s})}))})})}var h=N;function R({filters:t,breadcrumb:o,displayFilter:s,sortOptions:r}){let a=m(!1);return e("div",{class:"flex flex-col justify-between mb-4 p-4 sm:mb-0 sm:p-0 sm:gap-4 sm:flex-row sm:h-[53px] sm:border-b sm:border-base-200",children:[e("div",{class:"flex flex-row items-center sm:p-0 mb-2",children:e(h,{itemListElement:o?.itemListElement})}),e("div",{class:"flex flex-row items-center justify-between border-b border-base-200 sm:gap-4 sm:border-none",children:[e(c,{class:s?"btn-ghost":"btn-ghost sm:hidden",onClick:()=>{a.value=!0},children:["Filtrar",e(p,{id:"FilterList",width:16,height:16})]}),r.length>0&&e(P,{sortOptions:r})]}),e(u,{loading:"lazy",title:"Filtrar",mode:"sidebar-right",open:a.value,onClose:()=>{a.value=!1},children:e(b,{filters:t})})]})}var B=R;export{B as default};
