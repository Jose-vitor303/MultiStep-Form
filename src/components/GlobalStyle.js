import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    body{
        font-size: 16px;
        position: relative;
        margin: 0;
        padding: 0;
        font-family: 'Ubuntu', sans-serif;
        background-color: hsl(217, 100%, 97%); 
    }
`

export const Content = styled.main`

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 1.5rem;
    position: absolute;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-bottom: 10rem;
    border-radius: 10px;
    max-width: 450px;
    top: 98px;
    background-color: ${props => props.theme.colors.white};
`


export const Title = styled.h2`
    
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1rem;
  color:  ${props => props.theme.colors.marineBlue};
`

export const SubTitle = styled.p`
  
   margin-top: 0.8rem;
   font-size: 1.1rem;
   font-weight: 400;
   margin-bottom: 1.8rem;
   line-height: 1.5rem;
   color:  ${props => props.theme.colors.coolgray};
`

export const Box = styled.main`

      display: flex; 
      flex-direction: row;
      justify-content: space-between; 
      border-radius: 10px;
      margin: 0 auto;
      width: 1000px;
      height: 86vh;  
      margin-top: 3rem;
      background-color: ${props => props.theme.colors.white};
`

export const BoxPagination = styled.div`

    bottom: 0;
    position: relative;
    width: 300px;
`

export const ButtonDesktopNext = styled.button`

    justify-content: space-between;
    padding: 1rem;
    border: 0;
    margin-left: 390px;
    font-weight: 500;
    border-radius: 6px;
    font-weight: lighter;
    cursor: pointer;
    width: 110px;
    font-family: 'Ubuntu', sans-serif;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.marineBlue};

    :hover{
      color: ${props => props.theme.colors.marineBlue};
      background-color:  ${props => props.theme.colors.white};
      border: 1px solid ${props => props.theme.colors.marineBlue};
    }


`

export const ButtonNextDesktop = styled.button`

    padding: 1rem;
    width: 110px;
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

export const ButtonPrevDesktop = styled.button`

    padding: 1rem;
    width: 110px;
    border: 0;
    margin-right: 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-family: 'Ubuntu', sans-serif;
    color: ${props => props.theme.colors.coolgray};
    background-color:  ${props => props.theme.colors.white};
    font-weight: 500;

    
    :hover{
        color: ${props => props.theme.colors.white};
        background-color:  ${props => props.theme.colors.coolgray};
        border: 1px solid ${props => props.theme.colors.white};
    }
    

`

export const Div = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const Footer = styled.footer`

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