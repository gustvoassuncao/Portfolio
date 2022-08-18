import React from "react";
import poke from '../../assets/poke.png';
import ifuture from '../../assets/ifuture.png';
import labex from '../../assets/labex.png';
import financas from '../../assets/financas.png';
import astro from '../../assets/astro.png';
import naruto from '../../assets/naruto.png';
import zuma from '../../assets/zuma.png';
import Mars from '../../assets/Mars.png';
import List from "./list";

import { Title, CardText } from "./PortfolioStyled"

    const Portfolio = () => {
      const projects = [
        {
            id: 1,
            image: poke,
            title: 'Pokedex',
            description: ' Consumo de API do pokemon para listar os pokemons e mostrar tela com detalhes pelo ID de cada pokemon. REACTJS | STYLED-COMPONENTS',
            git: "https://github.com/gustavomonteirodev/Pokedex",
            live: "https://tomars.surge.sh/" 
        }, 
        {
          id: 2,
          image: ifuture,
          title: 'Ifuture Foods',
          description: 'Aplicação inspirada no ifood contendo todas as funcionaldidades consumindo API. É necessário realizar login. REACTJS | STYLED-COMPONENTS',
          git: "https://github.com/gustavomonteirodev/Ifuture-foods",
          live: "https://ifuture-group3.surge.sh/" 
      },
      {
        id: 3,
        image: labex,
        title: 'LabeX',
        description: 'Plataforma de viagens espaciais consumindo API, contendo dois tipos de acesso: um público e uma privado. REACTJS | STYLED-COMPONENTS',
        git: "https://github.com/gustavomonteirodev/LabeX",
        live: "https://github.com/gustavomonteirodev/LabeX/blob/main/url" 
    },
    {
      id: 4,
      image: financas,
      title: 'Controle de finanças',
      description: 'Aplicação web, o usuário pode adicionar contas a pagar e valor de entrada para serem somados. REACTJS | STYLED-COMPONENTS',
      git: "https://github.com/gustavomonteirodev/controle-financas",
      live: "https://control-financas.surge.sh/" 
  },
  {
    id: 5,
    image: astro,
    title: 'Astromatch',
    description: 'Baseado no Tinder. Consumindo API, o usuário pode dar like/unlike,tem uma lista de matches e pode deletar. REACTJS | STYLED-COMPONENTS',
    git: "https://github.com/gustavomonteirodev/Astromatch",
    live: "https://astromatch-argument.surge.sh/" 
},
{
  id: 6,
  image: naruto,
  title: 'Tela de Naruto',
  description: 'Tela simulação de game. Foi meu primeiro projeto utilizando JS e é um dos meus preferidos principalmente por eu ser tão fã. HTML | CSS | JS',
  git: "https://github.com/gustavomonteirodev/Projeto-Naruto-Dev-Week",
  live: "https://gustavomonteirodev.github.io/Projeto-Naruto-Dev-Week/" 
},
{
  id: 7,
  image: Mars,
  title: ' ToMars',
  description: 'E-commerce de loja de naves espaciais, com filtro por valor e nome, carrinho e listagem de produtos. REACTJS | STYLED-COMPONENTS',
  git: "https://github.com/gustavomonteirodev/Ecommerce--ToMars",
  live: "https://tomars.surge.sh/" 
},
{
  id: 8,
  image: zuma,
  title: 'Zuma Bot',
  description: 'Clone da Rafa Ballerine - Foi uma das minhas primeiras landing pages e é um arquivo bem estruturado com links clicáveis. HTML| CSS',
  git: "https://github.com/gustavomonteirodev/LandingPage-Zuma",
  live: "https://gustavomonteirodev.github.io/LandingPage-Zuma/" 

},
    ]

    return (
          <>
            <Title>
            <h2>Portfolio</h2>
            </Title>
            <List itens={projects} />
          </>
    )
    }

  export default Portfolio;
