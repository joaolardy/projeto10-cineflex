import React from "react";
import Cadeira from "./Cadeira";
import styled from "styled-components";
import { bordaDisponivel, bordaIndisponivel, bordaSelecionado, corDisponivel, corIndisponivel, corSelecionado } from "./assets/css/cores";

export default function Legenda(){
    return(
        <ContainerLegenda>
        <div>
            <Cadeira cor={corSelecionado} corBorda={bordaSelecionado}/>
            <p>Selecionado</p>
        </div>
        <div>
            <Cadeira cor={corDisponivel} corBorda={bordaDisponivel} />
            <p>Disponível </p>
            

        </div>
        <div>
            <Cadeira cor={corIndisponivel} corBorda={bordaIndisponivel}/>
            <p>Indisponível </p>
        </div>
    </ContainerLegenda>
    );
}

const ContainerLegenda = styled.div`
    display: flex;
    p{
        font-family: Roboto;
        font-size: 13px;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: -0.013em;
        text-align: left;
    }
    div{
        display: flex;
        flex-direction: column;
        padding: 10px;
        justify-content: center;
        align-items: center;
    }
`