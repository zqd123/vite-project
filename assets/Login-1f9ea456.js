import{E as h,a as v}from"./el-button-0e7824f8.js";import{E as w}from"./el-card-05c45d37.js";import{E as F,a as k}from"./el-form-item-1bff1737.js";import{E as I}from"./el-input-91a9fd05.js";/* empty css                */import{d as R,u as V,r as u,a as i,c as q,e,w as o,o as A,h as B,y as S,j,k as c}from"./index-fcbfeaf6.js";import"./event-ed6230bf.js";const H=R({__name:"Login",setup(z){const p=S(),_=V(),d=u("right"),n=u(),s=i({studyName:""}),f=i({studyName:[{required:!0,message:"请输入姓名",trigger:"blur"}]}),y=async r=>{r&&await r.validate((t,a)=>{t?(sessionStorage.setItem("userName",s.studyName),_.userInfo=s,j.push({path:"/seconde/guidance",query:p.query})):console.log("error submit!",a)})};return(r,t)=>{const a=c("Apple"),l=h,g=I,E=F,b=c("CaretRight"),N=v,x=k,C=w;return A(),q("div",null,[e(C,{class:"w-96 h-72 flex justify-center items-center",shadow:"always"},{default:o(()=>[e(l,{color:"#409EFC",size:50,class:"mb-8"},{default:o(()=>[e(a)]),_:1}),e(x,{ref_key:"ruleFormRef",ref:n,rules:f,"label-position":d.value,model:s},{default:o(()=>[e(E,{label:"姓名",prop:"studyName"},{default:o(()=>[e(g,{modelValue:s.studyName,"onUpdate:modelValue":t[0]||(t[0]=m=>s.studyName=m)},null,8,["modelValue"])]),_:1}),e(N,{type:"primary",size:"default",onClick:t[1]||(t[1]=m=>y(n.value))},{default:o(()=>[e(l,{style:{"margin-right":"8px"}},{default:o(()=>[e(b)]),_:1}),B(" 确认")]),_:1})]),_:1},8,["rules","label-position","model"])]),_:1})])}}});export{H as default};
