import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import './font/font.scss'

const GlobalStyle = createGlobalStyle`
${reset};

body{
    padding-bottom: constant(safe-area-inset-bottom);
   padding-bottom: env(safe-area-inset-bottom);
   background-color: #fff;
}

h1, h2, h3, h4 ,h5, button, p, span, em, ul, li, a, div {
  font-family: 'Pretendard', 'Malgun Gothic', sans-serif !important;
}


button {
    background:none;
    border:none;
    padding: 0;
    margin: 0;
}
`

export default GlobalStyle
