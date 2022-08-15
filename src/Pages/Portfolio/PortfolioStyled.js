import styled from "styled-components";

export const Title = styled.div `
  margin-left: 160px; 
    background-color: grey;
 
  h2 {
    font-size: 35px; 
    position: absolute;
    z-index: 3;
    border-bottom: 3px solid rgb(251, 3, 3);
    width: 5%;
    margin-top: 3%;
  }
`

export const CardProjects = styled.div `

  .ConfCards {
    width: 20vw;
    margin-left: 3%; 
    margin-bottom: 40px;
    border-radius: 20px;
    box-shadow: 1px 3px 10px 1px grey;
    /* background-color: grey; */

    img {
      box-shadow: 1px 1px 4px 1px grey;
    }
  }

  position: absolute;
  display: flex; 
  flex-wrap: wrap;
  top: 20%; 
  margin-left: 80px; 

  .CardText{
    padding: 5px;
  }

`