import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

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
    color: ${(props) => props.theme.colors.textMain};
    min-height: 100vh;
  }

  a{
    color: ${(props) => props.theme.colors.textSecond};
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
    color: ${(props) => props.theme.colors.textMain}
  }

  .textSub{
    color: ${(props) => props.theme.colors.textSecond}
  }

  .focus {
    color: ${(props) => props.theme.colors.textMain};
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
    color: ${(props) => props.theme.colors.containedButtonText};
    border-color: ${(props) => props.theme.colors.containedButtonMain};
    background-color: ${(props) => props.theme.colors.containedButtonMain};
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
      background-color: ${(props) => props.theme.colors.containedButtonMainHover};
      color: ${(props) => props.theme.colors.containedButtonTextHover};
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
    border-bottom: 1px solid ${(props) => props.theme.colors.borderMain};
    background-color: ${(props) => props.theme.colors.backgroundDefault};
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
`;

export default GlobalStyle;