import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, BoxPagination, Content, ButtonNextDesktop, ButtonPrevDesktop, Div } from "../../components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Title, SubTitle } from "../../components/GlobalStyle";
import theme from "../../components/ThemeStyled";
import Pagination from "../../components/Pagination";
import PaginationDesktop from "../../components/PaginationDesktop";
import styled from "styled-components";
import dataPlans from "../../data/PlansData";
import Switch from "../../components/Switch/Switch";
import useWindowSize from "../../components/WindowSize";


const Plan = ()=>{

    const size = useWindowSize();
    const navigate = useNavigate();
    let planSelected;

    const [border, setBorder] = useState(
        new Array(dataPlans.length).fill(false)
      );

    const [backgroud, setBackground] = useState(
        new Array(dataPlans.length).fill(false)
      );

    const [ isToggled, setIsToggle ] = useState(false)
    const hasNextButton = true;
    const hasBackButton = true;

    const refs = {}

    dataPlans.forEach((item) =>{
        refs[item.id] = React.createRef(null)

    })



    function handleClick(pos, period, yearPrice, monthPrice, color){
       
      
        const updatePosition = backgroud.map((item, index)=> index === pos ? true : false);
        const updateBackground = updatePosition.map((item) => item === true ? color : "white")
        const borderPosition = border.map((item, index)=> index === pos ? true : false);
        const borderUpdate = borderPosition.map((item) => item === true ? "hsl(243, 100%, 62%)" : "hsl(229, 24%, 87%)")
        
        setBackground(updateBackground);
        setBorder(borderUpdate);


        var position = Object.values(refs);

        position.forEach((element, i) =>{

           
            if(pos === i){

                planSelected = element.current.textContent;
                let items = [planSelected, period, yearPrice, monthPrice];
                localStorage.setItem("items", JSON.stringify(items));
             
            }
        })

    }

    
    return(
        <ThemeProvider theme={theme}>
            {size.width >= 1100 ? (
                <Box>
                    <BoxPagination>
                        <PaginationDesktop />
                    </BoxPagination>

                    <BoxPlan>
                        <Title>Select your Plan</Title>
                        <SubTitle>You have the option of monthly or yearly billing</SubTitle>

                        <ul>
                            {dataPlans.map((dates, index)=>{
                                
                                const {type, monthPrice, yearPrice, image, id, color} = dates;
                                return(
                                <SectionDesktop style={{background :`${backgroud[index]}`, border : `1px solid ${border[index]}`}}  onClick={()=>handleClick(index, isToggled, yearPrice, monthPrice, color)}>
                                    <img src={image} alt="arcade" />
                                    <div>
                                        <Phase ref={refs[dates.id]}  key={id}>{type}</Phase>
                                        <Phrase>${isToggled ? yearPrice : monthPrice}{isToggled ? "/yr" : "/mo"}</Phrase> 
                                        {isToggled === true && (
                                        <div style={{color : "hsl(213, 96%, 18%)", marginTop : "0.5rem"}}>2 months free</div>
                                    )}      
                                    </div>
                                </SectionDesktop>
                                )                               
                            })}
                        </ul>

                        <Change style={{marginTop : "1rem", width: "97%"}}>
                            <p style={{color : isToggled ? "hsl(231, 11%, 63%)" : "hsl(213, 96%, 18%)"}}>Monthly</p>
                            <Switch isToggled={isToggled} onToggle={()=> setIsToggle(!isToggled)}/>
                            <p style={{color : isToggled ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"}}>Yearly</p>
                        </Change>

                        <div style={{display : "flex", justifyContent : "space-between", marginTop : "4.4rem"}}>
                            <ButtonPrevDesktop onClick={()=> navigate("/")}>Go back</ButtonPrevDesktop>
                            <ButtonNextDesktop onClick={()=> navigate("/pick-add-on")}>Next Step</ButtonNextDesktop>
                        </div>
                      
                    </BoxPlan>
                </Box>
            ): (
                <>
                <Pagination/>
             
                <Div>
                    <Content>
                        <Title>Select your Plan</Title>
                        <SubTitle>You have the option of monthly or yearly billing</SubTitle>

                        <ul>
                            {dataPlans.map((dates, index)=>{

                                const { yearPrice,monthPrice, type, image, id, color} = dates;
                                return(

                                    <Section style={{background :`${backgroud[index]}`, border : `1px solid ${border[index]}`}}  onClick={()=>handleClick(index, isToggled, yearPrice, monthPrice, color)}>
                                        <img src={image} alt="arcade" />
                                        <div>
                                            <Phase ref={refs[dates.id]}  key={id}>{type}</Phase>
                                            <Phrase>${isToggled ? yearPrice : monthPrice}{isToggled ? "/yr" : "/mo"}</Phrase> 
                                                {isToggled === true && (
                                                <span>2 months free</span>
                                            )}      
                                        </div>
                                    </Section>
                                )
                            })}
                        
                        </ul>

                        <Change>
                            <p style={{color : isToggled ? "hsl(231, 11%, 63%)" : "hsl(213, 96%, 18%)"}}>Monthly</p>
                            <Switch isToggled={isToggled} onToggle={()=> setIsToggle(!isToggled)}/>
                            <p style={{color : isToggled ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"}}>Yearly</p>
                        </Change>
                    </Content>
                </Div>

                    <Footer>
                        {hasBackButton === true && (
                        <Button type="text" onClick={()=> navigate("/")}>Go Back</Button>
                        )}
                        
                        {hasNextButton === true && (
                            <Button type="Submit" onClick={()=> navigate("/pick-add-on")}>Next Step</Button> 
                        )}
                    </Footer>

                </>
                
            )}
            

           
        </ThemeProvider>
    )

}


export default Plan;


const BoxPlan = styled.section`
     padding: 2rem 3.5rem; 

     ul{
        display: flex;

     }
`

const Phrase = styled.span`

    font-family: 'Ubuntu', sans-serif; 
    font-weight: 400;
    font-size: 16px;
    border-radius: 4px;
    color:  ${props => props.theme.colors.coolgray};
`

const Phase = styled.li`

    margin-bottom: 0.3rem;
    font-weight: 500;
    color: ${props => props.theme.colors.marineBlue};
    list-style: none;
`

const Section = styled.section`

    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.lightgray};
    
    div{
        margin-left: 0.8rem;
        display: flex;
        flex-direction: column;
    }

    div span:nth-child(3){
        margin-top: 0.3rem;
        color:  ${props => props.theme.colors.marineBlue};
    }

`

const SectionDesktop = styled.section`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    margin-right: 1rem;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.lightgray};
    width: 120px;
    height: 140px;
    padding: 1rem;
    cursor: pointer;
`

const Footer = styled.footer`

  background-color: red;
  width: 100%;
  height: 15vh;
  position: relative;
  margin-top: 35rem;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction : row;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.white};

`


const Button = styled.button`

    :nth-child(1){
      color: ${props => props.theme.colors.coolgray};
      background-color:  ${props => props.theme.colors.white};
      font-weight: 500;
      margin-left: 0.8rem;

      :hover{
        color: ${props => props.theme.colors.white};
        background-color:  ${props => props.theme.colors.coolgray};
        border: 1px solid ${props => props.theme.colors.white};
      }
    }

    padding: 1rem 1.5rem;
    border: 0;
    margin-right: 1rem;
    font-weight: 500;
    border-radius: 6px;
    font-weight: lighter;
    cursor: pointer;
    font-family: 'Ubuntu', sans-serif;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.marineBlue};

    :hover{
      color: ${props => props.theme.colors.marineBlue};
      background-color:  ${props => props.theme.colors.white};
      border: 1px solid ${props => props.theme.colors.marineBlue};
    }

`

const Change = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.theme.colors.magnolia};
    margin-bottom: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;


    p{
        font-weight: 500;
        color: ${props => props.theme.colors.coolgray};
    }

`

