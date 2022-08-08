import styled from "styled-components";

export const ContainerHeader = styled.div`
    background-color: black; 
    height: 100vh; 
    width: 70px; 
    display: flex;
    align-items: center;
`
export const Buttons = styled.div`
   svg {
        display: flex; 
        flex-direction: column; 
        column-gap: normal; 
        height: 60px;   
        margin-left: 20px; 
        color: white; 
        cursor: pointer; 
        font-size: 25px; 
    &:hover {
            color: orange; 
    };
    &:active {
            color: orange; 
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
