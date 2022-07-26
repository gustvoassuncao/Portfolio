import React from "react";
import {useNavigate} from "react-router-dom"
import {goToAbout } from "../../routes/coordinator"

export const Header = () => {
    const navigate = useNavigate ()

    return (
        <div>
            <button>Sobre</button>
            <button>Skills</button>
            <button>Projetos</button>
            <button>Contato</button>
        </div>


    )
}