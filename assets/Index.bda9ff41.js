import{_,r as i,o as s,c as a,a as t,b as r,w as d,F as v,d as g,e as x,t as w,p as l,f as p}from"./index.23fd69b2.js";const b="/assets/logo.0df452dd.png";const $={name:"Navbar",data(){return{menuList:[{id:"about",name:"about"},{id:"work",name:"work"},{id:"contact",name:"contact"}]}},mounted(){window.addEventListener("scroll",this.changeMenuHeight)},beforeUnmount(){window.removeEventListener("scroll",this.changeMenuHeight)},methods:{changeMenuHeight(){window.innerWidth<768||(window.scrollY>=50?(this.$refs.navbar.style.height="60px",this.$refs.logo.style.height="60px"):(this.$refs.navbar.style.height="90px",this.$refs.logo.style.height="90px"))}}},y=e=>(l("data-v-97f7328d"),e=e(),p(),e),k={class:"navbar fixed-top px-3 bg-white",ref:"navbar"},I={class:"navbar-content d-flex align-items-center justify-content-between w-100 h-100 mx-auto"},N={class:"logo px-md-3",ref:"logo"},T=y(()=>t("img",{src:b},null,-1)),H={class:"menu"};function L(e,h,u,m,c,f){const n=i("router-link");return s(),a("nav",k,[t("div",I,[t("h1",N,[r(n,{to:{name:"Home"},title:"freestylestudio"},{default:d(()=>[T]),_:1})],512),t("ul",H,[(s(!0),a(v,null,g(c.menuList,o=>(s(),a("li",{class:"px-3",key:o.id},[r(n,{to:{name:"Home",hash:`#${o.id}`},class:"menu-item position-relative fw-bold text-decoration-none py-2"},{default:d(()=>[x(w(o.name),1)]),_:2},1032,["to"])]))),128))])])],512)}const S=_($,[["render",L],["__scopeId","data-v-97f7328d"]]);const B={name:"Template",components:{TheNavbar:S}},C=e=>(l("data-v-91e45f5a"),e=e(),p(),e),E={id:"main-container",class:"main-container"},M={class:"content"},V=C(()=>t("div",{class:"footer text-center border-top border-dark py-4 py-md-5"},[t("small",null,"Copyright \xA9 daniel 2023, All rights reserved.")],-1));function F(e,h,u,m,c,f){const n=i("TheNavbar"),o=i("router-view");return s(),a("div",E,[r(n),t("div",M,[r(o)]),V])}const A=_(B,[["render",F],["__scopeId","data-v-91e45f5a"]]);export{A as default};
