import{r as a,j as e,A as D,m as p,k as B,f as q,i as U,h as J,C as Q,D as O,E as Y,G as Z,g as ee,H as te,y as ae,I as L,S as se,B as b,n as le,o as re,p as ne,K as ie,M as de,w as oe}from"./index-D68pdc45.js";import{d as N}from"./date.util-DC23xNcO.js";import{S as ce,T as xe,R as me}from"./ReportModal-CXogGoBQ.js";import{g as A}from"./client.api-CI4u2Kov.js";import{C as ue}from"./ChartLine-CI3EE4pd.js";import{A as pe}from"./AnimatedDropdown-CzKhRzcQ.js";import"./jspdf.plugin.autotable-BiGaQpWt.js";import"./spinner-CMu85IWD.js";const he=({client:s,onClose:h})=>{const[x,m]=a.useState(!1),[f,j]=a.useState("");a.useEffect(()=>{m(!0)},[]);const u=s.bills.filter(r=>r.id_ticket.toLowerCase().includes(f.toLowerCase())),c={hidden:{opacity:0,backdropFilter:"blur(0px)"},visible:{opacity:1,backdropFilter:"blur(2px)",transition:{duration:.2}}},k={hidden:{opacity:0,scale:1,x:"100%",transition:{duration:.2,ease:"easeInOut"}},visible:{opacity:1,scale:1,x:"0%",transition:{duration:.2,ease:"circIn"}}};return e.jsx(D,{children:x&&e.jsxs(p.div,{className:"fixed inset-0 z-50 flex items-center justify-end overflow-auto",initial:"hidden",animate:"visible",exit:"hidden",variants:c,children:[e.jsx(p.div,{className:"absolute inset-0 bg-neutral-50/50 dark:bg-neutral-900/50",variants:c}),e.jsxs(p.div,{className:"relative flex h-full max-h-full w-full max-w-lg flex-col gap-y-5 border bg-white p-6 shadow-lg dark:border-neutral-700 dark:bg-neutral-900",variants:k,onClick:r=>r.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex flex-row items-center gap-2 font-medium text-neutral-600 dark:text-neutral-300",children:[e.jsx("div",{className:"rounded-lg border p-2 dark:border-neutral-700",children:e.jsx(B,{})}),e.jsx("span",{children:"Perfil del cliente"})]}),e.jsx("button",{onClick:()=>{m(!1),setTimeout(h,300)},className:"cursor-pointer rounded-md p-1.5 text-lg text-neutral-400 transition-colors duration-150 hover:bg-neutral-100 hover:text-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-neutral-300",children:e.jsx(q,{})})]}),e.jsx("div",{className:"flex h-full flex-col gap-8 overflow-auto pr-2",children:e.jsxs("div",{className:"space-y-4 text-sm text-neutral-500 dark:text-neutral-300",children:[e.jsxs("div",{className:"flex max-h-full items-center rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800/50",children:[e.jsx(U,{size:64,value:s.names}),e.jsxs("div",{className:"ml-6 flex-1 text-sm",children:[e.jsxs("div",{className:"flex flex-col items-start gap-2",children:[e.jsx("h3",{className:"text-lg",children:s.names}),e.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[e.jsx(J,{}),e.jsx("p",{children:N(s.createdAt)})]})]}),e.jsx("hr",{className:"my-4"}),e.jsxs("div",{className:"flex items-center justify-between pb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Q,{}),e.jsx("p",{children:s.phone})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(O,{}),e.jsx("p",{children:s.identification_card})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Y,{}),e.jsx("p",{children:s.email})]})]})]}),e.jsx("div",{className:"space-y-4 pt-4",children:s.bills.length>0?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"relative flex items-center justify-between",children:[e.jsxs("p",{className:"text-sm font-medium",children:["Total compras (",s.bills.length,")"]}),e.jsx("div",{className:"flex gap-4 text-sm",children:e.jsxs("div",{className:"relative flex items-center overflow-hidden rounded-lg border dark:border-neutral-700",children:[e.jsx("input",{type:"text",placeholder:"Buscar por ticket...",value:f,onChange:r=>j(r.target.value),className:"w-full py-1.5 pl-10 pr-3 outline-none dark:bg-neutral-800"}),e.jsx(Z,{className:"absolute left-3"})]})})]}),e.jsx("ul",{className:"list-inside list-disc space-y-2 text-sm text-neutral-600",children:u.length>0?e.jsx(D,{children:u.map(r=>e.jsxs(p.div,{className:"flex justify-between gap-6 py-0.5 text-xs font-medium",initial:{opacity:0,y:10},animate:{opacity:1,y:0,transition:{duration:.3}},exit:{opacity:0,y:-10,transition:{duration:.2}},children:[e.jsxs("div",{className:"flex gap-2 font-medium",children:[e.jsxs("div",{className:"flex items-center gap-2 rounded-md bg-sky-50 px-3 py-1 text-blue-500 dark:bg-sky-800/30",children:[e.jsx(ee,{}),e.jsx("p",{children:r.id_ticket})]}),e.jsxs("div",{className:"flex items-center gap-2 px-2 py-1 text-neutral-500/80",children:[e.jsx(te,{}),e.jsx("p",{children:N(r.createdAt)})]})]}),e.jsx("a",{href:`data:application/pdf;base64,${r.bill_pdf}`,download:`${r.id_ticket}.pdf`,className:"flex items-center gap-2 rounded-sm bg-sky-100 px-2 py-1 font-medium text-sky-500 transition-colors duration-150 hover:bg-sky-200 hover:text-sky-600 focus:outline-none dark:bg-sky-800 dark:text-sky-200 dark:hover:bg-sky-700",children:e.jsx(ae,{size:14})})]},r.id_bill_sale))}):e.jsx("div",{className:"pt-16",children:e.jsx(L,{title:"Sin resultados :(",description:"Lo sentimos, no se encontraron coincidencias. Por favor, busca otra cosa."})})})]}):e.jsx("div",{className:"pt-16",children:e.jsx(L,{title:"Sin compras :(",description:"Lo sentimos, este cliente no ha realizado ninguna compra. Por favor, vuelve en otro momento."})})})]})})]})]})})},fe=()=>{const[s,h]=a.useState([]),[x,m]=a.useState(""),[f,j]=a.useState(null),[u,c]=a.useState(!1),[k,r]=a.useState(null),[g,M]=a.useState(!1),[R,y]=a.useState(null),[E,C]=a.useState(!1),[l,v]=a.useState({dateFrom:"",dateTo:"",clientType:"all"});a.useEffect(()=>{(async()=>{c(!0);try{const n=await A();h(n);const d=n.filter(o=>o.names!=="Consumidor Final"),i=d.reduce((o,F)=>F.billCount>o.billCount?F:o,d[0]);r(i)}catch{j("Error al cargar las ventas")}finally{c(!1)}})()},[]);const P=t=>m(t.toLowerCase()),_=t=>{y(t),C(!0)},z=()=>{y(null),C(!1)},I=[{name:e.jsxs("div",{className:"flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-300",children:[e.jsx(B,{}),e.jsx("span",{children:"Nombres"})]}),selector:t=>t.names,sortable:!0,minWidth:"200px",cell:t=>e.jsx("div",{className:"text-xs text-neutral-500 dark:text-neutral-300",children:t.names})},{name:e.jsxs("div",{className:"flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-300",children:[e.jsx(ie,{}),e.jsx("span",{children:"Teléfono"})]}),selector:t=>t.phone,sortable:!0,minWidth:"0px",cell:t=>e.jsx("div",{className:"text-xs text-neutral-500 dark:text-neutral-300",children:t.phone})},{name:e.jsxs("div",{className:"flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-300",children:[e.jsx(O,{}),e.jsx("span",{children:"Cédula"})]}),selector:t=>t.identification_card,sortable:!0,minWidth:"0px",cell:t=>e.jsx("div",{className:"text-xs text-neutral-500 dark:text-neutral-300",children:t.identification_card})},{name:e.jsxs("div",{className:"flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-300",children:[e.jsx(de,{}),e.jsx("span",{children:"Compras"})]}),selector:t=>t.billCount,sortable:!0,minWidth:"0px",cell:t=>e.jsx("div",{className:"text-xs text-neutral-500 dark:text-neutral-300",children:t.billCount})},{name:e.jsx("div",{className:"flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-300"}),sortable:!1,minWidth:"0px",cell:t=>e.jsx("div",{className:"flex gap-2 p-2 text-xs",children:e.jsx("button",{onClick:()=>_(t),className:"flex items-center gap-2 rounded-sm bg-neutral-100 px-2 py-1 font-medium text-neutral-500 transition-colors duration-150 hover:bg-neutral-200 hover:text-neutral-600 focus:outline-none dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600",children:e.jsx(oe,{size:14})})})}],W=[["Nombres","Celular","Cédula","Email","Compras"]],V=s.map(t=>[t.names,t.phone,t.identification_card,t.email,t.billCount,N(t.createdAt)]),[w,S]=a.useState(!1),G=()=>S(!0),H=()=>S(!1),K=t=>{v({...l,[t.target.name]:t.target.value})},T=t=>{v({...l,[t.target.name]:t.target.value})},X=a.useMemo(()=>s.filter(t=>{const n=(t==null?void 0:t.names)&&t.names.toLowerCase().includes(x),d=(l.dateFrom?new Date(t.createdAt)>=new Date(l.dateFrom):!0)&&(l.dateTo?new Date(t.createdAt)<=new Date(l.dateTo):!0),i=l.clientType==="all"||l.clientType==="consumidorFinal"&&(t==null?void 0:t.names)==="Consumidor Final"||l.clientType==="conDatos"&&(t==null?void 0:t.names)!=="Consumidor Final";return n&&d&&i}),[s,x,l]),$=({client:t})=>{const n=t.filter(i=>i).length,d=t.reduce((i,o)=>i+(o.billCount||0),0);return e.jsx("div",{children:e.jsxs("div",{className:"grid grid-cols-1 gap-6 text-neutral-500 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2",children:[e.jsxs("div",{className:"flex transform items-center gap-4 rounded-lg border-l-4 border-teal-400 bg-neutral-50 p-4 text-start dark:border-teal-200 dark:bg-neutral-800 dark:text-teal-200",children:[e.jsx("div",{className:"rounded-full bg-teal-300/50 px-4 py-2 text-xl font-semibold dark:bg-teal-300/50",children:n}),e.jsx("div",{children:e.jsx("p",{className:"text-sm font-medium dark:text-teal-200/80",children:"Clientes totales"})})]}),e.jsxs("div",{className:"flex transform items-center gap-4 rounded-lg border-l-4 border-green-400 bg-neutral-50 p-4 text-start dark:border-green-200 dark:bg-neutral-800 dark:text-green-200",children:[e.jsx("div",{className:"rounded-full bg-green-300/50 px-4 py-2 text-xl font-semibold dark:bg-green-300/50",children:d}),e.jsx("div",{children:e.jsx("p",{className:"text-sm font-medium dark:text-green-200/80",children:"Total de compras"})})]})]})})};return e.jsx(e.Fragment,{children:u?e.jsx("div",{className:"flex h-screen items-center justify-center",children:e.jsx(se,{text:"Cargando clientes, espera un momento :)"})}):e.jsx("main",{className:"mx-auto max-w-7xl py-20",children:e.jsxs("div",{className:"flex flex-col gap-4 gap-x-20",children:[e.jsxs("div",{className:"grid gap-12 pt-3 sm:grid-cols-1 md:grid-cols-2",children:[e.jsxs("div",{className:"col-span-1 flex flex-col gap-y-6 md:col-span-1",children:[e.jsx($,{client:s}),e.jsx(ue,{fetchData:A,dataKey:"createdAt",label:"Clientes",filters:["Mensual","Anual","Semanal"],initialFilter:"Mensual"})]}),e.jsxs("div",{className:"max-h-full overflow-y-auto rounded-md",children:[e.jsxs("div",{className:"flex items-center justify-between pb-6",children:[e.jsx("div",{className:"flex items-center gap-2 text-lg font-medium",children:e.jsx("span",{children:"Clientes "})}),e.jsx("div",{className:"flex flex-row items-center",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(ce,{onSearch:P}),e.jsx(b,{onClick:G,variant:"outline",icon:le,children:"Reporte"}),e.jsx(b,{onClick:()=>M(!g),variant:"outline",children:g?e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(re,{}),e.jsx("span",{children:"Filtros"})]}):e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ne,{}),e.jsx("span",{children:"Filtros"})]})}),e.jsx(pe,{isOpen:g,className:"right-7 top-32",children:e.jsxs("div",{className:"flex flex-col gap-6 p-4 text-xs font-medium",children:[e.jsxs("div",{className:"flex justify-between gap-4",children:[e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("label",{className:"flex items-center",children:"Fecha inicio"}),e.jsx("input",{type:"date",name:"dateFrom",value:l.dateFrom,onChange:T,className:"mt-2 rounded-md border border-neutral-100 bg-neutral-50 p-2 focus:border-neutral-500 focus:ring-neutral-500 dark:border-neutral-700 dark:bg-neutral-800"})]}),e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("label",{className:"flex items-center",children:"Fecha fin"}),e.jsx("input",{type:"date",name:"dateTo",value:l.dateTo,onChange:T,className:"mt-2 rounded-md border border-neutral-100 bg-neutral-50 p-2 focus:border-neutral-500 focus:ring-neutral-500 dark:border-neutral-700 dark:bg-neutral-800"})]})]}),e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("label",{className:"flex items-center",children:"Tipo de cliente"}),e.jsxs("select",{name:"clientType",value:l.clientType,onChange:K,className:"mt-2 rounded-md border border-neutral-100 bg-neutral-50 p-2 focus:border-neutral-500 focus:ring-neutral-500 dark:border-neutral-700 dark:bg-neutral-800",children:[e.jsx("option",{value:"all",children:"Todos"}),e.jsx("option",{value:"consumidorFinal",children:"Solo consumidores finales"}),e.jsx("option",{value:"conDatos",children:"Solo clintes"})]})]}),e.jsx(b,{variant:"primary",onClick:()=>v({...l,dateFrom:"",dateTo:"",clientType:"all"}),children:"Restablecer Filtros"})]})})]})})]}),e.jsx(xe,{columns:I,data:X,expandableRows:!1})]})]}),E&&e.jsx(he,{client:R,onClose:z}),w&&e.jsx(me,{tableHead:W,tableBody:V,title:"Reporte clientes",isOpen:w,onClose:H})]})})})};function we(){return e.jsx(fe,{})}export{we as default};
