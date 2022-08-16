import { createGlobalStyle } from "styled-components";
import space2 from "./assets/space2.jpg"
import alinhamento from "./assets/alinhamento.jpg"
import alinhamento2 from "./assets/alinhamento2.jpg"
import alinhamento3 from "./assets/alinhamento3.gif"

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Space Grotesk', sans-serif;
    }

    * {
  scrollbar-width: thin;
  /* scrollbar-color: red; */
}
/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 5px;
}
*::-webkit-scrollbar-thumb {
  background-color: #c5baba ;
  border-radius: 20px;
}

body {
  background-color: black;
  background-image: url(${alinhamento}) ;
  background-size: auto;
}

`

