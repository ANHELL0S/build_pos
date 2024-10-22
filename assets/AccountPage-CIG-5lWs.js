import{Y as f,d as M,Z as z,r as m,_ as k,j as e,S as B,N,$ as Z,a0 as S,B as u,a1 as R,z as g}from"./index-BGmw5ODN.js";import{z as t,u as _,t as A}from"./index-8t8Zfzji.js";import{I as d}from"./InputFieldZod-D6oeOvBj.js";const D=async r=>{try{return(await f.get(`/${r}`)).data}catch(a){throw new Error(`${a.response.data.message}`)}},F=async(r,a)=>{try{return(await f.put(`/changeInformation/${r}`,a)).data}catch(s){throw new Error(`${s.response.data.message}`)}},G=async(r,a)=>{try{return(await f.put(`/changePassword/${r}`,a)).data}catch(s){throw new Error(`${s.response.data.message}`)}},V=t.object({username:t.string({required_error:"Nombre de usuario es requerido."}).min(6,"Mínimo 6 caracteres").max(200,"Máximo 200 caracteres"),email:t.string({required_error:"Email es requerido."}).email("Correo electrónico no válido"),phone:t.string({required_error:"Número de celular es requerido."}).min(10,"Mínimo 10 caracteres").max(10,"Máximo 10 caracteres"),residence:t.string({required_error:"Residencia es requerida."}).min(5,"Mínimo 5 caracteres").max(100,"Máximo 100 caracteres")}),U=t.object({newPassword:t.string({required_error:"Contraseña es requerida."}).min(8,"Mínimo 8 caracteres").max(20,"Máximo 20 caracteres").regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&.,;_\-/*]+$/,{message:"La contraseña debe contener al menos una letra mayúscula, un número y un carácter especial."}),confirmPassword:t.string().min(8,"Mínimo 8 caracteres").max(20,"Máximo 20 caracteres").regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&.,;_\-/*]+$/,{message:"La contraseña debe contener al menos una letra mayúscula, un número y un carácter especial."})}).refine(r=>r.newPassword===r.confirmPassword,{message:"Las contraseñas deben ser iguales",path:["confirmPassword"]}),T=()=>{M();const{userData:r}=z(),[a,s]=m.useState(null);k();const[c,h]=m.useState("Cuenta"),n=async()=>{if(r&&r.id_user)try{const i=await D(r.id_user);s(i)}catch(i){console.error("Error fetching account data: ",i)}};m.useEffect(()=>{n()},[r]);const x=()=>{switch(c){case"Cuenta":return a?e.jsx(Y,{account:a,fetchAccount:n}):e.jsx("div",{className:"flex h-screen items-center justify-center",children:e.jsx(B,{text:"Cargando datos de la cuenta, espera un momento :)"})});default:return null}};return e.jsx(e.Fragment,{children:e.jsx("main",{className:"mx-auto max-w-7xl py-20",children:e.jsx("div",{className:"flex flex-col gap-4 lg:flex-col",children:e.jsx("div",{className:"flex w-full flex-col",children:x()})})})})},Y=({account:r,fetchAccount:a})=>{const s={email:r.email||"",phone:r.phone||"",username:r.username||"",residence:r.residence||""},{register:c,handleSubmit:h,formState:{errors:n},reset:x}=_({resolver:A(V),defaultValues:s}),[i,p]=m.useState(""),{register:w,handleSubmit:I,formState:{errors:y},reset:j}=_({resolver:A(U),defaultValues:{newPassword:"",confirmPassword:""}}),[b,P]=m.useState(!1),L=async l=>{P(!0);try{const o=await F(r.id_user,l);g({type:"success",message:o.message}),await a()}catch(o){g({type:"error",message:o.message})}finally{P(!1)}},[v,C]=m.useState(!1),q=async l=>{C(!0);try{const o=await G(r.id_user,{currentPassword:i,newPassword:l.newPassword,confirmPassword:l.confirmPassword});g({type:"success",message:o.message}),j(),p("")}catch(o){g({type:"error",message:o.message})}finally{C(!1)}},$=["Asegúrate de cambiar tus datos personales con la información correcta."],E=["La nueva contraseña debe contener una letra mayúscula, un número y un carácter especial.","La nueva contraseña debe contener una letra mayúscula, un número y un carácter especial.","Longitud minimo de la contraseña es de 8 caracteres.","Longitud maxima de la contraseña es de 20 caracteres."];return e.jsx("div",{className:"text-md text-neutral-600 dark:text-neutral-300",children:e.jsxs("div",{className:"grid transform grid-cols-1 gap-8 py-4 text-left align-bottom transition-all md:grid-cols-2 lg:grid-cols-2",children:[e.jsxs("form",{onSubmit:h(L),className:"flex flex-col gap-y-6 text-sm",children:[e.jsx(N,{Icon:Z,text:"Datos personales"}),e.jsx(S,{title:"Información",messages:$,variant:"info"}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-4 gap-y-3 text-xs font-medium",children:[e.jsx(d,{type:"text",error:n.username,label:"Nombres completos",register:c("username"),placeholder:"Angelo David García Arteaga"}),e.jsx(d,{type:"email",error:n.email,label:"Correo electrónico",register:c("email"),placeholder:"angelo@gmail.com"}),e.jsx(d,{label:"Celular",error:n.phone,placeholder:"0980868530",register:c("phone")}),e.jsx(d,{label:"Dirección",placeholder:"Esmeraldas, La Concordia",register:c("residence"),error:n.residence})]}),e.jsxs("div",{className:"flex items-end justify-end gap-2",children:[e.jsx(u,{onClick:()=>x(s),variant:"outline",size:"md",children:"Cancelar"}),e.jsx(u,{variant:"primary",type:"submit",size:"md",loading:b,children:b?"Guardando...":"Guardar cambios"})]})]}),e.jsxs("form",{onSubmit:I(q),className:"flex flex-col gap-y-6 text-sm",children:[e.jsx(N,{Icon:R,text:"Seguridad"}),e.jsx(S,{title:"Información",messages:E,variant:"info"}),e.jsxs("div",{className:"grid grid-cols-1 gap-x-4 gap-y-5 text-xs font-medium",children:[e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsxs("div",{className:"flex gap-x-2",children:[e.jsx("label",{className:"",children:"Contraseña actual"}),e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{name:"currentPassword",value:i,onChange:l=>p(l.target.value),className:"rounded-md border border-neutral-300 p-2 font-medium text-neutral-700 outline-none placeholder:text-neutral-400 dark:border-neutral-700 dark:bg-neutral-800",placeholder:"Contraseña actual"})]}),e.jsxs("div",{className:"flex justify-between gap-6",children:[e.jsx(d,{label:"Nueva contraseña",placeholder:"Nueva contraseña",register:w("newPassword"),error:y.newPassword}),e.jsx(d,{label:"Confirmar nueva contraseña",placeholder:"Confirmar nueva contraseña",register:w("confirmPassword"),error:y.confirmPassword})]})]}),e.jsxs("div",{className:"flex items-end justify-end gap-2",children:[e.jsx(u,{onClick:()=>{j(),p("")},variant:"outline",size:"md",children:"Cancelar"}),e.jsx(u,{variant:"primary",type:"submit",size:"md",loading:v,children:v?"Cambiando...":"Cambiar contraseña"})]})]})]})})};function O(){return e.jsx(T,{})}export{O as default};
