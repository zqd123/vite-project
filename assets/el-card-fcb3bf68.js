import{c as n,d as p,e as c,_ as i,w as m}from"./el-button-0f364284.js";import{d,o,l as t,A as r,q as s,I as l,E as u,m as y,J as f,x as h,B as v}from"./index-3d347e0d.js";const w=n({header:{type:String,default:""},bodyStyle:{type:p([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),S=d({name:"ElCard"}),_=d({...S,props:w,setup(b){const a=c("card");return(e,g)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[l(e.$slots,"header",{},()=>[h(v(e.header),1)])],2)):u("v-if",!0),y("div",{class:r(s(a).e("body")),style:f(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var C=i(_,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const B=m(C);export{B as E};
