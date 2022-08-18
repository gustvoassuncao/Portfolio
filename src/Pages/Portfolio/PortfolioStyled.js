import styled from "styled-components";

export const Title = styled.div `
  margin-left: 160px; 
  color: white;
  h2 {
    font-size: 35px; 
    position: absolute;
    z-index: 3;
    border-bottom: 3px solid  #04d361;
    width: 8%;
    margin-top: 3%;
    
  }
`

export const CardProjects = styled.div `
  
  .ConfCards {
    background-color: black;
    width: 20vw;
    margin-left: 2%; 
    margin-bottom: 40px;
    border-radius: 20px;
    box-shadow: 1px 3px 5px 2px #6833e4;
    &:hover {
      box-shadow: 1px 3px 5px 2px #04d361;
    }
    img {
      box-shadow: 1px 1px 4px 1px grey;
      object-fit: fill;
      
    }
  }

  position: absolute;
  display: flex; 
  flex-wrap: wrap;
  top: 20%; 
  margin-left: 70px; 

  .CardText{
    padding: 10px;
    color: white;
  }

  p {
    color: white;
    
  }

  .Buttons {
    justify-content: center; 
  }

`

export const Buttons = styled.div`


`