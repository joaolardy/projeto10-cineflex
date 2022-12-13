import styled from "styled-components"
import React from "react"
import { Botao } from "./assets/css/Botao";
import { Link } from "react-router-dom";

export default function SessaoDia(props) {
    function escolherSesao(sessaoId) {
        setSessaoEscolhida(sessaoId);
        console.log(sessaoId);
    }
    const { dadosSessao, setSessaoEscolhida } = props;
    console.log(dadosSessao);
    return (
        <ContainerSessaoDia>
            <p>{dadosSessao.weekday} - {dadosSessao.date}</p>
            <div>
                {dadosSessao.showtimes.map((show, i) =>
                    <Link to={`/assentos/${show.id}`}>
                        <Botao onClick={() => escolherSesao(show.id)}>{show.name}</Botao>
                    </Link>)}
            </div>
        </ContainerSessaoDia>
    )
}

const ContainerSessaoDia = styled.div`
    display:flex;
    flex-direction: column;
    display:block;
    margin-bottom: 24px;
    margin-left: 20px;
    p{
        font-family: Roboto;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0.02em;
        text-align: left;
        margin-bottom: 20px;
    }
    div{
        display:flex;
        gap: 10px;
    }
`