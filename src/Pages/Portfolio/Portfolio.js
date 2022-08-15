import React from "react";
import poke from '../../assets/poke.png';
import photo from '../../assets/photo.png';
import ifuture from '../../assets/ifuture.png';
import labex from '../../assets/labex.png';
import financas from '../../assets/financas.png';
import astro from '../../assets/astro.png';
import naruto from '../../assets/naruto.png';
import landing from '../../assets/landing.png';
import Mars from '../../assets/Mars.png';
import List from "./list";

import { Title, CardText } from "./PortfolioStyled"

    const Portfolio = () => {
      const projects = [
        {
            id: 1,
            image: poke,
            title: 'Pokedex',
            description: ' React com axios para requisição de API do pokemon para listar os pokemons e mostrar tela com detalhes pelo ID',

        }, 
        {
          id: 2,
          image: ifuture,
          title: 'Test',
          description: 'React com axios para requisição de API do pokemon para listar os pokemons e mostrar tela com detalhes pelo ID',

      },
      {
        id: 3,
        image: labex,
        title: 'LabeX',
        description: 'Plataforma de gerenciamento de viagens espaciais, contendo dois tipos de acesso: um público e uma privado. REACT|API|STYLED-COMPONENTS',

    },
    {
      id: 4,
      image: financas,
      title: 'Test',
      description: 'React com axios para requisição de API do pokemon para listar os pokemons e mostrar tela com detalhes pelo ID',

  },
  {
    id: 5,
    image: astro,
    title: 'Test',
    description: 'React com axios para requisição de API do pokemon para listar os pokemons e mostrar tela com detalhes pelo ID',

},
{
  id: 6,
  image: naruto,
  title: 'Test',
  description: 'React com axios para requisição de API do pokemon para listar os pokemons e mostrar tela com detalhes pelo ID',

},
{
  id: 7,
  image: Mars,
  title: 'Test',
  description: 'React com axios para requisição de API do pokemon para listar os pokemons e mostrar tela com detalhes pelo ID',

},
{
  id: 8,
  image: landing,
  title: 'Test',
  description: 'React com axios para requisição de API do pokemon para listar os pokemons e mostrar tela com detalhes pelo ID',

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
