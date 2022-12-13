import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Loading from "./Loading";
import SessaoDia from "./SessaoDia";

export default function Horarios({setSessaoEscolhida}) {
    const [dadosFilme, setDadosFilme] = useState({})
    const idFilme = useParams();
    useEffect(() => {
        const obterSessoes = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme.idFilme}/showtimes`);
        obterSessoes.then(resposta => {
            setDadosFilme(resposta.data.days);
            // console.log(resposta.data);
        });
        obterSessoes.catch((resposta) => {
            return (
                <Loading></Loading>
            );
        });
    }, [])
    console.log(dadosFilme);

    return (
        <ContainerHorarios>
            <h2>Selecione o Horário</h2>
            {Object.keys(dadosFilme).map((dados, indice) => <SessaoDia setSessaoEscolhida={setSessaoEscolhida} dadosSessao={dadosFilme[indice]}/>)}
        </ContainerHorarios>
    );
}

const ContainerHorarios = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    h2{
        color: #293845;
        font-family: Roboto;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        text-align: center;
        margin: 40px 0px 40px 0px;
    }
`