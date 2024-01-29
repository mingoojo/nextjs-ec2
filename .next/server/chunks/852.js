exports.id=852,exports.ids=[852],exports.modules={2880:(e,t,o)=>{Promise.resolve().then(o.t.bind(o,2583,23)),Promise.resolve().then(o.t.bind(o,26840,23)),Promise.resolve().then(o.t.bind(o,38771,23)),Promise.resolve().then(o.t.bind(o,13225,23)),Promise.resolve().then(o.t.bind(o,9295,23)),Promise.resolve().then(o.t.bind(o,43982,23))},57713:(e,t,o)=>{Promise.resolve().then(o.bind(o,91845)),Promise.resolve().then(o.bind(o,58312)),Promise.resolve().then(o.bind(o,64146))},64146:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c});var n=o(95344),r=o(3729),a=o(8428),s=o(72674),i=o(71598);let l=s.vJ`

@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 100;
  src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf) format('opentype');
}


@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 300;
  src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf) format('opentype');
}


@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format('opentype');
}



@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf) format('opentype');
}



@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf) format('opentype');
}

@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.otf) format('opentype');
}


  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Noto Sans KR';
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(160, 174, 224, 0.3), rgba(135, 234, 242, 0.3));
    color: ${e=>e.theme.colors.textMain};
    min-height: 100vh;
  }

  a{
    color: ${e=>e.theme.colors.textSecond};
    font-weight: bold;
  }

  :lang(ko) {
    h1, h2, h3 {
      word-break: keep-all;
    }
  }

  h1{
    font-size: 2rem;
  }

  h2{
    font-size: 1.5rem;
  }

  h3{
    font-size: 1.17rem;
  }

  h4{
    font-size: 1rem;
  }

  h1, h2, h3, h4 {
      font-weight: 700;
  }

  a{
    font-weight: 500;
    &:hover{
      color:#222
    }
  }


  .textMain{
    color: ${e=>e.theme.colors.textMain}
  }

  .textSub{
    color: ${e=>e.theme.colors.textSecond}
  }

  .focus {
    color: ${e=>e.theme.colors.textMain};
    text-decoration: underline;
  }

  .link-box-right{
    margin-left:10px;
  }

  .full-width{
    width: 100%
  }

    //버튼 커스텀(색이 채워진 박스)
  .contained-button{
    color: ${e=>e.theme.colors.containedButtonText};
    border-color: ${e=>e.theme.colors.containedButtonMain};
    background-color: ${e=>e.theme.colors.containedButtonMain};
    border-radius: 30px;
    border-width: 1px;
    border-style: solid;
    padding: .5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    transition-property: all;
    transition-duration: 0.3s;
    cursor: pointer;

    &:hover{
      background-color: ${e=>e.theme.colors.containedButtonMainHover};
      color: ${e=>e.theme.colors.containedButtonTextHover};
      cursor: pointer;
    }
  }

  //NavBar 스타일
  .navBar {
    position: fixed;
    top: 0;
    height: 70px;
    align-items: center;
    display: flex;
    width: 100%;
    justify-content: center;
    z-index: 30;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }

  .scrolld-nav{
    border-bottom: 1px solid ${e=>e.theme.colors.borderMain};
    background-color: ${e=>e.theme.colors.backgroundDefault};
    backdrop-filter: blur(10px);
  }

  .unscrolld-nav{
    background-color: rgba(255, 255, 255, 0);
  }


  //최상위 children을 감싸는 div
  .main{
    min-height: 90vh;
    display: flex;
    justify-content: center;
    width: 100%;
    padding-block: 2.5rem;
  }

  //children을 구성하는 가장 큰 div
  .mainContents {
    width: 100%;
    max-width: 1280px;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  //타이틀 박스
  .page-title-container{
    border-bottom: 1px solid #222;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  //헤더 및 풋터 박스
  .container {
    margin-left: 5px;
    margin-right: 5px;
    min-height: 4rem;
    width: 100%;
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  //카트형태의 영역
  .card{
    overflow: hidden;
    padding: 2rem;
    border-radius: 0.75rem;
    border: 1px solid #e2e8f0;
    background-color: #ffffff;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  /* =================================== */

.skyplot-wrapper {
  width: 100%;
  height: 100%;
}

.skyplot {
  width: 84vh;
  height: 70%;
  margin-left: 1rem;
}

.skyplot-drawing {
  position: relative;
  margin-top: 50px;
  margin-left: 1rem;
  width: 70vh;
  height: 70vh;
  border: solid 1px grey;
  background-image: url(asset/hemisphere.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70vh 70vh;
}

.satelite-marker {
  position: absolute;
  width: 60px;
  height: 50px;
  text-align: center;
  transform: translate(-50%, -50%);
  background: transparent;
  font-size: 9pt;
}
`,d={colors:{textMain:"#222",textSecond:"#6f6f6f",borderMain:"#e5e7eb",backgroundDefault:"rgba(255, 255, 255, 0.8)",containedButtonMain:"#222",containedButtonText:"#ffffff",containedButtonMainHover:"#ffffff",containedButtonTextHover:"#222"}};function c({children:e}){let[t]=(0,r.useState)(()=>new s.qH);return(0,a.useServerInsertedHTML)(()=>{let e=t.getStyleElement();return t.instance.clearTag(),n.jsx(n.Fragment,{children:e})}),n.jsx(s.LC,{sheet:t.instance,children:(0,n.jsxs)(s.f6,{theme:d,children:[n.jsx(i.AG,{}),n.jsx(l,{}),e]})})}},91845:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d});var n=o(95344),r=o(56506),a=o(89410),s=o(81801),i=o.n(s),l=o(82709);function d(){let{width:e}=(0,l.Z)();return n.jsx("div",{className:i().footerContainer,children:(0,n.jsxs)("div",{className:"container",children:[e>1080&&n.jsx(r.default,{href:"https://www.ngii.go.kr/",target:"_blank",children:n.jsx(a.default,{src:"/ngii_logo.png",alt:"ngii logo",width:"250",height:"125"})}),n.jsx("div",{className:i().footerContents,children:(0,n.jsxs)("div",{className:e>1080?`${i().web}`:`${i().mobile}`,children:[e>1080?(0,n.jsxs)("div",{className:i().rowBox,children:[n.jsx("p",{className:`${i().row} textSub`,children:"(우)16517 경기도 수원시 영통구 월드컵로 92(원천동)"}),(0,n.jsxs)("p",{className:`${i().row} textSub`,children:["전화 : 031",")"," 210-2700"]}),(0,n.jsxs)("p",{className:`${i().row} textSub`,children:["팩스 : 031",")"," 210-2644"]})]}):(0,n.jsxs)(n.Fragment,{children:[n.jsx("div",{className:i().rowBox,children:n.jsx("p",{className:`${i().row} textSub`,children:"(우)16517 경기도 수원시 영통구 월드컵로 92(원천동)"})}),(0,n.jsxs)("div",{className:i().rowBox,children:[(0,n.jsxs)("p",{className:`${i().row} textSub`,children:["전화 : 031",")"," 210-2700"]}),(0,n.jsxs)("p",{className:`${i().row} textSub`,children:["팩스 : 031",")"," 210-2644"]})]})]}),n.jsx("div",{className:i().rowBox,children:n.jsx("p",{className:`${i().row} textSub`,children:"본 홈페이지는 게시된 이메일 주소가 자동 수집되는 것을 거부하며 이를 위반시 정보통신망법에 의해 처벌됨을 유념하여 주시기 바랍니다."})}),n.jsx("div",{className:i().rowBox,children:n.jsx("p",{className:`${i().row} textSub`,children:"Copyright 2019 NGII All Rights reserved."})})]})})]})})}},58312:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>p});var n=o(95344),r=o(3729),a=o(56506),s=o(89410),i=o(65408),l=o.n(i),d=o(82709),c=o(8428);let f=(0,o(43158).ZP)(e=>({isLogin:!0,setIsLogin:()=>e(e=>({isLogin:!e.isLogin})),setLogin:()=>e(()=>({isLogin:!0})),setLogout:()=>e(()=>({isLogin:!1}))})),m=[{href:"/overview",query:"",name:"OVERVIEW"},{href:"/observation",query:"/pseudo",name:"OBSERVATION DETAILS"},{href:"/skyPlot",query:"",name:"SKY PLOT"},{href:"/log",query:"",name:"LOG"},{href:"/receiver",query:"",name:"RECIEVER MANAGE"},{href:"/ssrDetails",query:"",name:"SSR DETAILS"},{href:"/ssrServer",query:"",name:"SSR SERVER"},{href:"/userInformation",query:"",name:"USER INFORMATION"}];function h({device:e,pathname:t}){let o=t.match(/\/([^\/]+)\/([^\/]+)/)||t.match(/\/([^\/]+)/)||"";if(null!==e)return"desktop"===e||"tablet"===e?n.jsx("nav",{className:l().subNav,children:n.jsx("div",{className:"container",children:m.map(e=>{let t=`/${o[1]}`===e.href;return n.jsx(a.default,{className:`${t?"focus":""} ${l().subNavItem}`,href:`${e.href}${e?.query}`,children:e.name},e.name)})})}):n.jsx("nav",{className:l().subNavMobile,children:n.jsx("div",{className:"container",children:m.map((e,t)=>{let r=`/${o[1]}`===e.href;return n.jsx(a.default,{className:`${r?"focus":""} ${l().subNavItemMobile} ${l()[`subNavItemMobile${t}`]}`,href:`${e.href}${e?.query}`,children:e.name},e.name)})})})}function u({dummyData:e}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:l().userModalHeader,children:[n.jsx("p",{className:"textMain",children:e.user.name}),n.jsx("p",{className:"textSub",children:e.user.email})]}),(0,n.jsxs)("div",{children:[n.jsx("div",{children:(0,n.jsxs)("button",{className:l().ModalButton,onClick:()=>{console.log("navigate to DashBoard")},children:[n.jsx(s.default,{className:l().image,src:"/dashboard.png",alt:"dashboard logo",width:"25",height:"25"}),n.jsx("p",{className:"textSub",children:"Dash Board"})]})}),n.jsx("div",{children:(0,n.jsxs)("button",{className:l().ModalButton,onClick:()=>{console.log("Sign Out")},children:[n.jsx(s.default,{className:l().image,src:"/logout.png",alt:"logout logo",width:"25",height:"25"}),n.jsx("p",{className:"textSub",children:"Sign Out"})]})})]})]})}function x({dummyData:e,device:t,setOpenModal:o}){let a=(0,r.useRef)(null),s=e=>{a.current&&!a.current.contains(e.target)&&o(!1)};return((0,r.useEffect)(()=>(document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}),[]),"mobile"===t)?n.jsx("div",{className:l().modalContainerMobile,children:n.jsx("div",{className:l().userModalMobile,ref:a,children:n.jsx(u,{dummyData:e})})}):n.jsx("div",{className:l().userModal,ref:a,children:n.jsx(u,{dummyData:e})})}function g({device:e}){let[t,o]=(0,r.useState)(!1);(0,r.useEffect)(()=>{t&&"mobile"===e?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[t,e]);let a={user:{name:"jo",email:"jo@gmail.com",image:"/logo.png"},expires:"unlimit"};return(0,n.jsxs)("div",{className:l().userContainer,children:[n.jsx("button",{onClick:()=>o(!t),className:l().userButton,children:n.jsx(s.default,{src:a.user.image,alt:a.user.email,width:"40",height:"40"})}),t&&n.jsx(x,{dummyData:a,device:e,setOpenModal:o})]})}function p(){let{isLogin:e}=f(),{device:t}=(0,d.Z)(),o=function(e){let[t,o]=(0,r.useState)(!1),n=()=>{o(window.pageYOffset>50)};return(0,r.useEffect)(()=>{window.addEventListener("scroll",n)},[]),t}(0),i=(0,c.usePathname)();return(0,n.jsxs)(n.Fragment,{children:[n.jsx("nav",{className:`navBar ${o?"scrolld-nav":"unscrolld-nav"}`,children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)(a.default,{className:l().mainIcon,href:"/",children:[n.jsx(s.default,{className:l().image,src:"/logo.png",priority:!0,alt:"SSR2OSR logo",width:"30",height:"30"}),n.jsx("p",{className:"textMain",children:"SSR2OSR"})]}),e?n.jsx(g,{device:t}):(0,n.jsxs)("div",{children:[n.jsx(a.default,{href:"/sign-up",className:"link-box-right",children:n.jsx("button",{className:"contained-button",children:"회원가입"})}),n.jsx(a.default,{href:"/login",className:"link-box-right",children:n.jsx("button",{className:"contained-button",children:"로그인"})})]})]})}),n.jsx("div",{style:{marginTop:"70px",marginBottom:"50px",border:"0.5px solid #ffffff"},children:e&&n.jsx(h,{device:t,pathname:i})})]})}},82709:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var n=o(3729);function r(){let[e,t]=(0,n.useState)("default"),[o,r]=(0,n.useState)({width:0,height:0}),[a,s]=(0,n.useState)("default");return(0,n.useEffect)(()=>{let e=()=>{window.matchMedia("(max-width: 640px)").matches?t("mobile"):window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches?t("tablet"):t("desktop"),r({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,n.useEffect)(()=>{let e=()=>{null!==o&&(o.width>=1600?s("XXL"):o.width>=1200&&o.width<1600?s("XL"):o.width>=960&&o.width<1200?s("L"):o.width>=720&&o.width<960?s("M"):o.width>=560&&o.width<720?s("MS"):o.width>=400&&o.width<560?s("S"):s("SS"))};return e(),()=>{e()}},[o]),{device:e,width:o?.width,height:o?.height,webSize:a}}},81801:e=>{e.exports={footerContainer:"footer_footerContainer__1HxpD",footerContents:"footer_footerContents__CSfVW",rowBox:"footer_rowBox__bsi9z",row:"footer_row__AvUsW",web:"footer_web__f0xOR",mobile:"footer_mobile__tElwV"}},65408:e=>{e.exports={mainIcon:"header_mainIcon__SCZF1",image:"header_image__pIIJk",userContainer:"header_userContainer__Eam7i",userButton:"header_userButton__1x1R9",userModal:"header_userModal__pP6yV",slideUpFade:"header_slideUpFade__05TUv",userModalHeader:"header_userModalHeader__fPjkx",ModalButton:"header_ModalButton__3KVD3",modalContainerMobile:"header_modalContainerMobile__80iq_",all:"header_all__g_CxJ",userModalMobile:"header_userModalMobile__AZYfW",slideUpFadeMobile:"header_slideUpFadeMobile__NHPlT","slide-out":"header_slide-out__k02Jc",subNav:"header_subNav__2oAnu",subNavMobile:"header_subNavMobile__syH1F",subNavItemMobile:"header_subNavItemMobile__ziVI1",subNavItemMobile6:"header_subNavItemMobile6__76a1G",subNavItem:"header_subNavItem__2iCvt"}},12010:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>b,metadata:()=>p});var n=o(25036),r=o(86843);let a=(0,r.createProxy)(String.raw`/Users/jomingu/Desktop/personal-projects/next/next-ec2/src/app/ThemeClient.tsx`),{__esModule:s,$$typeof:i}=a,l=a.default,d=(0,r.createProxy)(String.raw`/Users/jomingu/Desktop/personal-projects/next/next-ec2/src/app/components/Header.tsx`),{__esModule:c,$$typeof:f}=d,m=d.default,h=(0,r.createProxy)(String.raw`/Users/jomingu/Desktop/personal-projects/next/next-ec2/src/app/components/Footer.tsx`),{__esModule:u,$$typeof:x}=h,g=h.default,p={title:"Create Next App",description:"Generated by create next app"};function b({children:e}){return n.jsx("html",{children:n.jsx("body",{children:(0,n.jsxs)(l,{children:[n.jsx(m,{}),n.jsx("div",{className:"main",children:e}),n.jsx(g,{})]})})})}}};