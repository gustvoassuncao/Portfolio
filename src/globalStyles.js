import { createGlobalStyle } from "styled-components";
import alinhamento2 from "./assets/alinhamento2.jpg"

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Space Grotesk', sans-serif;
    }

    * {
  scrollbar-width: thin;
}
*::-webkit-scrollbar {
  width: 5px;
}
*::-webkit-scrollbar-thumb {
  background-color: #c5baba ;
  border-radius: 20px;
}

body {
  background-color: black;
  background-image: url(${alinhamento2}) ;
  background-size: auto;
}
`

