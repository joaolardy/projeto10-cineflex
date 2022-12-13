import React from "react";
import styled from "styled-components";
import CardFilme from "./CardFilme";

export default function Home(props) {
    const {listaFilmes, setFilmeEscolhido} = props;
    // console.log(listaFilmes);
    return (
        <HomeScreen>
            <p>Escolha o filme desejado</p>
            <ContainerListaFilmes>
                {listaFilmes.map((filme) => <CardFilme onClick={() => setFilmeEscolhido(filme.title)} nomeFilme={filme.title} idFilme={filme.id} url={filme.posterURL} />)}
            </ContainerListaFilmes>
        </HomeScreen>
    );
}

const HomeScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    p{
        display: block;
        font-family: Roboto;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        text-align:center;
        margin: 40px 0px;

    }

    img{
        width: 129px;
        height: 193px;
    }
`;

const ContainerListaFilmes = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px
`