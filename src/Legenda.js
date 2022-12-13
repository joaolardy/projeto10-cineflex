import React from "react";
import Cadeira from "./Cadeira";
import styled from "styled-components";

export default function Legenda(){
    return(
        <ContainerLegenda>
        <div>
            <Cadeira />
            <p>Selecionado</p>
        </div>
        <div>
            <Cadeira />
            <p>Disponível</p>
        </div>
        <div>
            <Cadeira />
            <p>Indisponível</p>
        </div>
    </ContainerLegenda>
    );
}

const ContainerLegenda = styled.div`
    display: flex;
`