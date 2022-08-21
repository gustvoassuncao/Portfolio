import React from "react";
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import './contato.css'
import { ContainerGeral } from "./ContactStyled"
import { Title  } from "../../Pages/Portfolio/PortfolioStyled"
    const Contact = () => {
        return (
            <ContainerGeral>
            <Title>
                <h2>Contato</h2>
            </Title>
            <div className="contato-container">
                    <div className="formas-contato">
                        <div className="telefone">
                            <FiPhoneCall />
                            <div className="dados-telefone"> 
                                <p className='titulo'>Me ligue</p>
                                <p>82 9 9684-3558</p>
                            </div>
                        </div>
                        <div className="email">
                            <MdOutlineMarkEmailRead />
                            <div className="dados-email">
                                <p className='titulo'>Email</p>
                                <p>monteirocontacto@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-contato">
                    <form action="https://formsubmit.co/688f70733aade9822bfd695d8cec0041" method="POST">
                        <input type='text' 
                            placeholder="Nome"
                            className='input-nome' 
                            name='name'
                            required
                        />
                        <input type='email' 
                            placeholder="Email" 
                            className='input-email'
                            name='email' 
                            required
                        />
                        <textarea placeholder="Mensagem" className='textarea-mensagem'
                        required name='message'></textarea>
                        <button className='btn-contato' type='submit'>ENVIAR<i class="uil uil-message"></i></button>
                        </form>
                    </div>
            </div>
            </ContainerGeral>
        )
    }   

export default Contact; 