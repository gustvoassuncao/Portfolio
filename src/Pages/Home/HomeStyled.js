import styled from "styled-components";

export const HomeContainer = styled.div`
    position: absolute;
    top: 25% ; 
    left: 15%; 
    display: flex; 
    /* background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 50%) 10px 10px 10px; */
    
`

export const PhotoContainer = styled.div`

    img{ 
        top: 25% ; 
        width: 55%; 
        border-radius: 200px;  
        box-shadow: 4px 3px 5px #6833e4;  
    }

`

export const TitleContainer = styled.div`
    border-left: 2px solid white; 
    height: 130px; 
    margin-left: -130px;
    margin-top: 80px;  
    

    h1{ 
        font-size: 35px;
        margin-left: 20px; 
        color:  #04d361; 
    }
    h4{ 
        display: flex;
        justify-content: center; 
        font-size: 18px;
        color: white;
        margin-left: 19px; 
        max-width: 32em; 
    }

`

export const ButtonContainer = styled.div`
    display: flex; 
    justify-content: center;
    button {
        border-radius: 5px; 
        border: 2px solid #6833e4; 
        margin-top: 30px; 
        margin-left: 20px; 
        cursor: pointer;
        width: 35%; 
        height: 40px;
        background-color: black; 
        color: white; 
        font-family: 'DM Sans', sans-serif;
        &:hover {
            background-color: #6833e4; 
        }
    }
`