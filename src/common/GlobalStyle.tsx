import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./font.scss";

const GlobalStyle = createGlobalStyle`
${reset};

body{
    padding-bottom: constant(safe-area-inset-bottom);
   padding-bottom: env(safe-area-inset-bottom);
   background-color: #fff;
}


button {
    background:none;
    border:none;
    padding: 0;
    margin: 0;
}
`;

export default GlobalStyle;
