(()=>{var e={};e.id=148,e.ids=[148],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},20331:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>d,originalPathname:()=>h,pages:()=>p,routeModule:()=>m,tree:()=>c});var a=r(50482),s=r(69108),n=r(62563),i=r.n(n),l=r(68300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let c=["",{children:["observation",{children:["carrier",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,84660)),"/Users/jomingu/Desktop/personal-projects/next/next-ec2/src/app/observation/carrier/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,54061)),"/Users/jomingu/Desktop/personal-projects/next/next-ec2/src/app/observation/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,12010)),"/Users/jomingu/Desktop/personal-projects/next/next-ec2/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/Users/jomingu/Desktop/personal-projects/next/next-ec2/src/app/observation/carrier/page.tsx"],h="/observation/carrier/page",d={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/observation/carrier/page",pathname:"/observation/carrier",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},86619:(e,t,r)=>{Promise.resolve().then(r.bind(r,22532))},52571:(e,t,r)=>{Promise.resolve().then(r.bind(r,59593))},11067:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var a=r(95344),s=r(3729),n=r(43822),i=r(10707),l=r(49733);function o({mount:e,setMount:t}){let[r,o]=(0,s.useState)(!1);(0,s.useEffect)(()=>{o(!0)},[]);let c=n.S.map(e=>({value:e.name,label:e.name}));return a.jsx(a.Fragment,{children:r&&a.jsx(i.Z,{wrap:!0,children:a.jsx(l.Z,{defaultValue:e,style:{width:120},onChange:e=>{t(e)},options:c})})})}},22532:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var a=r(95344),s=r(56506),n=r(21226),i=r.n(n),l=r(8428),o=r(11067),c=r(3729);let p=[{href:"/pseudo",name:"Pseudo Range"},{href:"/carrier",name:"Carrier Phase"},{href:"/doppler",name:"Doppler"},{href:"/snr",name:"SNR"}];function h(){let[e,t]=(0,c.useState)("PPHQ"),r=(0,l.usePathname)(),n=r.match(/\/([^\/]+)\/([^\/]+)/)||r.match(/\/([^\/]+)/);if(null!==n)return(0,a.jsxs)("nav",{className:i().navBar,children:[a.jsx("div",{children:p.map(e=>{let t=`/${n[2]}`===e.href;return a.jsx(s.default,{className:`${t?"focus":""} ${i().observationNav}`,href:`./${e.href}`,children:e.name},e.name)})}),a.jsx("div",{children:a.jsx(o.Z,{mount:e,setMount:t})})]})}},59593:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var a=r(95344),s=r(85401),n=r(3729);function i({header:e}){let[t,r]=(0,n.useState)(!1),i=e.tableHeader.map(e=>({title:e,dataIndex:e,sorter:(e,t)=>e.localeCompare(t)}));return(0,n.useEffect)(()=>{r(!0)},[]),a.jsx("div",{children:t&&a.jsx(s.Z,{columns:i})})}},43822:(e,t,r)=>{"use strict";r.d(t,{S:()=>a});let a=[{key:1,name:"PPGS",lat:38.380283,lng:128.46289,height:47.5,sats:20,ref:479,proc:!0},{key:2,name:"PPHC",lat:38.11019,lng:127.708374,height:144.85,sats:20,ref:0,proc:!0},{key:3,name:"PPCH",lat:37.890724,lng:127.20038,height:134.17,sats:20,ref:0,proc:!0},{key:4,name:"PPGH",lat:37.744648,lng:126.48978,height:47.86,sats:20,ref:574,proc:!0},{key:5,name:"PPHQ",lat:37.480293,lng:126.87716,height:162.44,sats:20,ref:43,proc:!0},{key:6,name:"PPHS",lat:37.201168,lng:126.82893,height:84.73,sats:20,ref:0,proc:!0},{key:7,name:"PPYJ",lat:37.291412,lng:127.64091,height:93.08,sats:20,ref:1,proc:!0},{key:8,name:"PPYC",lat:37.368782,lng:128.39276,height:330.74,sats:20,ref:0,proc:!0},{key:9,name:"PPGR",lat:37.786213,lng:128.87294,height:53.92,sats:20,ref:953,proc:!0},{key:10,name:"PPWJ",lat:36.99282,lng:129.40451,height:49.61,sats:20,ref:953,proc:!0},{key:11,name:"PPYD",lat:36.412445,lng:129.3719,height:55.53,sats:20,ref:992,proc:!0},{key:12,name:"PPGW",lat:36.23724,lng:128.56776,height:126,sats:20,ref:953,proc:!0},{key:13,name:"PPBU",lat:36.48862,lng:127.71543,height:195.34,sats:20,ref:953,proc:!0},{key:14,name:"PPDJ",lat:36.399426,lng:127.37449,height:116.84,sats:20,ref:363,proc:!0},{key:15,name:"PPSC",lat:36.079365,lng:126.69124,height:47.98,sats:20,ref:953,proc:!0},{key:16,name:"PPBY",lat:35.569263,lng:129.34482,height:59.32,sats:20,ref:0,proc:!0},{key:17,name:"PPHP",lat:35.565907,lng:128.16762,height:73.51,sats:20,ref:953,proc:!0},{key:18,name:"PPIS",lat:35.619167,lng:127.29275,height:264.76,sats:20,ref:953,proc:!0},{key:19,name:"PPNJ",lat:35.022873,lng:126.71378,height:71.45,sats:20,ref:333,proc:!0},{key:20,name:"PPHD",lat:35.06457,lng:127.74829,height:45.45,sats:20,ref:953,proc:!0},{key:21,name:"PPGJ",lat:34.88514,lng:128.6207,height:59.84,sats:20,ref:953,proc:!0},{key:22,name:"PPJD",lat:34.426258,lng:126.16266,height:44.08,sats:20,ref:0,proc:!0},{key:23,name:"PPWS",lat:35.574806,lng:129.30885,height:219.05,sats:15,ref:344,proc:!0},{key:24,name:"PPTA",lat:36.7544,lng:126.29175,height:69.53,sats:17,ref:953,proc:!0}]},21226:e=>{e.exports={observationNav:"observationHeader_observationNav__HDA3L",navBar:"observationHeader_navBar__lyENn"}},736:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>i});let a=(0,r(86843).createProxy)(String.raw`/Users/jomingu/Desktop/personal-projects/next/next-ec2/src/app/components/observation/ObservationTable.tsx`),{__esModule:s,$$typeof:n}=a,i=a.default},84660:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var a=r(25036),s=r(736);let n=[{name:"GPS",tableHeader:["GPS","Azimuth","Elevation","Health","L1C (Cycles)","L2W (Cycles)","L5X (Cycles)","L1W (Cycles)","L2X (Cycles)","L1X (Cycles)"]},{name:"Galileo",tableHeader:["Galileo","Azimuth","Elevation","Health","L1X (Cycles)","L7X (Cycles)","L5X (Cycles)","L6X (Cycles)","L8X (Cycles)"]},{name:"BeiDou",tableHeader:["BeiDou","Azimuth","Elevation","Health","L2I (Cycles)","L7I (Cycles)","L6I (Cycles)","L5X (Cycles)","L1X (Cycles)"]}];function i(){return a.jsx("div",{children:n.map(e=>a.jsx("div",{className:"card",style:{minHeight:"250px",marginBottom:"20px"},children:(0,a.jsxs)("div",{style:{width:"100%"},children:[a.jsx("div",{className:"page-title-container",children:a.jsx("h4",{className:"page-title",children:e.name})}),a.jsx("div",{style:{marginBlock:"10px"},children:a.jsx(s.ZP,{header:e})})]})},e.name))})}},54061:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=r(25036);let s=(0,r(86843).createProxy)(String.raw`/Users/jomingu/Desktop/personal-projects/next/next-ec2/src/app/components/observation/ObservationHeader.tsx`),{__esModule:n,$$typeof:i}=s,l=s.default;function o({children:e}){return(0,a.jsxs)("div",{className:"mainContents",children:[a.jsx("div",{className:"page-title-container",children:a.jsx("h3",{className:"page-title",children:"OBSERVATION DETAILS"})}),a.jsx("div",{children:a.jsx(l,{})}),e]})}},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(70337);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,268,337,102,679,798,401,852],()=>r(20331));module.exports=a})();