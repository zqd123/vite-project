import{a as d,E as m}from"./el-button-0e7824f8.js";import{a as f,E as h}from"./el-table-column-42626a9d.js";/* empty css                */import{d as b,u as x,c as v,b as o,t as E,g as i,e as t,w as u,o as y,q as k}from"./index-fcbfeaf6.js";import"./event-ed6230bf.js";import"./focus-trap-ba21c8c5.js";const w={class:"flex flex-col justify-center items-center"},g=o("div",null,"感谢您的合作!",-1),C={class:"flex justify-between pb-2"},I={class:"flex items-center gap-2"},N=o("span",{class:"pl-1"},"导出数据",-1),V=b({__name:"endTest",setup(B){const s=x();sessionStorage.removeItem("userName");const p=()=>{console.log("导出数据"),_(`第一个问题分数,第二个问题分数,用时（s）
`,s.checkQuestion)},_=(l,a)=>{for(let e=0;e<a.length;e++){for(const r in a[e])l+=`${a[e][r]+"	"},`;l+=`
`}const c="data:text/csv;charset=utf-8,\uFEFF"+encodeURIComponent(l),n=document.createElement("a");n.href=c,n.download=s.userInfo.studyName??"export.csv",n.click()};return(l,a)=>{const c=m,n=d,e=h,r=f;return y(),v("div",w,[g,o("div",null,[o("div",C,[o("div",I,[o("span",null,"姓名："+E(i(s).userInfo.studyName),1)]),t(n,{type:"primary",onClick:p},{default:u(()=>[t(c,null,{default:u(()=>[t(i(k))]),_:1}),N]),_:1})]),t(r,{data:i(s).checkQuestion,"max-height":"60vh",style:{width:"60vw"},border:!0,center:""},{default:u(()=>[t(e,{prop:"question1",label:"第一个问题分数"}),t(e,{prop:"question2",label:"第二个问题分数"}),t(e,{prop:"secondCount",label:"用时（s）"})]),_:1},8,["data"])])])}}});export{V as default};
