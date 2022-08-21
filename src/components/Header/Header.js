import React from "react";
import {useNavigate} from "react-router-dom"
import {goToHome, goToSkills, goToEducation, goToContact, goToPortfolio } from "../../routes/coordinator"
import { ContainerHeader, Buttons, Socials } from "./HeaderStyles"
import { AiOutlineHome, AiOutlineUser, AiOutlineCoffee, AiOutlineMail, AiOutlineLaptop, AiOutlineGithub, AiOutlineLinkedin
} from "react-icons/ai";
    const Header = () => {
    const navigate = useNavigate ()

    return (
        <ContainerHeader>
            <Buttons>
            <AiOutlineHome onClick={()=> goToHome(navigate)} />
            <AiOutlineUser onClick={()=> goToEducation(navigate)} />
            <AiOutlineCoffee onClick={()=> goToSkills(navigate)} />
            <AiOutlineLaptop onClick={()=> goToPortfolio(navigate)} />
            <AiOutlineMail onClick={()=> goToContact(navigate)} />
            </Buttons>
            <Socials>
            <a href='https://github.com/gustavomonteirodev' className="git" target="_blank">
            <AiOutlineGithub  /> </a>  
            <a href='https://www.linkedin.com/in/gustavomonteirodev/' target="_blank"> 
            <AiOutlineLinkedin  /> </a>  
            </Socials>
        </ContainerHeader>
    )
}

export default Header; 