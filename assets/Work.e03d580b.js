import{_ as w,B as y,q as k,r as x,o as _,c as m,a as s,t as e,F as S,d as B,b as I,w as N,e as V,p as W,f as C}from"./index.3b3ed9a7.js";import{d as F}from"./index.6f11306a.js";const q={name:"Work",setup(){const t=y(),{works:l}=F(),i=k(()=>{var c;return l[(c=t.params)==null?void 0:c.category]}),o=k(()=>{var c,n;return(n=(c=i.value)==null?void 0:c.collections)==null?void 0:n.find(d=>{var a;return d.id===Number((a=t.params)==null?void 0:a.id)})});return{route:t,works:l,category:i,collection:o}}},D=t=>(W("data-v-0bc2f512"),t=t(),C(),t),E={class:"work-wrap pt-5 mx-auto"},H={class:"row gx-5 pb-4"},L={class:"col-md-6 mb-4 mb-md-0"},R={class:"title-card h-100"},T={class:"title-card-body p-3"},j={class:"title mb-2"},z={class:"subtitle position-relative d-inline-block fs-7"},A={class:"col-md-6"},G={class:"work-content"},J={class:"mb-1 d-block"},K={class:"mb-4"},M={class:"mb-3"},O={class:"mb-1"},P={class:"fs-7"},Q={class:"d-block"},U={class:"image-content pt-4 pt-md-5"},X=["alt"],Y=["src"],Z=D(()=>s("i",{class:"bi bi-arrow-left me-1"},null,-1));function $(t,l,i,o,c,n){var a,h,p,b,u,f,v;const d=x("router-link");return _(),m("div",E,[s("div",H,[s("div",L,[s("div",R,[s("div",T,[s("h3",j,e((a=t.$route.params)==null?void 0:a.category),1),s("h5",z,e((h=o.category)==null?void 0:h.title),1)])])]),s("div",A,[s("div",G,[s("small",J,e((p=o.collection)==null?void 0:p.date),1),s("h4",K,e((b=o.collection)==null?void 0:b.masthead),1),s("div",M,[s("h6",O,e((u=o.collection)==null?void 0:u.title),1),s("p",P,e((f=o.collection)==null?void 0:f.subtitle),1)]),s("small",Q,e((v=o.collection)==null?void 0:v.credit),1)])])]),s("ul",U,[(_(!0),m(S,null,B(o.collection.images,r=>{var g;return _(),m("li",{class:"image-wrap mb-4 mb-md-5",alt:r,key:r},[s("img",{src:`/image/${(g=o.route.params)==null?void 0:g.category}/${r}`,class:"image w-100"},null,8,Y)],8,X)}),128))]),s("div",null,[I(d,{to:{name:"Home"},class:"fs-8"},{default:N(()=>[Z,V("back home ")]),_:1})])])}const ts=w(q,[["render",$],["__scopeId","data-v-0bc2f512"]]);export{ts as default};
