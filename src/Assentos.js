import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Cadeira from "./Cadeira";

export default function Assentos({ idSessaoEscolhida }) {
    const [listaAssentos, setListaAssentos] = useState([]);

    const dominio = useParams();
    useEffect((() => {
        const obterAssentos = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${dominio.idSessao}/seats`);
        obterAssentos.then(
            (resposta) => {
                let arrayAssentos = [...resposta.data.seats];
                setListaAssentos(arrayAssentos);
                console.log(arrayAssentos);
            }
        );
        obterAssentos.catch(console.log('deu ruim'));
    }), [])

    return (
        <ContainerAssentos>
            <h2>Selecione o(s) assento(s)</h2>
            <div>
                {listaAssentos.map((assento, indice) =>
                    <Cadeira disponibilidade={assento.isAvailable} indice={indice} />
                )}
            </div>
        </ContainerAssentos>
    );
}

const ContainerAssentos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        h2{
        color: #293845;
        font-family: Roboto;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        text-align: center;
        margin: 40px 0px 40px 0px;
        }
        div{
            width: 340px;
        }
`
