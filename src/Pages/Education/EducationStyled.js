import styled from "styled-components";

export const EducationContainer = styled.div`
    position: absolute; 
    display: flex; 
    flex-wrap: wrap;
    flex-direction: column;
    padding-left: 10%;
    padding-top: 1%;
    top: 20% ; 
    margin-left: 15%; 
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
    border-radius: 15px;
    box-shadow: 1px 3px 5px 1px #6833e4;
    width: 50%; 

    &:hover {
      box-shadow: 1px 3px 5px 2px #04d361;
    }

    h1 {
        margin-bottom: 2%;
        font-size: 30px; 
        color: white; 
    }

    h3 {
        font-size: 20px; 
        color: white; 
    }

    p {
        margin-bottom: 2%; 
        width: 55%; 
        font-size: 16px; 
        color: white; 
        font-weight: 800;

    }

    img { 
        display: flex; 
        box-sizing: border-box;
        flex-direction: row;
        width: 15rem; 
    }


`