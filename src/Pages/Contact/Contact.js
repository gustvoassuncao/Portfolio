import React from "react";
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import { ContainerGeral } from "./ContactStyled"
import { Title  } from "../../Pages/Portfolio/PortfolioStyled"
import emailjs from "emailjs-com";

    const Contact = () => {


        function sendEmail(e) {
            e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_eur8pmc', e.target, 'cBfMQovSUC6gqQA1r')
            .then((result) => {
                console.log(result.text);
                alert("Em breve te retorno, obrigado!");
            }, (error) => {
                alert(error.text);
            });
            e.target.reset()
        }


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
                    <form onSubmit={sendEmail}>
                        <input type='text' 
                            placeholder="Nome"
                            className='input-nome' 
                            name='user_name'
                            required
                        />
                        <input type='email' 
                            placeholder="Email" 
                            className='input-email'
                            name='user_email' 
                            required
                        />
                        <textarea placeholder="Mensagem" name="message" className='textarea-mensagem'
                        required></textarea>
                        <button className='btn-contato' type='submit' value="Send" >ENVIAR<i class="uil uil-message"></i></button>
                        </form>
                    </div>
            </div>
            </ContainerGeral>
        )
    }   

export default Contact; 