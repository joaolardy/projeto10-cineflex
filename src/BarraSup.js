import React from "react";
import styled from "styled-components";

export default function BarraSup() {
    return (
        <BarraSuperior>
            <p>CINEFLEX</p>
        </BarraSuperior>
    );
}

const BarraSuperior = styled.div`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
    color: #E8833A;
    font-family: Roboto;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    }
    

        
`