import{au as f,r as s,j as e,S as j,B as v,n as N,Q as g,a6 as S,av as y,aq as b,s as R,t as k}from"./index-Ql4K0yO-.js";import{d as w}from"./date.util-DC23xNcO.js";import{f as C}from"./search.util-CoWWLx4z.js";import{S as L,T as D,R as B}from"./ReportModal-BniGgHvo.js";import"./jspdf.plugin.autotable-DlZssrtY.js";const _=async()=>{try{return(await f.get("/")).data}catch(a){throw new Error(`${a.response.message}`)}},A=()=>{const[a,c]=s.useState(null),[n,l]=s.useState([]),[o,i]=s.useState(!0);return s.useEffect(()=>{(async()=>{try{const r=await _();l(r)}catch(r){c(r.message)}finally{i(!1)}})()},[]),{suplliers:n,loading:o,error:a,setSuplliers:l}},E=()=>{const[a,c]=s.useState(""),{suplliers:n,loading:l}=A(),o=t=>c(t.toLowerCase()),i=s.useMemo(()=>C(n,a,["company_name","ruc"]),[n,a]),d=[{name:e.jsxs("div",{className:"flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-300",children:[e.jsx(g,{}),e.jsx("span",{children:"Nombre de la empresa"})]}),selector:t=>t.company_name,sortable:!0,minWidth:"300px",cell:t=>e.jsx("div",{className:"text-xs text-neutral-500 dark:text-neutral-300",children:t.company_name})},{name:e.jsxs("div",{className:"flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-300",children:[e.jsx(S,{}),e.jsx("span",{children:"Nombre comercial"})]}),selector:t=>t.commercial_name,sortable:!0,minWidth:"300px",cell:t=>e.jsx("div",{className:"text-xs text-neutral-500 dark:text-neutral-300",children:t.commercial_name})},{name:e.jsxs("div",{className:"flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-300",children:[e.jsx(y,{}),e.jsx("span",{children:"RUC"})]}),selector:t=>t.ruc,sortable:!0,minWidth:"120px",cell:t=>e.jsx("div",{className:"text-xs text-neutral-500 dark:text-neutral-300",children:t.ruc})},{name:e.jsxs("div",{className:"flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-300",children:[e.jsx(b,{}),e.jsx("span",{children:"Dirección"})]}),selector:t=>t.address,sortable:!0,minWidth:"370px",cell:t=>e.jsx("div",{className:"text-xs text-neutral-500 dark:text-neutral-300",children:t.address})},{name:e.jsxs("div",{className:"flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-300",children:[e.jsx(R,{}),e.jsx("span",{children:"Añadido"})]}),selector:t=>t.createdAt,sortable:!0,minWidth:"180px",cell:t=>e.jsx("div",{className:"text-xs text-neutral-500 dark:text-neutral-300",children:k(t.createdAt)})}],[r,x]=s.useState(!1),m=()=>x(!0),u=()=>x(!1),p=[["Nombre empresa","Nombre comercial","RUC","Dirección","Fecha"]],h=n.map(t=>[t.company_name,t.commercial_name,t.ruc,t.address,w(t.createdAt)]);return e.jsx(e.Fragment,{children:l?e.jsx("div",{className:"flex h-screen items-center justify-center",children:e.jsx(j,{text:"Cargando proveedores, espera un momento :)"})}):e.jsx("main",{className:"mx-auto max-w-7xl py-20",children:e.jsxs("div",{className:"flex flex-col gap-4 gap-x-20",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex items-center gap-2 text-lg font-medium",children:e.jsx("span",{children:"Proveedores"})}),e.jsx("div",{className:"flex flex-row items-center",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(L,{onSearch:o}),e.jsx(v,{onClick:m,variant:"outline",icon:N,children:"Reporte"})]})})]}),e.jsx("div",{className:"max-h-full overflow-y-auto rounded-md pt-4",children:e.jsx(D,{columns:d,data:i,expandableRows:!1})}),r&&e.jsx(B,{tableHead:p,tableBody:h,isOpen:r,title:"Reporte proveedores",onClose:u})]})})})};function P(){return e.jsx(E,{})}export{P as default};
