import{O as Ce,am as Oe,a2 as he,g as Te,ap as Re,z as Q,aq as Ne,a8 as _,n as V,d as we,e as h,I as se,h as De,M as L,r as I,a as $e,t as ze,k as O,o as m,G as g,w as v,b as ee,m as y,A as c,J as ue,s as P,l as ne,N as q,E as R,B as z,ar as j,x as oe,v as te,T as Ve,i as Me,a0 as Se,a1 as Be,ah as de,f as He,K as ce}from"./index-c95841f2.js";import{i as le,K as Ye,n as fe,e as Ae,A as me,g as Ue,a as Ke,r as Xe,c as We,d as pe,_ as Ge,E as Pe,b as qe,B as je,u as Je,T as ve,l as ye,aa as Ze,D as Ee}from"./el-button-37509205.js";import{E as Qe}from"./el-input-fef417f5.js";import{a as Fe,E as xe}from"./focus-trap-7b6b1499.js";import{v as _e}from"./event-959cc03e.js";const en='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',nn=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,be=e=>Array.from(e.querySelectorAll(en)).filter(n=>on(n)&&nn(n)),on=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}};let J;const tn=e=>{var n;if(!le)return 0;if(J!==void 0)return J;const o=document.createElement("div");o.className=`${e}-scrollbar__wrap`,o.style.visibility="hidden",o.style.width="100px",o.style.position="absolute",o.style.top="-9999px",document.body.appendChild(o);const l=o.offsetWidth;o.style.overflow="scroll";const a=document.createElement("div");a.style.width="100%",o.appendChild(a);const s=a.offsetWidth;return(n=o.parentNode)==null||n.removeChild(o),J=l-s,J},sn=e=>["",...Ye].includes(e);var Z=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(Z||{});const an=(e,n,o)=>{let l={offsetX:0,offsetY:0};const a=d=>{const f=d.clientX,t=d.clientY,{offsetX:p,offsetY:T}=l,i=e.value.getBoundingClientRect(),Y=i.left,U=i.top,E=i.width,K=i.height,w=document.documentElement.clientWidth,A=document.documentElement.clientHeight,X=-Y+p,F=-U+T,x=w-Y-E+p,M=A-U-K+T,D=G=>{const S=Math.min(Math.max(p+G.clientX-f,X),x),$=Math.min(Math.max(T+G.clientY-t,F),M);l={offsetX:S,offsetY:$},e.value.style.transform=`translate(${fe(S)}, ${fe($)})`},W=()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",W)},s=()=>{n.value&&e.value&&n.value.addEventListener("mousedown",a)},r=()=>{n.value&&e.value&&n.value.removeEventListener("mousedown",a)};Ce(()=>{Oe(()=>{o.value?s():r()})}),he(()=>{r()})},ln=(e,n={})=>{Te(e)||_e("[useLockscreen]","You need to pass a ref param to this function");const o=n.ns||Ae("popup"),l=Re(()=>o.bm("parent","hidden"));if(!le||me(document.body,l.value))return;let a=0,s=!1,r="0";const d=()=>{setTimeout(()=>{Xe(document==null?void 0:document.body,l.value),s&&document&&(document.body.style.width=r)},200)};Q(e,f=>{if(!f){d();return}s=!me(document.body,l.value),s&&(r=document.body.style.width),a=tn(o.namespace.value);const t=document.documentElement.clientHeight<document.body.scrollHeight,p=Ue(document.body,"overflowY");a>0&&(t||p==="scroll")&&s&&(document.body.style.width=`calc(100% - ${a}px)`),Ke(document.body,l.value)}),Ne(()=>d())},rn=(e,n)=>{let o;Q(()=>e.value,l=>{var a,s;l?(o=document.activeElement,Te(n)&&((s=(a=n.value).focus)==null||s.call(a))):o.focus()})},ke=e=>{if(!e)return{onClick:_,onMousedown:_,onMouseup:_};let n=!1,o=!1;return{onClick:r=>{n&&o&&e(r),n=o=!1},onMousedown:r=>{n=r.target===r.currentTarget},onMouseup:r=>{o=r.target===r.currentTarget}}},ae="_trap-focus-children",B=[],ge=e=>{if(B.length===0)return;const n=B[B.length-1][ae];if(n.length>0&&e.code===Fe.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const o=e.shiftKey,l=e.target===n[0],a=e.target===n[n.length-1];l&&o&&(e.preventDefault(),n[n.length-1].focus()),a&&!o&&(e.preventDefault(),n[0].focus())}},un={beforeMount(e){e[ae]=be(e),B.push(e),B.length<=1&&document.addEventListener("keydown",ge)},updated(e){V(()=>{e[ae]=be(e)})},unmounted(){B.shift(),B.length===0&&document.removeEventListener("keydown",ge)}},dn=We({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:pe([String,Array,Object])},zIndex:{type:pe([String,Number])}}),cn={click:e=>e instanceof MouseEvent},fn="overlay";var mn=we({name:"ElOverlay",props:dn,emits:cn,setup(e,{slots:n,emit:o}){const l=Ae(fn),a=f=>{o("click",f)},{onClick:s,onMousedown:r,onMouseup:d}=ke(e.customMaskEvent?void 0:a);return()=>e.mask?h("div",{class:[l.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:s,onMousedown:r,onMouseup:d},[se(n,"default")],Z.STYLE|Z.CLASS|Z.PROPS,["onClick","onMouseup","onMousedown"]):De("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[se(n,"default")])}});const pn=mn,vn=we({name:"ElMessageBox",directives:{TrapFocus:un},components:{ElButton:Pe,ElFocusTrap:xe,ElInput:Qe,ElOverlay:pn,ElIcon:qe,...je},inheritAttrs:!1,props:{buttonSize:{type:String,validator:sn},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:o,zIndex:l,ns:a,size:s}=Je("message-box",L(()=>e.buttonSize)),{t:r}=o,{nextZIndex:d}=l,f=I(!1),t=$e({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:d()}),p=L(()=>{const u=t.type;return{[a.bm("icon",u)]:u&&ve[u]}}),T=ye(),i=ye(),Y=L(()=>t.icon||ve[t.type]||""),U=L(()=>!!t.message),E=I(),K=I(),w=I(),A=I(),X=I(),F=L(()=>t.confirmButtonClass);Q(()=>t.inputValue,async u=>{await V(),e.boxType==="prompt"&&u!==null&&$()},{immediate:!0}),Q(()=>f.value,u=>{var b,k;u&&(e.boxType!=="prompt"&&(t.autofocus?w.value=(k=(b=X.value)==null?void 0:b.$el)!=null?k:E.value:w.value=E.value),t.zIndex=d()),e.boxType==="prompt"&&(u?V().then(()=>{var ie;A.value&&A.value.$el&&(t.autofocus?w.value=(ie=Le())!=null?ie:E.value:w.value=E.value)}):(t.editorErrorMessage="",t.validateError=!1))});const x=L(()=>e.draggable);an(E,K,x),Ce(async()=>{await V(),e.closeOnHashChange&&window.addEventListener("hashchange",M)}),he(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",M)});function M(){f.value&&(f.value=!1,V(()=>{t.action&&n("action",t.action)}))}const D=()=>{e.closeOnClickModal&&S(t.distinguishCancelAndClose?"close":"cancel")},W=ke(D),G=u=>{if(t.inputType!=="textarea")return u.preventDefault(),S("confirm")},S=u=>{var b;e.boxType==="prompt"&&u==="confirm"&&!$()||(t.action=u,t.beforeClose?(b=t.beforeClose)==null||b.call(t,u,t,M):M())},$=()=>{if(e.boxType==="prompt"){const u=t.inputPattern;if(u&&!u.test(t.inputValue||""))return t.editorErrorMessage=t.inputErrorMessage||r("el.messagebox.error"),t.validateError=!0,!1;const b=t.inputValidator;if(typeof b=="function"){const k=b(t.inputValue);if(k===!1)return t.editorErrorMessage=t.inputErrorMessage||r("el.messagebox.error"),t.validateError=!0,!1;if(typeof k=="string")return t.editorErrorMessage=k,t.validateError=!0,!1}}return t.editorErrorMessage="",t.validateError=!1,!0},Le=()=>{const u=A.value.$refs;return u.input||u.textarea},re=()=>{S("close")},Ie=()=>{e.closeOnPressEscape&&re()};return e.lockScroll&&ln(f),rn(f),{...ze(t),ns:a,overlayEvent:W,visible:f,hasMessage:U,typeClass:p,contentId:T,inputId:i,btnSize:s,iconComponent:Y,confirmButtonClasses:F,rootRef:E,focusStartRef:w,headerRef:K,inputRef:A,confirmRef:X,doClose:M,handleClose:re,onCloseRequested:Ie,handleWrapperClick:D,handleInputEnter:G,handleAction:S,t:r}}}),yn=["aria-label","aria-describedby"],En=["aria-label"],bn=["id"];function gn(e,n,o,l,a,s){const r=O("el-icon"),d=O("close"),f=O("el-input"),t=O("el-button"),p=O("el-focus-trap"),T=O("el-overlay");return m(),g(Ve,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=i=>e.$emit("vanish")),persisted:""},{default:v(()=>[ee(h(T,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:v(()=>[y("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:c(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...i)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...i)),onMousedown:n[9]||(n[9]=(...i)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...i)),onMouseup:n[10]||(n[10]=(...i)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...i))},[h(p,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:v(()=>[y("div",{ref:"rootRef",class:c([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:ue(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=P(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(m(),ne("div",{key:0,ref:"headerRef",class:c(e.ns.e("header"))},[y("div",{class:c(e.ns.e("title"))},[e.iconComponent&&e.center?(m(),g(r,{key:0,class:c([e.ns.e("status"),e.typeClass])},{default:v(()=>[(m(),g(q(e.iconComponent)))]),_:1},8,["class"])):R("v-if",!0),y("span",null,z(e.title),1)],2),e.showClose?(m(),ne("button",{key:0,type:"button",class:c(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=i=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=j(P(i=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[h(r,{class:c(e.ns.e("close"))},{default:v(()=>[h(d)]),_:1},8,["class"])],42,En)):R("v-if",!0)],2)):R("v-if",!0),y("div",{id:e.contentId,class:c(e.ns.e("content"))},[y("div",{class:c(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(m(),g(r,{key:0,class:c([e.ns.e("status"),e.typeClass])},{default:v(()=>[(m(),g(q(e.iconComponent)))]),_:1},8,["class"])):R("v-if",!0),e.hasMessage?(m(),ne("div",{key:1,class:c(e.ns.e("message"))},[se(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(m(),g(q(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(m(),g(q(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:v(()=>[oe(z(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):R("v-if",!0)],2),ee(y("div",{class:c(e.ns.e("input"))},[h(f,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=i=>e.inputValue=i),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:c({invalid:e.validateError}),onKeydown:j(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),y("div",{class:c(e.ns.e("errormsg")),style:ue({visibility:e.editorErrorMessage?"visible":"hidden"})},z(e.editorErrorMessage),7)],2),[[te,e.showInput]])],10,bn),y("div",{class:c(e.ns.e("btns"))},[e.showCancelButton?(m(),g(t,{key:0,loading:e.cancelButtonLoading,class:c([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=i=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=j(P(i=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:v(()=>[oe(z(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):R("v-if",!0),ee(h(t,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:c([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=i=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=j(P(i=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:v(()=>[oe(z(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[te,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,yn)]),_:3},8,["z-index","overlay-class","mask"]),[[te,e.visible]])]),_:3})}var Cn=Ge(vn,[["render",gn],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const H=new Map,hn=e=>{let n=document.body;return e.appendTo&&(Me(e.appendTo)&&(n=document.querySelector(e.appendTo)),Ee(e.appendTo)&&(n=e.appendTo),Ee(n)||(n=document.body)),n},Tn=(e,n,o=null)=>{const l=h(Cn,e,ce(e.message)||Se(e.message)?{default:ce(e.message)?e.message:()=>e.message}:null);return l.appContext=o,Be(l,n),hn(e).appendChild(n.firstElementChild),l.component},wn=()=>document.createElement("div"),Mn=(e,n)=>{const o=wn();e.onVanish=()=>{Be(null,o),H.delete(a)},e.onAction=s=>{const r=H.get(a);let d;e.showInput?d={value:a.inputValue,action:s}:d=s,e.callback?e.callback(d,l.proxy):s==="cancel"||s==="close"?e.distinguishCancelAndClose&&s!=="cancel"?r.reject("close"):r.reject("cancel"):r.resolve(d)};const l=Tn(e,o,n),a=l.proxy;for(const s in e)de(e,s)&&!de(a.$props,s)&&(a[s]=e[s]);return a.visible=!0,a};function N(e,n=null){if(!le)return Promise.reject();let o;return Me(e)||Se(e)?e={message:e}:o=e.callback,new Promise((l,a)=>{const s=Mn(e,n??N._context);H.set(s,{options:e,callback:o,resolve:l,reject:a})})}const Sn=["alert","confirm","prompt"],Bn={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};Sn.forEach(e=>{N[e]=An(e)});function An(e){return(n,o,l,a)=>{let s="";return He(o)?(l=o,s=""):Ze(o)?s="":s=o,N(Object.assign({title:s,message:n,type:"",...Bn[e]},l,{boxType:e}),a)}}N.close=()=>{H.forEach((e,n)=>{n.doClose()}),H.clear()};N._context=null;const C=N;C.install=e=>{C._context=e._context,e.config.globalProperties.$msgbox=C,e.config.globalProperties.$messageBox=C,e.config.globalProperties.$alert=C.alert,e.config.globalProperties.$confirm=C.confirm,e.config.globalProperties.$prompt=C.prompt};const Nn=C;export{pn as E,ln as a,ke as b,Nn as c,an as u};