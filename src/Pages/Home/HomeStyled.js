import styled from "styled-components";

export const HomeContainer = styled.div`
    position: absolute;
    top: 25% ; 
    left: 15%; 
    display: flex; 
 

@media screen and (max-width:1000px){
    top: 17% ; 
}
`

export const PhotoContainer = styled.div`
    img{ 
        width: 55%; 
        filter: grayscale(30%);
        border-radius: 200px;  
        box-shadow: 1px 3px 5px 2px #6833e4;
    &:hover {
      box-shadow: 1px 3px 5px 2px #04d361;}
        
@media screen and (max-width:1000px){
        width: 70%; 
        margin-left: 40%; 
        filter: grayscale(30%);
        border-radius: 200px; 
}
    }
`

export const TitleContainer = styled.div`
    border-left: 2px solid white; 
    height: 130px; 
    margin-left: -130px;
    margin-top: 80px;  

@media screen and (max-width:1000px){
    border-left: none; 
    height: 50px; 
    margin-top: 60%; 
}

    h1{ 
        font-size: 35px;
        margin-left: 20px; 
        color:  #04d361; 
    @media screen and (max-width:1000px){
    font-size: 17px;
    margin-left: -30%; 
    margin-right: 5%; 
    }
    }
    h4{ 
        display: flex;
        justify-content: center; 
        font-size: 18px;
        color: white;
        margin-left: 19px; 
        max-width: 32em; 

    @media screen and (max-width:1000px){
    position: relative;
    font-size: 15px;
    color: white;
    margin-left: -20%; 
    margin-right: 10%; 
    max-width: 32em; 
    margin-top: 15px;
}
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
        &:hover {
            background-color: #6833e4; 
        @media screen and (max-width:1000px){
            margin-bottom: 50px;
        }
        }
    
    @media screen and (max-width:1000px){
    margin-left: -60%; 
    margin-right: -20%; 
    font-size: 12px;
}
    
    
    }
`

// @media screen and (max-width:1000px){

// }

// @media screen and (max-width:950px){

// }

// @media screen and (max-width:800px){

// }

// @media screen and (max-width:768px) {

// }
