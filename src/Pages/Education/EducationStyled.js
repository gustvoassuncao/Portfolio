import styled from "styled-components";

export const EducationContainer = styled.div`
    position: absolute; 
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2%;
    padding-bottom: 2%;
    top: 20% ; 
    margin-left: 23%; 
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(3px);
    border-radius: 10px;
    box-shadow: 1px 3px 5px 1px #6833e4;
    width: 60%; 
    min-width: 280px;
    
    &:hover {
      box-shadow: 1px 3px 5px 2px #04d361;
    }

    h3 {
        font-size: 1.2rem; 
        color: #04d361;
        line-height: 1.5; 
    }

    p {
        width: 60%; 
        font-size:  1rem; 
        color: white; 
        font-weight: 800;
        padding-bottom: 1rem;
        
    }

`

export const ImgContainer = styled.div`
    padding-left: 300px; 
    img { 
        display: flex; 
        box-sizing: border-box;
        flex-direction: row;
        width: 15rem; 
    }

`