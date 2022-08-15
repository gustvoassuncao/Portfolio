import styled from "styled-components";

export const HomeContainer = styled.div`
    position: absolute;
    top: 25% ; 
    left: 15%; 
    display: flex; 
`

export const PhotoContainer = styled.div`
    img{ 
        top: 25% ; 
        width: 45%; 
        border-radius: 250px;   
    }

`

export const TitleContainer = styled.div`
    border-left: 2px solid #de3926; 
    height: 130px; 
    margin-left: -220px;
    margin-top: 80px;  
    

    h1{ 
        font-size: 35px;
        margin-left: 20px; 
        /* background-color: #de3926;
        color: white;  */
    }
    h4{ 
        display: flex;
        justify-content: center; 
        font-size: 18px;
        color: #7a7a7a;
        margin-left: 19px; 
        max-width: 32em; 
    }

`

export const ButtonContainer = styled.div`
    display: flex; 
    justify-content: center;
    button {
        border-radius: 20px; 
        border: 2px solid black; 
        margin-top: 30px; 
        margin-left: 20px; 
        cursor: pointer;
        width: 35%; 
        height: 40px;
        background-color: whitesmoke; 
        color: black; 
        font-family: 'DM Sans', sans-serif;
        &:hover {
            background-color: #FF4500; 
        }
    }
`