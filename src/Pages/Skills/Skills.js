import React from "react";
import { SkillsContainer } from "./SkillsStyled"
import { Title } from "../Portfolio/PortfolioStyled"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import html from "../../assets/Tech/html.png"
import css from "../../assets/Tech/css.png"
import js from "../../assets/Tech/js.png"
import ts from "../../assets/Tech/ts.png"
import aws from "../../assets/Tech/aws.png"
import jest from "../../assets/Tech/jest.png"
import firebase from "../../assets/Tech/firebase.png"
import mysql from "../../assets/Tech/mysql.png"
import git from "../../assets/Tech/git.png"
import react from "../../assets/Tech/react.png"
import figma from "../../assets/Tech/figma.png"
import mongo from "../../assets/Tech/mongo.png"
import nextjs from "../../assets/Tech/nextjs.png"
import canva from "../../assets/Tech/canva.png"
import sass from "../../assets/Tech/sass.png"
import styled from "../../assets/Tech/styled.png"
import postman from "../../assets/Tech/postman.png"
import material from "../../assets/Tech/material.png"
import { CalendarViewWeekSharp } from "@mui/icons-material";

    const Skills = () => {
        
    const techs = [

        {
            img:html ,
        }, 
        {
            img:css 
        }, 
        {
            img:js 
        }, 
        {
            img:ts 
        }, 
        {
            img:react 
        }, 
        {
            img:aws 
        }, 
        {
            img:jest 
        }, 
        {
            img:firebase 
        }, 
        {
            img:mysql 
        }, 
        {
            img:git 
        }, 
        {
            img:mongo 
        },
        {
            img:nextjs 
        },
        {
            img: postman
        },
        {
            img:sass 
        },
        {
            img:styled 
        }, 
        {
            img:material 
        }, 
        {
            img:figma 
        },
        {
            img:canva 
        }
        
    ]


    return (
        <>
        <Title>
        <h2>Tecnologias</h2>
        </Title>
        <SkillsContainer>
        {techs.map((item, index) => (
        <Card  className="ConfCards" key={item.index}>
          <CardMedia
            component="img"
            image={item.img}
            alt="tecnologias"
          />
        </Card>
        ))}      
        </SkillsContainer>
        </>
    )
}

export default Skills; 