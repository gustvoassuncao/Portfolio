import React from "react";
import { SkillsContainer } from "./SkillsStyled"
import skills from "../../assets/skills.png"
import { Title } from "../../Pages/Portfolio/PortfolioStyled"

    const Skills = () => {
    return (
        <>
        <Title>
        <h2>Tecnologias</h2>
        </Title>
        <SkillsContainer>
        <img src={skills} />
        </SkillsContainer>
        </>
    )

}

export default Skills; 