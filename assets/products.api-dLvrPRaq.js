import{bh as s}from"./index-BGmw5ODN.js";const o=async(r,e)=>{try{return(await s.get("/search-product",{params:{value:r,type:e}})).data}catch(t){throw new Error(`${t.response.message}`)}},n=async()=>{try{return(await s.get("/")).data}catch(r){throw new Error(`${r.response.message}`)}},c=async r=>{try{return(await s.post("/uploadXML",r)).data}catch(e){throw new Error(`${e.response.data.message}`)}},p=async r=>{try{return(await s.post("/upload-code-bar",r)).data}catch(e){throw new Error(`${e.response.data.message}`)}},u=async(r,e)=>{try{return(await s.put(`/update/${r}`,e)).data}catch(t){throw new Error(`${t.response.data.message}`)}},d=async r=>{try{return(await s.put(`/desactive/${r}`)).data}catch(e){throw new Error(`${e.response.data.message}`)}},w=async r=>{try{return(await s.put(`/active/${r}`)).data}catch(e){throw new Error(`${e.response.data.message}`)}},h=async r=>{try{return(await s.delete(`/${r}`)).data}catch(e){throw new Error(`${e.response.data.message}`)}};export{w as a,h as b,p as c,d,u as e,n as g,o as s,c as u};
