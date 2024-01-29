(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[557],{27618:function(e,t,a){Promise.resolve().then(a.bind(a,31999)),Promise.resolve().then(a.bind(a,88411)),Promise.resolve().then(a.bind(a,30440))},31999:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var n=a(3827),i=a(58680),r=a.n(i),s=a(37773),l=a.n(s),c=a(64090),h=a(55264),d=a(53673),o=a(9673),f=a.n(o);let m=(e,t)=>({chart:{type:e},title:{text:t},xAxis:{title:{text:"Categories"},categories:[]},yAxis:{title:{text:"packet"}},plotOptions:{column:{dataLabels:{enabled:!0},enableMouseTracking:!1}},series:[{name:"packet",data:[0]}]});function g(){let[e,t]=(0,c.useState)(m("bar","")),a=(0,c.useRef)(null),{webSize:i}=(0,d.Z)();return(0,c.useEffect)(()=>{t(e=>({...e,xAxis:{title:{text:"Satellites"},categories:h.S.map(e=>e.name)},series:[{name:"sats",data:h.S.map(e=>e.sats)}]}))},[]),(0,n.jsxs)("div",{className:"card ".concat(f().cardDefault," ").concat("XL"===i||"XXL"===i?f().cardGrid:""," ").concat("XL"===i||"XXL"===i?f().cardLeft:""),children:[(0,n.jsx)("div",{className:"full-width",children:(0,n.jsx)("div",{className:"page-title-container",children:(0,n.jsx)("h4",{className:"page-title",children:"GRAPH"})})}),(0,n.jsx)(l(),{highcharts:r(),options:e,ref:a})]})}},88411:function(e,t,a){"use strict";a.r(t);var n=a(3827),i=a(64090),r=a(9673),s=a.n(r),l=a(53673),c=a(66599),h=a(82582),d=a(28693),o=a(15672),f=a(39484),m=a(24143),g=a(32240),u=a(63895),p=a(47590),P=a(55264),w=a(90533),x=a(33545);a(68653),t.default=()=>{let{webSize:e}=(0,l.Z)();return(0,i.useEffect)(()=>{let e=()=>{let e=new w.ZP({image:new x.Z({anchor:[.5,1],anchorXUnits:"fraction",anchorYUnits:"fraction",src:"./Location_icon.png",scale:.2})}),t=P.S.map((e,t)=>new c.Z({geometry:new p.Z((0,m.mi)([e.lng,e.lat])),type:"Point",index:t,label:e.name})),a=new g.Z({source:new u.Z({features:t}),style:e});new h.Z({target:"map1",layers:[new o.Z({source:new f.Z}),a],view:new d.ZP({projection:"EPSG:3857",center:(0,m.vs)([127.67449,36.399426],"EPSG:4326","EPSG:3857"),zoom:7})})};(()=>{let t=document.createElement("script");t.src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList,URL",t.async=!0,document.head.appendChild(t);let a=document.createElement("script");a.src="https://map.ngii.go.kr/openapi/wmts_ngiiMap_v6.4.3.js?apikey=0D494EE250CAEC915C5DC75684D52493",a.async=!0,a.onload=e,document.head.appendChild(a)})()},[]),(0,n.jsxs)("div",{className:"card ".concat(s().cardDefault," ").concat("XL"===e||"XXL"===e?s().cardGrid:""," ").concat("XL"===e||"XXL"===e?s().cardLeft:""),children:[(0,n.jsx)("div",{className:"full-width",children:(0,n.jsx)("div",{className:"page-title-container",children:(0,n.jsx)("h4",{className:"page-title",children:"MAP"})})}),(0,n.jsx)("div",{id:"map1",style:{width:"540px",height:"500px",overflow:"hidden"}})]})}},30440:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var n=a(3827),i=a(55264),r=a(9673),s=a.n(r),l=a(89101),c=a(64090);let h=[{title:"Mount",dataIndex:"name",sorter:(e,t)=>e.name.localeCompare(t.name)},{title:"Ref_ID",dataIndex:"ref",sorter:(e,t)=>e.ref-t.ref},{title:"Lat(\xb0)",dataIndex:"lat",sorter:(e,t)=>e.lat-t.lat},{title:"Lng(\xb0)",dataIndex:"lng",sorter:(e,t)=>e.lng-t.lng},{title:"Height(m)",dataIndex:"height",sorter:(e,t)=>e.height-t.height},{title:"Proc",dataIndex:"proc",render:e=>e?"true":"false"}];function d(){let[e,t]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{t(!0)},[]),(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("div",{className:"full-width",children:(0,n.jsx)("div",{className:"page-title-container",children:(0,n.jsx)("h4",{className:"page-title",children:"TABLE"})})}),(0,n.jsx)("div",{className:s().tableBox,children:e&&(0,n.jsx)(l.Z,{columns:h,dataSource:i.S})})]})}},53673:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(64090);function i(){let[e,t]=(0,n.useState)("default"),[a,i]=(0,n.useState)({width:0,height:0}),[r,s]=(0,n.useState)("default");return(0,n.useEffect)(()=>{let e=()=>{window.matchMedia("(max-width: 640px)").matches?t("mobile"):window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches?t("tablet"):t("desktop"),i({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,n.useEffect)(()=>{let e=()=>{null!==a&&(a.width>=1600?s("XXL"):a.width>=1200&&a.width<1600?s("XL"):a.width>=960&&a.width<1200?s("L"):a.width>=720&&a.width<960?s("M"):a.width>=560&&a.width<720?s("MS"):a.width>=400&&a.width<560?s("S"):s("SS"))};return e(),()=>{e()}},[a]),{device:e,width:null==a?void 0:a.width,height:null==a?void 0:a.height,webSize:r}}},55264:function(e,t,a){"use strict";a.d(t,{S:function(){return n}});let n=[{key:1,name:"PPGS",lat:38.380283,lng:128.46289,height:47.5,sats:20,ref:479,proc:!0},{key:2,name:"PPHC",lat:38.11019,lng:127.708374,height:144.85,sats:20,ref:0,proc:!0},{key:3,name:"PPCH",lat:37.890724,lng:127.20038,height:134.17,sats:20,ref:0,proc:!0},{key:4,name:"PPGH",lat:37.744648,lng:126.48978,height:47.86,sats:20,ref:574,proc:!0},{key:5,name:"PPHQ",lat:37.480293,lng:126.87716,height:162.44,sats:20,ref:43,proc:!0},{key:6,name:"PPHS",lat:37.201168,lng:126.82893,height:84.73,sats:20,ref:0,proc:!0},{key:7,name:"PPYJ",lat:37.291412,lng:127.64091,height:93.08,sats:20,ref:1,proc:!0},{key:8,name:"PPYC",lat:37.368782,lng:128.39276,height:330.74,sats:20,ref:0,proc:!0},{key:9,name:"PPGR",lat:37.786213,lng:128.87294,height:53.92,sats:20,ref:953,proc:!0},{key:10,name:"PPWJ",lat:36.99282,lng:129.40451,height:49.61,sats:20,ref:953,proc:!0},{key:11,name:"PPYD",lat:36.412445,lng:129.3719,height:55.53,sats:20,ref:992,proc:!0},{key:12,name:"PPGW",lat:36.23724,lng:128.56776,height:126,sats:20,ref:953,proc:!0},{key:13,name:"PPBU",lat:36.48862,lng:127.71543,height:195.34,sats:20,ref:953,proc:!0},{key:14,name:"PPDJ",lat:36.399426,lng:127.37449,height:116.84,sats:20,ref:363,proc:!0},{key:15,name:"PPSC",lat:36.079365,lng:126.69124,height:47.98,sats:20,ref:953,proc:!0},{key:16,name:"PPBY",lat:35.569263,lng:129.34482,height:59.32,sats:20,ref:0,proc:!0},{key:17,name:"PPHP",lat:35.565907,lng:128.16762,height:73.51,sats:20,ref:953,proc:!0},{key:18,name:"PPIS",lat:35.619167,lng:127.29275,height:264.76,sats:20,ref:953,proc:!0},{key:19,name:"PPNJ",lat:35.022873,lng:126.71378,height:71.45,sats:20,ref:333,proc:!0},{key:20,name:"PPHD",lat:35.06457,lng:127.74829,height:45.45,sats:20,ref:953,proc:!0},{key:21,name:"PPGJ",lat:34.88514,lng:128.6207,height:59.84,sats:20,ref:953,proc:!0},{key:22,name:"PPJD",lat:34.426258,lng:126.16266,height:44.08,sats:20,ref:0,proc:!0},{key:23,name:"PPWS",lat:35.574806,lng:129.30885,height:219.05,sats:15,ref:344,proc:!0},{key:24,name:"PPTA",lat:36.7544,lng:126.29175,height:69.53,sats:17,ref:953,proc:!0}]},9673:function(e){e.exports={cardDefault:"overView_cardDefault__Z4j2N",cardGrid:"overView_cardGrid__t8HM8",cardFirst:"overView_cardFirst__zj3Pm",cardLeft:"overView_cardLeft__XTPW0",tableBox:"overView_tableBox__RY0JW"}}},function(e){e.O(0,[762,939,212,632,166,101,438,156,971,69,744],function(){return e(e.s=27618)}),_N_E=e.O()}]);