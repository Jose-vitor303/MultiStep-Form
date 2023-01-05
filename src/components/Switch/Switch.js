import React from "react";
import styled from "styled-components";

const Switch = ({isToggled, onToggle}) =>{

    return(
        <Label>
            <input type="checkbox" checked={isToggled} onChange={onToggle}/>
            <Span />
        </Label>
    )

}

export default Switch;

const Label = styled.label`//Swihct
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    input{
        opacity: 0;
        width: 0;
        height: 0;
    }

    input:checked + Span::before{
        transform: translateX(45px);
    }

`

const Span = styled.span` //Slider

    position: absolute;
    cursor: pointer;
    
    width: 80px;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: hsl(213, 96%, 18%);
    border-radius: 34px;

    ::before{
        border-radius: 50%;
        position: absolute;
        content: "";
        width: 26px;
        height: 26px;
        left: 4px;
        bottom : 4px;
        background-color: white;
        transition: 0.4s;
    }


`