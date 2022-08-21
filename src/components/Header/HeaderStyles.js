import styled from "styled-components";

export const ContainerHeader = styled.div`
    background-color: black; 
    height: 100vh; 
    width: 65px; 
    display: flex;
    align-items: center;
    position: fixed;
    border-right: 1px solid #a8a8b3; 


`
export const Buttons = styled.div`
   svg {
        display: block; 
        flex-direction: column; 
        column-gap: normal; 
        height: 60px;   
        margin-left: 20px; 
        color: #a8a8b3; 
        cursor: pointer; 
        font-size: 25px; 
    &:hover {
            color: #04d361; 
    };
    &:active {
            color: #04d361; 
        };
    }

`


export const Socials = styled.div`
        padding-top: 540px; 
   svg {
        display: flex; 
        justify-self: flex-end;
        margin-left: -22px; 
        color: #04d361; 
        height: 40px;
        cursor: pointer; 
        font-size: 22px; 
    &:hover {
            color: #04d361; 
    };
    &:active {
            color: #04d361; 
        };
    }

    @media screen and (max-width:1000px){
        padding-bottom: 1100px; 
        .git {
            display:none;
        }

}

`
