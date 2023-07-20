import{a as d}from"./chunk-MWXQMU46.js";import{a as v}from"./chunk-ZTL2LYIP.js";import{a as p}from"./chunk-BXVKR2US.js";import"./chunk-KVKEBKS6.js";import"./chunk-VFFA6CKP.js";import{a as k}from"./chunk-4QO3HHI3.js";import"./chunk-74IX6KIF.js";import{a as w}from"./chunk-HTOFNZE4.js";import{a as I}from"./chunk-ZDETGVGB.js";import{a as r}from"./chunk-X2U7WVKR.js";import"./chunk-UXYBTFIZ.js";import"./chunk-N5F33J46.js";import"./chunk-U37GBM4D.js";import{b as h}from"./chunk-DSHYIDCS.js";import{b as C,f as e}from"./chunk-IAMGS6YL.js";import"./chunk-CRNLDV6W.js";import{c as y}from"./chunk-GGCEL3NW.js";var D=100;function S({onChange:o,quantity:t,disabled:a,loading:l}){return e("div",{class:"form-control",children:e("div",{class:"input-group",children:[e(r,{class:"btn-square btn-outline",onClick:()=>o?.(Math.max(0,t-1)),disabled:a,loading:l,children:"-"}),e("input",{class:"input border-base-content border-x-0 text-center",type:"number",inputMode:"numeric",pattern:"[0-9]*",max:D,min:1,value:t,disabled:a,onBlur:s=>o?.(s.currentTarget.valueAsNumber)}),e(r,{class:"btn-square btn-outline",onClick:()=>o?.(Math.min(t+1,D)),disabled:a,loading:l,children:"+"})]})})}var E=S;function q({index:o}){let{loading:t,cart:a,updateItems:l,mapItemsToAnalyticsItems:i}=p(),n=a.value.items[o],s=a.value?.clientPreferencesData.locale,u=a.value?.storePreferencesData.currencyCode,{imageUrl:m,skuName:c,sellingPrice:f,listPrice:A,name:B,quantity:P}=n,b=f<.01;return e("div",{class:"flex flex-row justify-between items-start gap-4",children:[e(w,{src:m,alt:c,width:108,height:150,class:"object-cover object-center"}),e("div",{class:"flex-grow",children:[e("span",{children:B}),e("div",{class:"flex items-center gap-2",children:[e("span",{class:"line-through text-base-300 text-sm",children:d(A/100,u,s)}),e("span",{class:"text-sm text-secondary",children:b?"Gr\xE1tis":d(f/100,u,s)})]}),e("div",{class:"mt-6 max-w-min",children:e(E,{disabled:t.value||b,quantity:P,onChange:x=>{l({orderItems:[{index:o,quantity:x}]});let g=x-n.quantity;a.value&&v({name:g<0?"remove_from_cart":"add_to_cart",params:{items:i({items:[{...n,quantity:Math.abs(g)}],marketingData:a.value.marketingData})}})}})})]}),e(r,{onClick:()=>{l({orderItems:[{index:o,quantity:0}]}),a.value&&v({name:"remove_from_cart",params:{items:i({items:[n],marketingData:a.value.marketingData})}})},disabled:t.value||b,loading:t.value,class:"btn btn-ghost",children:e(I,{id:"Trash",width:20,height:20})})]})}var T=q;function M(){let{cart:o,loading:t,addCouponsToCart:a}=p(),l=C(null),i=h(!1),n=o.value?.marketingData?.coupon,s=()=>{i.value=!i.value},u=m=>{m.preventDefault();let c=l.current?.value;typeof c=="string"&&(a({text:c}),s())};return e("div",{class:"flex justify-between items-center px-4",children:[e("span",{class:"text-sm",children:"Cupom de desconto"}),!i.value&&e(r,{class:"btn-ghost underline",onClick:s,children:n||"Adicionar"}),i.value&&e("form",{class:"flex gap-2",children:[e("input",{id:"coupon",name:"coupon",ref:l,class:"w-[140px] border rounded p-2 text-caption font-caption",type:"text",value:n??"",placeholder:"Coupom"}),e(r,{type:"submit",htmlFor:"coupon",loading:t.value,onClick:u,children:"Ok"})]})]})}var _=M;var U="https://bravtexfashionstore.vtexcommercestable.com.br/checkout";function z(){let{displayCart:o}=k(),{cart:t,loading:a,mapItemsToAnalyticsItems:l}=p(),i=t.value?.items.length===0,n=t.value?.totalizers.find(c=>c.id==="Items"),s=t.value?.totalizers.find(c=>c.id==="Discounts"),u=t.value?.clientPreferencesData.locale,m=t.value?.storePreferencesData.currencyCode;return t.value===null?null:i?e("div",{class:"flex flex-col justify-center items-center h-full gap-6",children:[e("span",{class:"font-medium text-2xl",children:"Sua sacola est\xE1 vazia"}),e(r,{class:"btn-outline",onClick:()=>{o.value=!1},children:"Escolher produtos"})]}):e(y,{children:[e("ul",{role:"list",class:"mt-6 px-2 flex-grow overflow-y-auto flex flex-col gap-6",children:t.value.items.map((c,f)=>e("li",{children:e(T,{index:f},f)}))}),e("footer",{children:[e("div",{class:"border-t border-base-200 py-4 flex flex-col gap-4",children:[s?.value&&e("div",{class:"flex justify-between items-center px-4",children:[e("span",{class:"text-sm",children:"Descontos"}),e("span",{class:"text-sm",children:d(s.value/100,m,u)})]}),e(_,{})]}),n?.value&&e("div",{class:"border-t border-base-200 pt-4 flex flex-col justify-end items-end gap-2 mx-4",children:[e("div",{class:"flex justify-between items-center w-full",children:[e("span",{children:"Total"}),e("span",{class:"font-medium text-xl",children:d(n.value/100,m,u)})]}),e("span",{class:"text-sm text-base-300",children:"Taxas e fretes ser\xE3o calculados no checkout"})]}),e("div",{class:"p-4",children:e("a",{class:"inline-block w-full",target:"_blank",href:`${U}?orderFormId=${t.value.orderFormId}`,children:e(r,{"data-deco":"buy-button",class:"w-full",disabled:a.value||t.value.items.length===0,onClick:()=>{v({name:"begin_checkout",params:{currency:t.value?m:"",value:n?.value?(n?.value-(s?.value??0))/100:0,coupon:t.value?.marketingData?.coupon??void 0,items:t.value?l(t.value):[]}})},children:"Finalizar Compra"})})})]})]})}var ie=z;export{ie as default};
