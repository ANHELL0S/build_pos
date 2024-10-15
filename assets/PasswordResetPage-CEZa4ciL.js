import{b1 as w,b2 as g,r as p,j as e,b3 as f,B as P,T as j,b4 as h,w as l}from"./index-D8Kk0eQ9.js";import{z as n,u as y,C as m,t as N}from"./index-B3hE7uB9.js";const v=n.object({newPassword:n.string().min(8,{message:"La contraseña debe tener al menos 8 caracteres"}).regex(/[A-Z]/,{message:"La contraseña debe contener al menos una letra mayúscula"}).regex(/[0-9]/,{message:"La contraseña debe contener al menos un número"}).regex(/[\W_]/,{message:"La contraseña debe contener al menos un carácter especial"}),confirmPassword:n.string().min(8,{message:"La contraseña debe tener al menos 8 caracteres"}).regex(/[A-Z]/,{message:"La contraseña debe contener al menos una letra mayúscula"}).regex(/[0-9]/,{message:"La contraseña debe contener al menos un número"}).regex(/[\W_]/,{message:"La contraseña debe contener al menos un carácter especial"})}),k=()=>{const i=w(),{token:t}=g(),{handleSubmit:u,control:o,formState:{errors:s}}=y({resolver:N(v),defaultValues:{newPassword:"",confirmPassword:""}}),[d,c]=p.useState(!1),x=JSON.parse(atob(t.split(".")[1])).id,b=async a=>{c(!0);try{const r=await h(x,t,a.newPassword,a.confirmPassword);l({type:"success",message:r.message}),i("/")}catch(r){l({type:"error",message:r.message})}finally{c(!1)}};return e.jsxs("div",{className:"password-reset-page flex h-screen items-center justify-center bg-neutral-50 dark:bg-neutral-900",children:[e.jsxs("div",{className:"w-full max-w-md p-4 text-neutral-600 dark:text-neutral-300",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"rounded-lg border border-neutral-200 p-2",children:e.jsx(f,{size:24})}),e.jsx("h2",{className:"text-xl font-semibold",children:"Restablecer contraseña"})]}),e.jsxs("form",{onSubmit:u(b),className:"mt-5 space-y-5 text-sm",children:[e.jsxs("div",{className:"",children:[e.jsx("label",{htmlFor:"newPassword",className:`block pb-2 font-medium ${s.newPassword?"text-red-600":""}`,children:"Contraseña"}),e.jsx(m,{name:"newPassword",control:o,render:({field:a})=>e.jsx("input",{...a,id:"newPassword",type:"text",className:`w-full rounded-lg border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-800 ${s.newPassword?"border-red-500":"border-neutral-200"}`,placeholder:"Digita tu nueva contraseña"})}),s.newPassword&&e.jsx("span",{className:"text-xs text-red-400",children:s.newPassword.message})]}),e.jsxs("div",{className:"",children:[e.jsx("label",{htmlFor:"confirmPassword",className:`block pb-2 font-medium ${s.confirmPassword?"text-red-600":"text-neutral-500"}`,children:"Confirmar contraseña"}),e.jsx(m,{name:"confirmPassword",control:o,render:({field:a})=>e.jsx("input",{...a,id:"confirmPassword",type:"text",className:`w-full rounded-lg border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-800 ${s.confirmPassword?"border-red-500":"border-neutral-200"}`,placeholder:"Confirma tu nueva contraseña"})}),s.confirmPassword&&e.jsx("span",{className:"text-xs text-red-400",children:s.confirmPassword.message})]}),e.jsx(P,{variant:"primary",type:"submit",size:"full",loading:d,children:d?"Restableciendo...":"Restablecer contraseña"})]})]}),e.jsx(j,{richColors:!0,expand:!0})]})},S=()=>e.jsx(k,{});export{S as default};
