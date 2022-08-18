import React from "react";
import { EducationContainer, ImgContainer } from "./EducationStyled"
import one from "../../assets/one.png"
import labe from "../../assets/labe.png"
import { Title  } from "../../Pages/Portfolio/PortfolioStyled"

    const Education = () => {
    return (
        <>
            <Title>
                <h2>Educação</h2>
            </Title>
            <EducationContainer> 
                <h3> 🌎 Inglês fluente/Avançado</h3>
                <p>Certificado pelo MyenglishOnline e Duolingo e venho me aperfeiçoando diariamente.</p>
                <h3> ⚛️ Labenu Fullstack</h3>
                <p> Bootcamp intensivo Simula a rotina de um ambiente de trabalho com projetos práticos diariamente e equivale há mais de 1 ano atuando no mercado sempre utilizando git e trabalhando em equipe - módulo de front-end finalizado. </p>
                <h3> 💻 OneBitCode</h3>
                <p>Curso fullstack focado em javascript e React. </p>
                {/* <ImgContainer>
                <a href="https://onebitcode.com/lp/" target="_blank" ><img src={one} /></a>
                <a href="https://www.labenu.com.br/" target="_blank"><img src={labe}  /></a>
                </ImgContainer> */}
                </EducationContainer>


        </>
    )
}

export default Education; 