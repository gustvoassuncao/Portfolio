import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
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
  background-color:	whitesmoke	;
}

`

