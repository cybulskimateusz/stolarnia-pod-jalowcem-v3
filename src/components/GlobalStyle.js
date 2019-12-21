import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Rosarivo&display=swap');
    body, html, :root, *{
        margin: 0;
        padding:0;
        font: 14px 'Rosarivo', serif;
        overflow: hidden;

        @media (max-width: 768px){
            font-size:10px;
        }
    }
`;
