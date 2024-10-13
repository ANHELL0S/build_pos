import{j as e,r as t,aR as z,aS as R,E as U,aT as Y,aL as K,u as q,X as H,S as G,Y as J,Q as O,aU as V,g as W,L as $,aV as T}from"./index-CwctY5k1.js";import{g as Z,a as Q,b as X}from"./sale.api-BvUheGVx.js";import{g as F}from"./client.api-DhpK2gAb.js";import{a as M,r as ee,L as te,b as ae,c as se,B as re,p as le,d as ne,e as oe,C as ie}from"./ChartLine-B2YQ3SDa.js";import{u as ce}from"./useProducts-D3KA5BlX.js";import{S as de}from"./spinner-CavXBNdq.js";import{a as ue}from"./kardex.api-D_pMdHmZ.js";import"./products.api-Dp8YqDK2.js";const B=({icon:s,title:c,count:d,backgroundColor:r,textcolor:n})=>e.jsx("main",{className:"relative rounded-lg border bg-neutral-50 p-3 text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",children:e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"flex flex-row items-center justify-between gap-3",children:[e.jsx("div",{className:`rounded-md p-2 ${r} ${n}`,children:s&&e.jsx(s,{})}),e.jsx("p",{className:"text-sm font-medium",children:c})]}),e.jsx("p",{className:"text-2xl font-semibold",children:d})]})}),xe=()=>{const[s,c]=t.useState([]),[d,r]=t.useState(null),[n,f]=t.useState(!0);return t.useEffect(()=>{(async()=>{try{const a=await Z();c(a)}catch(a){r(a.message)}finally{f(!1)}})()},[]),{sale:s,loading:n,error:d,setSales:c}},ge=()=>{const[s,c]=t.useState([]),[d,r]=t.useState(null),[n,f]=t.useState(!0);return t.useEffect(()=>{(async()=>{try{const a=await F();c(a)}catch(a){r(a.message)}finally{f(!1)}})()},[]),{client:s,loading:n,error:d,setClients:c}};M.register(...ee);const me=()=>{const[s,c]=t.useState("month"),[d,r]=t.useState(0),[n,f]=t.useState(0),[y,a]=t.useState({labels:[],datasets:[{label:"Ganancias",data:[],fill:!1,backgroundColor:"rgb(128, 231, 148)",borderColor:"rgba(199, 242, 227, 0.2)"}]}),v={plugins:{legend:{display:!1}},scales:{x:{ticks:{color:"rgba(255, 255, 255, 0.5)"},grid:{display:!1}},y:{ticks:{color:"rgba(255, 255, 255, 0.7)"},beginAtZero:!0,grid:{display:!1}}}},N=async o=>{var u,l,x,w;try{const g=await Q(o);let L=[],P=[],S=0,D=0;if(o==="month"){const A=new Date,k=["January","February","March","April","May","June","July","August","September","October","November","December"],C=A.getMonth(),p=(C+11)%12,_=[];for(let b=3;b>=0;b--){const E=(C-b+12)%12;_.push(k[E])}L=_,P=_.map(b=>{const E=g.history.find(I=>I.month===b);return E?E.total_balance:0}),S=((u=g.history.find(b=>b.month===k[C]))==null?void 0:u.total_balance)||0,D=((l=g.history.find(b=>b.month===k[p]))==null?void 0:l.total_balance)||0}else if(o==="year"){const k=new Date().getFullYear(),C=k-1;L=g.history.map(p=>p.year.toString()),P=g.history.map(p=>p.total_balance),S=((x=g.history.find(p=>p.year===k))==null?void 0:x.total_balance)||0,D=((w=g.history.find(p=>p.year===C))==null?void 0:w.total_balance)||0}if(r(S),D>0){const A=(S-D)/D*100;f(A.toFixed(2))}else f(S>0?"Infinity":"0");a({labels:L,datasets:[{label:"Ganancias",data:P,fill:!1,backgroundColor:"rgb(128, 231, 148)",borderColor:"rgba(199, 242, 227, 0.2)"}]})}catch(g){console.error("Error fetching data:",g)}};t.useEffect(()=>{N(s)},[s]);const i=n>0,m=i?e.jsx(z,{size:18}):e.jsx(R,{size:18}),j=i?"text-green-300":"text-red-300",h=i?`${n}%`:`${n}%`;return e.jsxs("div",{className:"relative flex max-h-full flex-col items-center rounded-lg bg-gradient-to-t from-teal-900 to-neutral-800 px-4 text-sm text-neutral-50",children:[e.jsx("div",{className:"flex w-full items-center justify-between py-3",children:e.jsx("h1",{className:"my-2 text-lg font-semibold text-green-100",children:"Balance mensual"})}),e.jsx("div",{className:"flex h-full w-full items-start justify-between",children:e.jsx("div",{className:"flex items-center gap-3",children:e.jsxs("div",{className:"flex flex-row justify-between gap-2 text-3xl",children:[e.jsxs("span",{className:"font-bold",children:["$",d.toFixed(2)]}),e.jsx("div",{className:"mb-10 flex items-end gap-3 text-sm font-medium",children:e.jsxs("div",{className:`flex items-center pt-3 ${j}`,children:[m,e.jsx("span",{children:h})]})})]})})}),e.jsx("div",{className:"w-full pb-2",children:e.jsx(te,{data:y,options:v})})]})},fe=()=>{const[s,c]=t.useState([]);return t.useEffect(()=>{(async()=>{try{const r=await X();c(r)}catch(r){console.error("Error fetching top products:",r)}})()},[]),e.jsxs("div",{className:"relative mx-auto flex w-full flex-col items-center rounded-lg bg-neutral-100 px-4 text-sm text-neutral-500 dark:bg-neutral-800 dark:text-neutral-300",children:[e.jsx("div",{className:"flex w-full items-center justify-between border-b border-neutral-200 py-2 dark:border-neutral-700",children:e.jsx("div",{className:"flex items-center gap-3",children:e.jsx("h1",{className:"my-2 text-sm font-semibold",children:"Productos más vendidos"})})}),e.jsx("div",{className:"flex h-full w-full items-start justify-between py-4",children:e.jsx("div",{className:"flex flex-col gap-3 text-xl",children:s.length===0?e.jsx("div",{className:"p-6",children:e.jsx(U,{showSVG:!1,title:"Sin top productos :(",description:"Lo sentimos, no has realizado ninguna venta. Por favor, vuelve más tarde."})}):s.map((d,r)=>{let n="text-gray-500";return r===0?n="text-yellow-400":r===1&&(n="text-amber-600"),e.jsx("div",{className:"flex items-center py-1",children:e.jsxs("div",{className:"flex flex-row justify-between gap-3 text-2xl",children:[e.jsx("div",{className:"flex items-center",children:e.jsx(Y,{className:n})}),e.jsx("div",{className:"mb-1 flex items-end text-xs font-medium",children:e.jsx("div",{className:"flex items-center",children:e.jsx("span",{children:d.product.description})})})]})},d.product.id_product)})})})]})};M.register(ae,se,re,le,ne);const he=()=>{const{theme:s}=t.useContext(K),[c,d]=t.useState(null),[r,n]=t.useState([]),[f,y]=t.useState(!1),[a,v]=t.useState("monthly");t.useEffect(()=>{(async()=>{y(!0);try{const m=await ue();n(m)}catch{d("Error al cargar los registros de kardex")}finally{y(!1)}})()},[]);const N=t.useMemo(()=>{const i=new Date;let m=[],j="short";if(a==="monthly")m=Array.from({length:6},(u,l)=>new Date(i.getFullYear(),i.getMonth()-l,1).toLocaleString("default",{month:j,year:"numeric"})).reverse();else if(a==="yearly")m=Array.from({length:5},(u,l)=>(i.getFullYear()-l).toString()).reverse();else if(a==="weekly"){const u=i.getDate()-i.getDay(),l=new Date(i.setDate(u));m=Array.from({length:4},(x,w)=>{const g=new Date(l);return g.setDate(g.getDate()-w*7),g.toLocaleDateString()}).reverse()}const h={Entrada:{},Salida:{},Ajuste:{}};r.forEach(u=>{const l=new Date(u.createdAt);let x;if(a==="monthly")x=l.toLocaleString("default",{month:j,year:"numeric"});else if(a==="yearly")x=l.getFullYear().toString();else if(a==="weekly"){const g=l.getDate()-l.getDay();x=new Date(l.setDate(g)).toLocaleDateString()}const w=u.movement_type;m.includes(x)&&(h[w][x]||(h[w][x]=0),h[w][x]+=1)});const o={Entrada:s==="dark"?"#80e794":"#cfe5eb",Salida:s==="dark"?"#f87171":"#ffcfcf",Ajuste:s==="dark"?"#e8c85a":"#fad182"};return{labels:m,datasets:Object.keys(h).map(u=>({label:u,data:m.map(l=>h[u][l]||0),backgroundColor:o[u],borderColor:"rgba(0,0,0,0.1)",borderWidth:1,stack:"stack"}))}},[r,a,s]);return f?e.jsx(de,{}):c?e.jsx("p",{className:"text-red-500",children:c}):e.jsxs("div",{className:"h-full w-full",children:[e.jsx("div",{className:"mb-4 flex items-center",children:e.jsx("div",{className:"relative flex items-center text-xs font-medium text-neutral-500 dark:text-neutral-300",children:e.jsxs("div",{className:"flex p-1",children:[e.jsx("button",{onClick:()=>v("monthly"),className:`rounded-lg px-3 py-1 ${a==="monthly"?"bg-neutral-100 text-neutral-600 dark:bg-[#404040] dark:text-neutral-100":"text-neutral-400"}`,children:"Mensual"}),e.jsx("button",{onClick:()=>v("yearly"),className:`rounded-lg px-3 py-1 ${a==="yearly"?"bg-neutral-100 text-neutral-600 dark:bg-[#404040] dark:text-neutral-100":"text-neutral-400"}`,children:"Anual"}),e.jsx("button",{onClick:()=>v("weekly"),className:`rounded-lg px-3 py-1 ${a==="weekly"?"bg-neutral-100 text-neutral-600 dark:bg-[#404040] dark:text-neutral-100":"text-neutral-400"}`,children:"Semanal"})]})})}),e.jsx(oe,{data:N,options:{indexAxis:"y",responsive:!0,plugins:{legend:{display:!1},tooltip:{callbacks:{label:i=>`${i.dataset.label}: ${i.raw}`}}},scales:{x:{stacked:!0,grid:{display:!1},beginAtZero:!0},y:{stacked:!0,grid:{display:!1}}}}})]})},pe=()=>{const{user:s}=q(),{client:c}=ge(),{sale:d,loading:r}=xe(),[n,f]=t.useState(j()),{users:y,loading:a}=H(),{products:v,loading:N}=ce(),i=r||a||N,m=()=>{const o=new Date().getHours();return o<12?"¡Buenos días, ":o<18?"¡Buenas tardes, ":"¡Buenas noches, "};t.useEffect(()=>{const o=setInterval(()=>{f(j())},1e3);return f(j()),()=>clearInterval(o)},[]);function j(){const o=new Date,u=String(o.getHours()).padStart(2,"0"),l=String(o.getMinutes()).padStart(2,"0"),x=String(o.getSeconds()).padStart(2,"0");return`${u}:${l}:${x}`}const h=()=>{const o=new Date().getHours();return o<12?"bg-gradient-to-r from-zinc-900 to-sky-200 text-neutral-50":o<18?"bg-gradient-to-r from-sky-200 to-amber-100 text-neutral-600":"bg-gradient-to-r from-amber-300 to-zinc-900 text-neutral-50"};return e.jsx(e.Fragment,{children:i?e.jsx("div",{className:"flex h-screen items-center justify-center",children:e.jsx(G,{text:"Cargando datos, espera un momento :)"})}):e.jsx("main",{className:"mx-auto max-w-7xl py-20",children:e.jsxs("div",{className:"flex flex-col gap-4 lg:flex-row",children:[e.jsxs("div",{className:"flex w-full flex-col lg:w-3/4",children:[e.jsxs("div",{className:`w-full rounded-lg p-6 ${h()}`,style:{position:"relative"},children:[e.jsx("div",{style:{backgroundImage:"url('https://t3.ftcdn.net/jpg/03/18/13/92/360_F_318139202_s4F1cp8hP5U3YpZmHLjozJHTebmj5Pbo.jpg')",backgroundSize:"cover",backgroundPosition:"center",position:"absolute",top:0,left:0,right:0,bottom:0,opacity:.1,zIndex:0}}),e.jsxs("div",{className:"relative flex w-full items-center justify-between",children:[e.jsxs("h1",{className:"text-2xl font-bold",children:[m()," ",s==null?void 0:s.username]}),e.jsx("span",{className:"text-sm",children:n})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-8 pt-6 md:grid-cols-4 lg:col-span-3",children:[e.jsx(B,{icon:J,title:"Usuarios",count:y.length,backgroundColor:"bg-blue-50 dark:bg-blue-800/30",textcolor:"text-blue-400"}),e.jsx(B,{icon:O,title:"Inventario",count:v.length,backgroundColor:"bg-yellow-50 dark:bg-yellow-800/30",textcolor:"text-yellow-400"}),e.jsx(B,{icon:V,title:"Ventas",count:d.length,backgroundColor:"bg-green-50 dark:bg-green-800/30",textcolor:"text-green-400"}),e.jsx(B,{icon:W,title:"Clientes",count:c.length,backgroundColor:"bg-red-50 dark:bg-red-800/30",textcolor:"text-red-400"})]}),e.jsx("div",{className:"grid w-full grid-cols-1 gap-4 pt-6 text-neutral-500 dark:text-neutral-300 lg:w-full",children:e.jsxs("div",{className:"grid w-full grid-cols-2 gap-8",children:[e.jsxs("div",{className:"rounded-lg border text-sm font-medium dark:border-neutral-700",children:[e.jsxs("div",{className:"flex items-center justify-between rounded-t-lg bg-neutral-50 px-4 dark:bg-neutral-800",children:[e.jsx("h2",{className:"py-2 text-lg",children:"Clientes"}),e.jsx($,{to:"/admin/clientes",className:"rounded-full bg-neutral-100 p-2 transition-colors duration-200 hover:bg-neutral-200 dark:bg-neutral-700/60",children:e.jsx(T,{})})]}),e.jsx("div",{className:"p-4",children:e.jsx(ie,{label:"Clientes",dataKey:"createdAt",initialFilter:"Mensual",fetchData:F,filters:["Mensual","Anual","Semanal"]})})]}),e.jsxs("div",{className:"rounded-lg border text-sm font-medium dark:border-neutral-700",children:[e.jsxs("div",{className:"flex items-center justify-between rounded-t-lg bg-neutral-50 px-4 dark:bg-neutral-800",children:[e.jsx("h2",{className:"py-2 text-lg",children:"Kardex"}),e.jsx($,{to:"/admin/kardex",className:"rounded-full bg-neutral-100 p-2 transition-colors duration-200 hover:bg-neutral-200 dark:bg-neutral-700/60",children:e.jsx(T,{})})]}),e.jsx("div",{className:"p-4",children:e.jsx(he,{})})]})]})})]}),e.jsxs("div",{className:"flex w-full flex-col gap-y-4 lg:w-1/4",children:[e.jsx(me,{}),e.jsx(fe,{})]})]})})})};function De(){return e.jsx(pe,{})}export{De as default};
