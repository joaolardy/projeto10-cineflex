import styled from "styled-components";
import React from "react";
import { bordaDisponivel, bordaIndisponivel, corDisponivel, corIndisponivel } from "./assets/css/cores";

export default function Cadeira({indice, disponibilidade, cor, corBorda}){


    return(
        <ContainerCadeira 
        cor={cor ? cor : ((disponibilidade === true) ? corDisponivel: corIndisponivel)} 
        corBorda={corBorda ? corBorda : ((disponibilidade === true) ? bordaDisponivel: bordaIndisponivel)} 
        
        >
            {(indice || indice === 0) ? indice + 1 : null}
        </ContainerCadeira>
    );
}

const ContainerCadeira = styled.button`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    font-family: Roboto;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0px;

    background-color: ${props => props.cor};
    border: 2px solid ${props => props.corBorda};
    margin: 4px;
`