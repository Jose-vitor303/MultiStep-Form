import React, { useState } from "react";
import styled from "styled-components";
import useWindowSize from "../../components/WindowSize";
import PaginationDesktop from "../../components/PaginationDesktop";
import Pagination from "../../components/Pagination";
import { useNavigate } from "react-router-dom";
import { Title, SubTitle, Box, BoxPagination, Content, ButtonDesktopNext, Div, Footer} from "../../components/GlobalStyle";

const Info = () =>{

    const size = useWindowSize();
    const navigate = useNavigate();
    const hasNextButton = true;
    // eslint-disable-next-line
    const [ emptyValue, setEmptyValue] = useState(false);
    const [ form, setForm] = useState({

        name : "",
        email : "",
        number : "",
    })

    const handleSubmit = (event) =>{

        event.preventDefault();

        let emptyValues = Object.values(form).some(object => object === null)

        emptyValues === true ? console.log("nada") : navigate("/choice-plan")

        setEmptyValue(emptyValues);
    }

    function handleChange(event){
        let newProp = form;
        newProp[event.target.name] = event.target.value;

        setForm({...newProp})

        console.log(form);
    }


    return (
        <>

            {size.width >= 1100 ? (
                <Box>
                    <BoxPagination>
                        <PaginationDesktop />
                    </BoxPagination>
                  
                    <BoxInputs>
                        <Title>Personal Info</Title>
                        <SubTitle>Please provide your name, email, andress and phone number</SubTitle>

                        <Form onSubmit={handleSubmit}>
                            <Identify>Name</Identify>
                            <Input type="text" name="name" required placeholder="e.g Stephen King" onBlur={handleChange}  />
                            <Identify>Email Andress</Identify>
                            <Input type="email" name="email" required placeholder="e.g.stephenking@lorem.com" onBlur={handleChange}/>

                            <Identify>Phone Number</Identify>
                            <Input type="tel" name="number" required placeholder="e.g +1 234 567 890" onBlur={handleChange}/>   

                            <ButtonDesktopNext type="submit">Next Step</ButtonDesktopNext>
                        </Form>
                    </BoxInputs>       
                </Box>
            ) : (

                <>
              

                <Pagination />    

                <Div>
                <Content>
                          
                    <Title>Personal Info</Title>
                    <SubTitle>Please provide your name, email, andress and phone number</SubTitle>

                    <Identify>Name</Identify>
                    <Input type="text" required placeholder="e.g Stephen King"/>

                    <Identify>Email Andress</Identify>
                    <Input type="email" required placeholder="e.g.stephenking@lorem.com"/>

                    <Identify>Phone Number</Identify>
                    <Input type="tel" required placeholder="e.g +1 234 567 890"/>   
                </Content>
                </Div> 

                <Footer style={{display : "flex", justifyContent : "end"}}>
                        {hasNextButton === true && (
                            <Button type="Submit" onClick={()=> navigate("/choice-plan")}>Next Step</Button> 
                        )}
                </Footer>
                </>
            )}
        </>
    )
}


export default Info;


const BoxInputs = styled.div`

    display: flex;
    flex-direction: column;
    padding: 2rem 4.5rem;

`

const Form  = styled.form`

    display: flex;
    flex-direction: column;

`

const Input = styled.input`

    font-family: 'Ubuntu', sans-serif; 
    font-weight: 500;
    font-size: 16px;
    padding: 1rem;
    border: 1px solid ${props => props.theme.colors.lightgray};
    border-radius: 4px;
    margin-bottom: 2rem;
    color:  ${props => props.theme.colors.marineBlue};

    &::placeholder{
      color: ${props => props.theme.colors.coolgray};
      outline-color: ${props => props.theme.colors.purplishBlue};
    }
`

const Identify = styled.label`

    margin-bottom: 0.3rem;
    font-weight: 500;
    color: ${props => props.theme.colors.marineBlue};
`

const Button = styled.button`

    margin-right: 1rem;
    padding: 1rem 1.5rem;
    border: 0;
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