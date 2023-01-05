import React, { useEffect, useState } from "react";
import theme from "../../components/ThemeStyled";
import { Content, Div } from "../../components/GlobalStyle";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../components/WindowSize";
import { ThemeProvider } from "styled-components";
import Pagination from "../../components/Pagination";
import styled from "styled-components";
import data from "../../data/pickAddData"
import PaginationDesktop from "../../components/PaginationDesktop";
import { Title, SubTitle, Box, BoxPagination, ButtonNextDesktop, ButtonPrevDesktop } from "../../components/GlobalStyle";

const PickAdd = ()=>{

    let add = {};
    let [items, setItems] = useState([{"title" : null, "price" : null}]);
     // eslint-disable-next-line
    const [period, setPeriod] = useState();



    let time = JSON.parse(localStorage.getItem('items'));

    useEffect(()=>{

      localStorage.setItem("options", JSON.stringify(items));

    },[items])

    useEffect(()=>{

      time.forEach((element,i) => {
          

        if(i === 1){
          setPeriod(element)
        }
      });
      
    },[time])
    

    data.forEach((item)=> {
       add[item.id] = React.createRef(null)
    })

    const [border, setBorder] = useState(
      new Array(data.length).fill(false)
    );

    const [background, setBackground] = useState(
      new Array(data.length).fill(false)
    );
    const [checkedState, setCheckedState] = useState(
      new Array(data.length).fill(false));

    const hasBackButton = true;
    const hasNextButton = true;
    const navigate = useNavigate();
    const size = useWindowSize();


    const handleOnChange = (position, color, title, price) =>{
  
      const newItems = items.slice();
      newItems.push({"title" : title, "price" : price})

      setItems(newItems);


      const updateChecked = checkedState.map((item, index)=> index === position ? !item : item);
      const updateBackground = updateChecked.map((item)=> item === true ?  color : "white");
      const updateBorder = updateChecked.map((item)=> item === true ? "hsl(243, 100%, 62%)" : "hsl(229, 24%, 87%)")
      
      setCheckedState(updateChecked);
      setBackground(updateBackground);
      setBorder(updateBorder);
    }

    return(
     <>
        <ThemeProvider theme={theme}>
            {size.width >= 1100 ? (

              <Box> 
                  <BoxPagination>
                    <PaginationDesktop />
                  </BoxPagination>

                  <BoxOptions> 
                    <Title>Pick add-ons</Title>
                    <SubTitle>Add-ons help enhance your gaming experience</SubTitle>
                    {data.map((Items, index)=>{
    
                        const {Title, Subtitle, monthPrice, yearPrice, color, id} = Items;
                        return(
                        <article key={index}>       
                            <ul>
                                <Section style={{background : `${background[index]}`, border : `1px solid ${border[index]}`}}>
                                  <input type="checkbox" ref={add[id]} checked={checkedState[index]} onChange={()=> handleOnChange(index, color, Title, period ? yearPrice : monthPrice, id)}/>
                                  <div>
                                    <Option>{Title}</Option>     
                                    <Describe>{Subtitle}</Describe>
                                  </div>
                                  <Price>+${period ? yearPrice : monthPrice}{period ? "/yr" : "/mo"}</Price>
                                </Section>  
                            </ul>                 
                        </article>
                        )
                    })}

                       
                    <div style={{display : "flex", justifyContent : "space-between", marginTop : "4.4rem"}}>
                          <ButtonPrevDesktop  onClick={()=> navigate("/choice-plan")}>Go back</ButtonPrevDesktop>
                          <ButtonNextDesktop onClick={()=> navigate("/summary")}>Next Step</ButtonNextDesktop>
                    </div>

                  </BoxOptions>

              </Box>

            ): (
              <>
                <Pagination/>

                <Div>
                  <Content>
                    <Title>Pick add-ons</Title>
                    <SubTitle>Add-ons help enhance your gaming experience</SubTitle>
                    {data.map((Items, index)=>{
    
                        const {Title, Subtitle, monthPrice, yearPrice, color, id} = Items;
                        return(
                        <article key={index}>       
                            <ul>
                                <Section style={{background : `${background[index]}`, border : `1px solid ${border[index]}`}}>
                                  <input type="checkbox" ref={add[id]} checked={checkedState[index]} onChange={()=> handleOnChange(index, color, Title, period ? yearPrice : monthPrice, id)}/>
                                  <div>
                                    <Option>{Title}</Option>     
                                    <Describe>{Subtitle}</Describe>
                                  </div>
                                  <Price>+${period ? yearPrice : monthPrice}{period ? "/yr" : "/mo"}</Price>
                                </Section>  
                            </ul>                 
                        </article>
                        )
                    })}
                  </Content>

                </Div>
    
                <Footer>
                  
                    {hasBackButton === true && (
                    <Button type="text" onClick={()=> navigate("/choice-plan")}>Go Back</Button>
                    )}
                
                    {hasNextButton === true && (
                        <Button type="Submit" onClick={()=> navigate("/summary")}>Next Step</Button> 
                    )}
                </Footer>
              </>
            

            )}
             
        </ThemeProvider>
    </>)


}

export default PickAdd;


const Section = styled.section`

    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.lightgray};

div{
    margin-left: 0.8rem;
    width: 100%;
}
`


const Option = styled.li`

    margin-bottom: 0.3rem;
    font-weight: 500;
    color: ${props => props.theme.colors.marineBlue};
    list-style: none;
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


const Describe = styled.span`

    color:  ${props => props.theme.colors.coolgray};
    font-size: 14px;
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

const BoxOptions = styled.main`

    padding: 1.5rem 5rem;
    width: 80vh;
    display: flex;
    flex-direction: column;
    
`

const Price = styled.span`

    font-weight: 500;
    color : hsl(243, 100%, 62%);
    
`