import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'
import './font.scss'

const GlobalStyle = createGlobalStyle`
${reset};

`;

export default GlobalStyle;