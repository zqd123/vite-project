import{h as n,k as c,l as d,n as p,o,c as t,B as r,C as s,D as l,A as i,E as u,P as y,Q as m,W as h,O as f,S as v}from"./index-e3a3dfb5.js";const S=n({header:{type:String,default:""},bodyStyle:{type:c([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),C=d({name:"ElCard"}),w=d({...C,props:S,setup(b){const a=p("card");return(e,k)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[l(e.$slots,"header",{},()=>[h(f(e.header),1)])],2)):i("v-if",!0),u("div",{class:r(s(a).e("body")),style:y(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var _=m(w,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const E=v(_);export{E};
