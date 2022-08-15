import React from "react";
import { HomeContainer, PhotoContainer, TitleContainer, ButtonContainer } from "./HomeStyled"
import photo from "../../assets/photo.png"
import cv from "../../assets/cv.pdf"
import { goToContact } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

    const Home = () => {
    const navigate = useNavigate()
    
    const onResumeClick= () => {
        window.open(cv);
        }

    return (
        <HomeContainer>
            <PhotoContainer>
                <img src={photo} alt='imagem de perfil' />
            </PhotoContainer>
            <TitleContainer>
                <h1> &lt; Olá, sou Gustavo Monteiro 👋 /&gt;</h1>
                <h4> Sou um Desenvolvedor Front-end que está em constante prática para me tornar cada vez mais eficiente. Curto muito passar momentos em família, aprender coisas novas e assistir animes.</h4>

                <ButtonContainer>
                <button onClick={onResumeClick}>CURRÍCULO</button>
                <button onClick={() => goToContact(navigate)} >CONTATO</button>
                </ButtonContainer>
            </TitleContainer>
        </HomeContainer>
    )

}

export default Home; 