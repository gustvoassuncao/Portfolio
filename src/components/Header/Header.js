import React from "react";
import {useNavigate} from "react-router-dom"
import {goToHome, goToSkills, goToEducation, goToContact, goToPortfolio } from "../../routes/coordinator"
import { ContainerHeader, Buttons, Logo } from "./HeaderStyles"
import { AiOutlineHome, AiOutlineUser, AiOutlineCoffee, AiOutlineMail, AiOutlineLaptop   } from "react-icons/ai";

    const Header = () => {
    const navigate = useNavigate ()

    return (
        <ContainerHeader>
            {/* <Logo>           
                 <h1> Gustavo Monteiro </h1>
            </Logo> */}
            <Buttons>
            <AiOutlineHome onClick={()=> goToHome(navigate)} />
            <AiOutlineUser onClick={()=> goToEducation(navigate)} />
            <AiOutlineCoffee onClick={()=> goToSkills(navigate)} />
            <AiOutlineLaptop onClick={()=> goToPortfolio(navigate)} />
            <AiOutlineMail onClick={()=> goToContact(navigate)} />
            </Buttons>
        </ContainerHeader>


    )
}

export default Header; 