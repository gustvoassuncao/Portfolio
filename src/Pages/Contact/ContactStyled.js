import styled from "styled-components";

export const ContainerGeral = styled.div`
color: white;

.contato-container{
    box-sizing: border-box;
    display: flex;
    position: absolute;
    top: 15%;
    margin-left: 20%;
    flex-wrap: wrap;
    max-width: 820px;
    padding: 1em;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(3px);
    border-radius: 20px;
    box-shadow: 1px 3px 5px 1px #6833e4;
    &:hover {
      box-shadow: 1px 3px 5px 2px #04d361;
    }
}

.formas-contato{
    width: 280px;
    height: 120px;
    border-radius: 10px;
    margin-right: 20px;
    color: white;
}

.telefone, .email{
    display: flex;
    align-items: center;
    padding: 5px 0px;
}

.email svg, .telefone svg{
    font-size: 25px;
    color: #04d361;
    margin-right: 16px;
}

.email svg{
    font-size: 27px;
    /* margin-right: 10px; */
}

.titulo{
    font-weight: 600;
    font-size: 14px;
    margin-bottom: -0px;
}

p {
    font-size: 15px;
}

.form-contato{
    width: 60%;
    box-sizing: border-box;
    
}

.input-nome, .input-email{
    width: 80%;
    height: 50px;
    outline: 0;
    font-size: 17px;
    padding: 0px 15px;
    margin-bottom: 15px;
}

.input-nome::placeholder, .input-email::placeholder, .textarea-mensagem::placeholder{
    color: white;
    font-weight: 500;
}


.input-nome, .input-email, .textarea-mensagem{
    border: 0;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    color: white;
}

.textarea-mensagem{
    height: 190px;
    width: 80%;
    font-size: 17px;
    padding: 8px 15px;
    outline: 0;
    resize:vertical;
}

.btn-contato{
    box-sizing: border-box;
    border-radius: 5px; 
    border: 2px solid #6833e4; 
    margin-top: 30px; 
    cursor: pointer;
    width: 85%; 
    height: 40px;
    background-color: black; 
    color: white; 
    &:hover {
        background-color: #6833e4; 
    }
}



@media screen and (max-width:1000px){
    .contato-container{ 
        width: 75%;
    }

    .titulo{
    font-weight: 600;
    font-size: 13px;
    margin-bottom: -0px;
}

p {
    font-size: 13px;
}


    .form-contato{
        width: 40%;
        
    }

    .input-email, .input-nome{
        width: 30%;
        font-size: 16px;
    }

    .textarea-mensagem{
        width: 70%;
        font-size: 16px;
    }
}

@media screen and (max-width:950px){

    .contato-container{ 
        width: 75%;
    }

    .titulo{
    font-weight: 600;
    font-size: 13px;
    margin-bottom: -0px;
}

p {
    font-size: 13px;
}

    .input-email, .input-nome{
        width: 30%;
        font-size: 16px;
    }

    .textarea-mensagem{
        width: 70%;
        font-size: 16px;
    }
}

@media screen and (max-width:800px){

    .contato-container{ 
        width: 75%;
    }

    .titulo{
    font-weight: 600;
    font-size: 13px;
    margin-bottom: -0px;
}

p {
    font-size: 13px;
}


    .formas-contato{
        margin-left: 40px;
    }

    .input-email, .input-nome{
        width: 30%;
        font-size: 16px;
    }

    .textarea-mensagem{
        width: 70%;
        font-size: 16px;
    }
}

@media screen and (max-width:768px) {

    .contato-container{ 
        width: 75%;
    }

    .titulo{
    font-weight: 600;
    font-size: 13px;
    margin-bottom: -0px;
}

p {
    font-size: 13px;
}

    .formas-contato{
        margin-left: 2%;
        margin-right: 0px;

    }

    .form-contato{
        width: 80%;
        margin-left: 6%;
        padding-bottom: 20px;
    }

    .input-nome, .input-email{
        width: 90%;
        height: 40px;
        font-size: 16px;
        padding: 0px 15px;
    }

    .input-nome{
        margin-bottom: 20px;
    }

    .textarea-mensagem{
        width: 90%;
        height: 140px;
    }

    .btn-contato{
        font-size: 16px;
        width: 100%;
    }
}
`