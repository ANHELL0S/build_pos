const f=(r,t,s)=>{const o=t.trim().toLowerCase();return r.filter(a=>s.some(n=>{const e=a[n];return typeof e=="string"?e.toLowerCase().includes(o):!1}))};export{f};
