import styled from "styled-components";

export const ContainerHeader = styled.div`
    background-color: #121214; 
    height: 100vh; 
    width: 70px; 
    display: flex;
    align-items: center;
    position: absolute;
    border-right: 1px solid white; 
`
export const Buttons = styled.div`
   svg {
        display: block; 
        flex-direction: column; 
        column-gap: normal; 
        height: 60px;   
        margin-left: 20px; 
        color: white; 
        cursor: pointer; 
        font-size: 25px; 
    &:hover {
            color: rgb(255, 69, 0); 
    };
    &:active {
            color: rgb(255, 69, 0); 
        };
    }
`


// export const Logo = styled.div`
//     font-size: 10px; 
//     font-weight: lighter;
//     display: flex; 
//     align-items: center; 
//     color: white; 
//     cursor: pointer; 
//     &:hover {
//             color: orange; 
//     };
// `
