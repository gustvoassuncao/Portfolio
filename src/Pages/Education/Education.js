import React from "react";
import { EducationContainer } from "./EducationStyled"
import one from "../../assets/one.png"
import labe from "../../assets/labe.png"


    const Education = () => {


    return (
        <EducationContainer>
            <h1>Educação|Cursos 👨‍🎓</h1>
            <h3> 🌎 Inglês fluente/Avançado</h3>
            <p>Certificado pelo MyenglishOnline e vim me aperfeiçoando no dia a dia</p>
            <h3> ⚛️ Bootcamp Labenu</h3>
            <p>BootcampLabenu FullStack que simula a rotina de um ambiente de trabalho e equivale há mais de 1 ano atuando no mercado - módulo de front-end finalizado. </p>
            <h3> 💻 OneBitCode</h3>
            <p>Curso extra de JavaScript e React. </p>
            <a href="https://onebitcode.com/lp/" target="_blank" ><img src={one} height={70} /></a>
            <a href="https://www.labenu.com.br/" target="_blank"><img src={labe} height={100}  /></a>
        </EducationContainer>
    )

}

export default Education; 