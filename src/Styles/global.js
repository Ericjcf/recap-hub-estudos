import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
   }
   :root{
    --gray0:#f5f5f5;
    --gray1:#868E96;
    --gray2:#343B41;
    --gray3:#212529;
    --gray4:#121214;
    --rosa:#FF577F;
    --rosa-forte:#FF427F;
    --rosa-escuro:#59323F;
    --sucesso:#3FE864;
    --falha:#E83F5B;
   }
   body{
    background: var(--gray4);
    color: var(--gray0);
   }
   body, input, button{
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
   }
   h1,h2,h3,h4,h5,h6{
    font-family: 'Roboto Mono', monospace;
    font-size: 1rem;
   }
   button {
    cursor: pointer;
    border-radius: 3px;
    :hover{
      opacity: 0.8;
    }
    
   }
   a {
    text-decoration: none;
    color: var(--rosa);
   }
`;
export const gray0 = "#F8F9FA";
export const gray1 = "#868E96";
export const gray2 = "#343B41";
export const gray3 = "#212529";
export const gray4 = "#121214";

export const rosa = "#FF577F";
export const rosaForte = "#F8F9FA";
export const rosaEscuro = "#59323F";

// font-family: 'Inter', sans-serif;
// font-family: 'PT Serif', serif;
// font-family: 'Roboto Mono', monospace;
