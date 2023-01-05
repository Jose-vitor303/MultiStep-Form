import React from "react"
import { ThemeProvider } from "styled-components";
import { Title, SubTitle, Content, Div, BoxPagination, Box} from "../../components/GlobalStyle";
import Pagination from "../../components/Pagination";
import theme from "../../components/ThemeStyled";
import ImageThanks from "../../assets/icon-thank-you.svg";
import useWindowSize from "../../components/WindowSize";
import PaginationDesktop from "../../components/PaginationDesktop";


const Confirmed = () =>{

    const size = useWindowSize();

    return(
        <ThemeProvider theme={theme}>
        {size.width > 1100 ? (

            <Box> 
                <BoxPagination>
                    <PaginationDesktop />
                </BoxPagination>

                <div style={{height : "80vh", width : "30vw", padding : "2rem 7.5rem", display : "flex", flexDirection: "column",justifyContent : "center", alignItems : "center"}}>
                    <div style={{display : "flex", justifyContent : "center"}}>
                        <img src={ImageThanks} alt="Thank you"/>
                    </div>
                
                    <Title>Thank you</Title>
                    <SubTitle style={{textAlign : "center"}}>Thanks for confirming your subscription! 
                        We hope you have fun using our platform. if you ever need support, please feel free to email 
                        us at support@loremgaming.com.</SubTitle>
                </div>

            </Box>

        ): (
            <>
                <Pagination/>

                <Div>
                    <Content style={{textAlign : "center", height : "70vh"}}>
                    <div style={{display : "flex", justifyContent : "center"}}>
                        <img src={ImageThanks} alt="Thank you"/>
                    </div>
                
                    <Title>Thank you</Title>
                    <SubTitle style={{textAlign : "center"}}>Thanks for confirming your subscription! 
                        We hope you have fun using our platform. if you ever need support, please feel free to email 
                        us at support@loremgaming.com.</SubTitle>
                    </Content>
                </Div>
            </>
        )}
             

    
        </ThemeProvider>    
    )


}


export default Confirmed;

