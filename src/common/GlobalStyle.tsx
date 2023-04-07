import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./font.scss";

const GlobalStyle = createGlobalStyle`
${reset};

button {
    background:none;
    border:none;
    padding: 0;
    margin: 0;
}
`;

export default GlobalStyle;
