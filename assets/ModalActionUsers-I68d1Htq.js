import{r as o,j as e,A as x,m as i,B as p,a4 as b}from"./index-Ql4K0yO-.js";const j=({text:t,loading:s,onClose:l,onSubmit:d,styles:n})=>{const[c,a]=o.useState(!1);o.useEffect(()=>{a(!0)},[]);const r={hidden:{opacity:0,backdropFilter:"blur(0px)"},visible:{opacity:1,backdropFilter:"blur(2px)",transition:{duration:.2}}},m={hidden:{opacity:0,scale:.9,transition:{duration:.2,ease:"easeOut"}},visible:{opacity:1,scale:1,transition:{duration:.2,type:"spring",stiffness:600,damping:30}}};return e.jsx(x,{children:c&&e.jsxs(i.div,{className:"fixed inset-0 z-50 flex items-center justify-center overflow-auto",initial:"hidden",animate:"visible",exit:"hidden",variants:r,children:[e.jsx(i.div,{className:"absolute inset-0 bg-neutral-50/50 dark:bg-neutral-900/50",variants:r}),e.jsx(i.div,{className:"relative flex w-full max-w-md flex-col items-end justify-center p-4 text-center sm:block sm:p-0",variants:m,onClick:u=>u.stopPropagation(),children:e.jsxs("div",{className:"transform space-y-4 rounded-lg border bg-white p-4 text-left align-bottom text-neutral-500 shadow-lg transition-all dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 sm:inline-block sm:w-full sm:max-w-md sm:align-middle",children:[e.jsx("div",{className:"flex flex-row items-center font-medium text-neutral-600",children:e.jsx("span",{className:`${n.text} text-lg`,children:t.title})}),e.jsxs("p",{className:"text-sm",children:[t.description_a," ",e.jsx("strong",{children:t.description_b})," ",t.description_c]}),e.jsxs("div",{className:"flex justify-end gap-4 text-xs",children:[!s&&e.jsx(p,{onClick:()=>{a(!1),setTimeout(l,300)},type:"button",variant:"outline",size:"md",children:t.buttonCancel}),e.jsx("button",{type:"button",onClick:d,disabled:s,className:`inline-flex justify-center rounded-md px-4 ${n.buttonSubmit} items-center font-semibold text-neutral-50 transition-colors duration-200 ${n.hoverButtonSubmit} focus:outline-none sm:mt-0 ${s?"cursor-not-allowed":""}`,children:s?e.jsx(b,{loadingText:"Procesando..."}):t.buttonSubmit})]})]})})]})})};export{j as M};