import React, { useEffect, useState } from "react";
import theme from "../../components/ThemeStyled";
import { ThemeProvider} from "styled-components";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../components/WindowSize";
import styled from "styled-components";
import { Title, SubTitle, Content, Box, BoxPagination, ButtonNextDesktop, ButtonPrevDesktop, Div } from "../../components/GlobalStyle";
import Pagination from "../../components/Pagination";
import PaginationDesktop from "../../components/PaginationDesktop";

const Summary = () =>{


    const hasBackButton = true;
    const hasNextButton = true;
    const size = useWindowSize();
    const navigate = useNavigate();
    const [ items, setItems ] = useState([]);
    const [ adicional, setAdicional ] = useState([])
    const prices = [];

  
    let newElements = adicional.filter((element) => element.price !== null)

    newElements.forEach(element => prices.push(element.price));

    const sumPrices = prices.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    
    

    useEffect(()=>{

      const adicional = JSON.parse(localStorage.getItem('options'))

      setAdicional(adicional);

    }, [])

    useEffect(()=>{
      const items = JSON.parse(localStorage.getItem('items'))

      setItems([items]);

    }, [])

    return (<>
    
        <ThemeProvider theme={theme}>
            {size.width >= 1100 ? (

              <Box>
                <BoxPagination>
                  <PaginationDesktop />
                </BoxPagination>

                <Resume>
                  <Title>Finishing up</Title>
                  <SubTitle>Double-check everthing looks OK before confirming</SubTitle>
                  {items.map((item, index)=>{
                    return(
                      <React.Fragment key={index}>
                        <Buys key={index}>
                          <div style={{display: "flex", justifyContent: "space-between"}}>
                            <h3>{item[0]} {item[1] ? "(Yearly)" : "(Monthly)"}</h3>
                            <span>${item[1] ? item[2] : item[3]}{item[1] ? "/yr" : "/mo"}</span>
                          </div>

                          {newElements.map((element, index)=>{
                            return(
                            <div key={index} style={{display: "flex", justifyContent: "space-between"}}>
                              <Span>{element.title}</Span>
                              <SmallPrice>+${element.price}{element.price < 10 ? "/mo" : "/yr"}</SmallPrice>
                            </div>
                            )
                          })}
                        </Buys>
                        <div style={{display : "flex", justifyContent : "space-between", padding : "0 1.8rem", marginTop: "1.4rem"}}>
                           <Span>Total (per {item[1] ? "year" : "month"})</Span>
                            <TotalPrice>${item[1] ? item[2] + sumPrices : item[3] + sumPrices}{item[1] ? "/yr" : "/mo"}</TotalPrice> 
                        </div>
                         
                      </React.Fragment>
                      )

                  })}

                    <div style={{display : "flex", justifyContent : "space-between", marginTop : "8rem", width : "100%"}}>
                       <ButtonPrevDesktop  onClick={()=> navigate("/pick-add-on")}>Go back</ButtonPrevDesktop>
                       <ButtonNextDesktop  onClick={()=> navigate("/confirm")}>Confirm</ButtonNextDesktop>
                    </div>
               
                </Resume>
          
              </Box>

            ):(
              <>

                <Pagination/>

                <Div>
                  <Content>
                    <Title>Finishing up</Title>
                    <SubTitle>Double-check everthing looks OK before confirming</SubTitle>
                    {items.map((item, index)=>{

                      return(
                      <React.Fragment key={index}>
                        <BuysMobile key={index}>
                          <div style={{display: "flex", justifyContent: "space-between"}}>
                            <h3>{item[0]} {item[1] ? "(Yearly)" : "(Monthly)"}</h3>
                            <span>${item[1] ? item[2] : item[3]}{item[1] ? "/yr" : "/mo"}</span>
                          </div>
                          {newElements.map((element, index)=>{

                              return(
                              <div  key={index} style={{display: "flex", justifyContent: "space-between"}}>
                                <Span>{element.title}</Span>
                                <SmallPrice>+${element.price}{element.price < 10 ? "/mo" : "/yr"}</SmallPrice>
                              </div>
                              )
                            })}
                        </BuysMobile>

                        <div style={{display : "flex", justifyContent : "space-between", padding : "1rem", marginTop: "1rem"}}>
                           <Span style={{color : ""}}>Total (per {item[1] ? "year" : "month"})</Span>
                            <TotalPrice>+${item[1] ? item[2] + sumPrices : item[3] + sumPrices}{item[1] ? "/yr" : "/mo"}</TotalPrice> 
                        </div>
                      </React.Fragment>
                      )
                    })}
                   
                  </Content>

                </Div>

                <Footer>
                  {hasBackButton === true && (
                  <Button type="text" onClick={()=> navigate("/pick-add-on")}>Go Back</Button>
                  )}

                  {hasNextButton === true && (
                      <Button type="Submit" onClick={()=> navigate("/confirm")}>Confirm</Button> 
                  )}
                </Footer>
              </>
            )}
           
        </ThemeProvider>
    </>)

}


export default Summary;


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

const Footer = styled.footer`

  background-color: red;
  width: 100%;
  height: 15vh;
  position: relative;
  margin-top: 30rem;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction : row;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.white};

`

const Resume = styled.section`

    display: flex;
    flex-direction: column;
    padding: 2rem 8rem;
`


const Buys = styled.section`

    
    background-color:  hsl(217, 100%, 97%);
    margin-bottom: 0.3rem;
    font-weight: 600;
    border-radius: 8px;
    padding: 1.4rem 2rem;
    height: 50vh;
    color: ${props => props.theme.colors.marineBlue};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
 
`



const Span = styled.span`

    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.colors.coolgray};
`

const SmallPrice = styled.p`
      font-weight: 500;
      font-size: 14px;
`

const TotalPrice = styled.span`

      font-size: 1.3rem;
      font-weight: 700;
      color: ${props => props.theme.colors.purplishBlue};

`

const BuysMobile = styled.div`

        
    background-color:  hsl(217, 100%, 97%);
    font-weight: 600;
    border-radius: 8px;
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.marineBlue};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div{
      padding: 1rem;
    }

`