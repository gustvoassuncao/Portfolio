import styled from "styled-components";

export const HomeContainer = styled.div`
    top: 27% ; 
    left: 15%; 
    position: absolute;
    display: flex; 
    
`

export const PhotoContainer = styled.div`
    
    img{ 
        top: 25% ; 
        width: 55%; 
        border-radius: 250px; 
        /* box-shadow: 0px 1px 3px 5px grey;  */
    }

`

export const TitleContainer = styled.div`
    border-left: 2px solid black; 
    height: 150px; 
    margin-left: -200px;
    margin-top: 60px;  
    

    h1{ 
        font-size: 45px;
        margin-top: 10px;   
        margin-left: 20px; 
        color: black; 
    }
    h4{ 
        display: flex;
        justify-content: center; 
        font-size: 23px;
        color: rgb(255, 69, 0); 
        margin-left: 20px; 
        max-width: 27em; 
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