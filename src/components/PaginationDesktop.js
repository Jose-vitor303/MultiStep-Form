import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SidebarBg from "../assets/bg-sidebar-desktop.svg";


const PaginationDesktop = () =>{

    const navigate = useNavigate()

    return( 
         <NumberList style={{position : "absolute"}}>

            <Section>
                <li onClick={()=>navigate("/")}>1</li>
                <div>
                    <NumberStep>STEP 1</NumberStep>
                    <Step>YOUR INFO</Step>
                </div>
               
            </Section>
            
            <Section>
                <li onClick={()=> navigate("/choice-plan")}>2</li>
                <div>
                    <NumberStep>STEP 2</NumberStep>
                    <Step>SELECT PLAN</Step>
                </div>
            </Section>

            <Section>
                <li onClick={()=> navigate("/pick-add-on")}>3</li>
                <div>
                    <NumberStep>STEP 3</NumberStep>
                    <Step>ADD-ONS</Step>
                </div>
            </Section>

            <Section>
                <li onClick={()=> navigate("/summary")}>4</li>

                <div>
                    <NumberStep>STEP 4</NumberStep>
                    <Step>SUMMARY</Step>
                </div>
            </Section>
            
         </NumberList>
    )

}


const NumberList = styled.ul`
    
    display: flex;
    flex-direction: column;
    background-image: url(${SidebarBg});
    background-size: cover;
    background-position: center;
    background-position-y: bottom;
    background-repeat: no-repeat;
    padding: 1.9rem 2rem;
    margin-left: 0.8rem;
    margin-top: 0.9rem;
    border-radius: 14px;
    height: 84%;
    width: 240px;

    li{
        text-decoration: none;
        border-radius: 50%;
        border: 1px solid white;
        margin-right: 0.9rem;
        font-size: 12px;
        padding: 0.5rem 0.8rem;
        cursor: pointer;
        color:  ${props => props.theme.colors.white};
    }

    li{
        margin-bottom: 2.5rem;
    }
    
    `

const Section = styled.section`

    display: flex;
    flex-direction: row;

`

const NumberStep = styled.p`

    color:  ${props => props.theme.colors.coolgray};
    font-weight: 400;
    margin-bottom: 0.3rem;

`

const Step = styled.span`

    color:  ${props => props.theme.colors.white};
    font-weight: bolder;
    letter-spacing: 1.3px;
    /* font-size: medium; */
`

export default PaginationDesktop;
