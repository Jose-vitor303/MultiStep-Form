import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SidebarBg from "../assets/bg-sidebar-mobile.svg";


const Pagination = () =>{

    return(
    <nav style={{position : "relative"}}>
        <NumberList>
            <Link to='/'>1</Link>
            <Link to='/choice-plan'>2</Link>
            <Link to='/pick-add-on'>3</Link>
            <Link to='/summary'>4</Link>
        </NumberList>
    </nav>
    )
}

export default Pagination;


const NumberList = styled.ul`
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    background-image: url(${SidebarBg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 1.5rem;
    font-weight: 700;
    height: 20vh;


    a:nth-child(n){
        text-decoration: none;
        border-radius: 50%;
        border: 1px solid white;
        margin-right: 0.9rem;
        font-size: 12px;
        padding: 0.5rem 0.8rem;
        cursor: pointer;
        color:  ${props => props.theme.colors.white};
    }
    
    `

