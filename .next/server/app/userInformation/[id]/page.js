(()=>{var e={};e.id=521,e.ids=[521],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},20651:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>c,routeModule:()=>x,tree:()=>d});var n=s(50482),r=s(69108),a=s(62563),i=s.n(a),l=s(68300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let d=["",{children:["userInformation",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,97495)),"/Users/jomingu/Desktop/personal-projects/next/next-ec2/src/app/userInformation/[id]/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,81460)),"/Users/jomingu/Desktop/personal-projects/next/next-ec2/src/app/userInformation/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,12010)),"/Users/jomingu/Desktop/personal-projects/next/next-ec2/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/jomingu/Desktop/personal-projects/next/next-ec2/src/app/userInformation/[id]/page.tsx"],p="/userInformation/[id]/page",m={require:s,loadChunk:()=>Promise.resolve()},x=new n.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/userInformation/[id]/page",pathname:"/userInformation/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},33224:(e,t,s)=>{Promise.resolve().then(s.bind(s,12086))},35303:()=>{},12086:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var n=s(95344),r=s(89410),a=s(3729),i=s(60100),l=s.n(i);let o=[{name:"user1",permissions:"user",account:"user1@gmail.com",signup:"2023-12-12",loginRecent:"2023-12-15",usage:100,logs:[{model:"model1",name:"model1-log1",usage:13},{model:"model1",name:"model1-log2",usage:16},{model:"model1",name:"model1-log3",usage:21},{model:"model1",name:"model1-log4",usage:20},{model:"model1",name:"model1-log5",usage:3},{model:"model1",name:"model1-log6",usage:15},{model:"model1",name:"model1-log7",usage:12}]}],d=[{name:"user"},{name:"admin"}];function c({params:e}){let[t,s]=(0,a.useState)("user"),[i,c]=(0,a.useState)();return(0,a.useEffect)(()=>{let t=o.filter(t=>t.name===e.id);void 0!==t&&c(t[0])},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"card",children:[(0,n.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[(0,n.jsxs)("div",{style:{width:"40%",textAlign:"center",paddingRight:"10px"},children:[n.jsx(r.default,{width:"300",height:"300",priority:!0,src:"/logo.png",alt:"image"}),n.jsx("h4",{style:{marginTop:"20px"},children:e.id})]}),(0,n.jsxs)("div",{style:{width:"60%",textAlign:"center",paddingLeft:"10px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[n.jsx("div",{style:{width:"100%",textAlign:"start"},children:n.jsx("select",{onChange:e=>{s(e.target.value)},value:t,children:d.map(e=>n.jsx("option",{value:e.name,children:e.name},e.name))})}),(0,n.jsxs)("div",{style:{width:"100%",textAlign:"start",marginTop:"20px"},children:[n.jsx("h4",{style:{marginBottom:"20px"},children:"유저정보"}),(0,n.jsxs)("div",{style:{paddingBlock:"10px"},children:[n.jsx("h4",{style:{marginBlock:"10px"},children:"계정"}),n.jsx("p",{children:i?.account})]}),(0,n.jsxs)("div",{style:{paddingBlock:"10px"},children:[n.jsx("h4",{style:{marginBlock:"10px"},children:"가입일"}),n.jsx("p",{children:i?.signup})]}),(0,n.jsxs)("div",{style:{paddingBlock:"10px"},children:[n.jsx("h4",{style:{marginBlock:"10px"},children:"최근 로그인"}),n.jsx("p",{children:i?.loginRecent})]})]})]})]}),(0,n.jsxs)("div",{children:[n.jsx("button",{children:"완료"}),n.jsx("button",{children:"뒤로가기"})]})]}),(0,n.jsxs)("div",{className:"card",style:{marginTop:"20px"},children:[n.jsx("div",{style:{width:"100%",paddingBlock:"10px"},children:(0,n.jsxs)("h4",{children:["총사용량 : ",i?.usage]})}),n.jsx("div",{style:{width:"100%"},children:(0,n.jsxs)("table",{style:{width:"100%",marginTop:"20px"},children:[n.jsx("thead",{children:(0,n.jsxs)("tr",{children:[n.jsx("th",{className:l().tableHeader,children:"로그명"}),n.jsx("th",{className:l().tableHeader,children:"사용장비"}),n.jsx("th",{className:l().tableHeader,children:"사용량"})]})}),n.jsx("tbody",{children:i?.logs.map(e=>n.jsxs("tr",{children:[n.jsx("td",{className:l().tableItem,children:e.name}),n.jsx("td",{className:l().tableItem,children:e.model}),n.jsx("td",{className:l().tableItem,children:e.usage})]},e.model))})]})})]})]})}},60100:e=>{e.exports={table:"page_table__85Tzf",tableItem:"page_tableItem__4IYFj",tableHeader:"page_tableHeader__7vdXP"}},97495:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>a,__esModule:()=>r,default:()=>i});let n=(0,s(86843).createProxy)(String.raw`/Users/jomingu/Desktop/personal-projects/next/next-ec2/src/app/userInformation/[id]/page.tsx`),{__esModule:r,$$typeof:a}=n,i=n.default},81460:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var n=s(25036);function r({children:e}){return(0,n.jsxs)("div",{className:"mainContents",children:[n.jsx("div",{className:"page-title-container",children:n.jsx("h3",{className:"page-title",children:"USER INFORMATION"})}),e]})}},73881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var n=s(70337);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),n=t.X(0,[638,268,337,852],()=>s(20651));module.exports=n})();