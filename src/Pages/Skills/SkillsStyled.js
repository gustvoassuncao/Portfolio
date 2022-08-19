import styled from "styled-components";

export const SkillsContainer = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap; 
    top: 20%; 
    left: 20%;
    right: 7%;

  .ConfCards {
    background-color: black;
    width: 100px;
    margin-left: 25px; 
    margin-bottom: 30px;
    border-radius: 20px;
    box-shadow: 1px 3px 5px 2px #6833e4;
    &:hover {
      box-shadow: 1px 3px 5px 2px #04d361;
    }

    img {
      width: 100px;
    }

  }

  

`
