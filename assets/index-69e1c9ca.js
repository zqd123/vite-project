import{m as g,o as r,c as _,P as m,F as f,a7 as h,s as v,a6 as x,d as u,a as b,a8 as k}from"./index-eccaa2c0.js";const w=""+new URL("small1_1-77fe9995.png",import.meta.url).href,I=""+new URL("small1_1-77fe9995.png",import.meta.url).href,L=""+new URL("small1_1-77fe9995.png",import.meta.url).href,R=""+new URL("small1_1-77fe9995.png",import.meta.url).href,U=""+new URL("small1_1-77fe9995.png",import.meta.url).href,C=""+new URL("small1_1-77fe9995.png",import.meta.url).href,$=""+new URL("small1_1-77fe9995.png",import.meta.url).href,y=""+new URL("small1_1-77fe9995.png",import.meta.url).href,H=""+new URL("small1_1-77fe9995.png",import.meta.url).href,j=""+new URL("small1_1-77fe9995.png",import.meta.url).href,A=""+new URL("small1_1-77fe9995.png",import.meta.url).href,B=""+new URL("small1_1-77fe9995.png",import.meta.url).href,F={class:"flex flex-wrap gap-2"},V=["onClick"],z=["src"],Q=g({__name:"InformationSelect",props:{testItem:null},emits:["checkClickHandle"],setup(s,{emit:n}){const a=t=>{n("checkClickHandle")},e=t=>new URL(Object.assign({"../../assets/seconde-test/small1_1.png":w,"../../assets/seconde-test/small1_2.png":I,"../../assets/seconde-test/small1_3.png":L,"../../assets/seconde-test/small1_4.png":R,"../../assets/seconde-test/small2_1.png":U,"../../assets/seconde-test/small2_2.png":C,"../../assets/seconde-test/small2_3.png":$,"../../assets/seconde-test/small2_4.png":y,"../../assets/seconde-test/small3_1.png":H,"../../assets/seconde-test/small3_2.png":j,"../../assets/seconde-test/small3_3.png":A,"../../assets/seconde-test/small3_4.png":B})[`../../assets/seconde-test/${t}`],self.location).href;return(t,o)=>(r(),_("div",null,[m("div",F,[(r(!0),_(f,null,h(s.testItem.children,l=>(r(),_("div",{key:l.url,class:v(["w-40 h-36 p-2 bg-white flex justify-center items-center border-4 rounded-xl overflow-hidden",l.selectedColor]),onClick:i=>a()},[m("img",{src:e(l.url+".png")},null,8,z)],10,V))),128))])]))}}),p=({type:s="small",sum:n=4}={})=>{const a=[];for(let e=1;e<=3;e++){const t={url:`${s}${e}`},o=[];for(let l=1;l<=n;l++){const i={url:`${s}${e}_${l}`};o.push(i)}t.children=o,a.push(t)}return console.log("🚀 ~ file: allImage.ts:25 ~ createImage ~ testArr:",a),a},d=p({type:"small"}),S=p({type:"medium"}),q=p({type:"large"});var c=(s=>(s.small="small",s.medium="medium",s.large="large",s))(c||{});const G=m("div",{class:"text-left"},[m("div",null,"请选择你认为最合适的一项课程")],-1),K=g({__name:"index",props:{type:{default:c.small},second:{default:10}},setup(s){const n=s;console.log("🚀 ~ file: index.vue:11 ~ props ~ props:",n);const a=x(),e=u(0),t=u(d[0]),o=l=>{if(e.value>=2){k.push({path:"/seconde/endTest"});return}a.checkQuestion.push({checkIndex:l}),e.value+=1,t.value=n.type===c.small?d[e.value]:n.type===c.medium?S[e.value]:q[e.value],console.log("🚀 ~ file: index.vue:29 ~ checkClickHandle ~ currentItem.value:",t.value)};return(l,i)=>(r(),_("div",null,[G,b(Q,{"test-item":t.value,"test-index":e.value,onCheckClickHandle:o},null,8,["test-item","test-index"])]))}});export{K as default};
