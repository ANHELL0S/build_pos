import{bf as s}from"./index-Ql4K0yO-.js";const c=async()=>{try{return(await s.get("/")).data}catch(e){throw new Error(`${e.response.message}`)}},p=async()=>{try{return(await s.get("/top")).data}catch(e){throw new Error(`${e.response.message}`)}},w=async(e,r,t)=>{try{const a=new URLSearchParams;return e&&a.append("period",e),(await s.get(`/balance?${a.toString()}`)).data}catch(a){throw new Error(`${a.response.message}`)}},g=async e=>{try{return(await s.post("/",e)).data}catch(r){throw new Error(`${r.response.data.message}`)}},h=async e=>{try{return(await s.put(`/check/${e}`)).data}catch(r){throw new Error(`${r.response.data.message}`)}};export{w as a,p as b,h as c,g as d,c as g};