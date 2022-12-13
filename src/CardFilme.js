import styled from "styled-components"
import React from "react";
import { Link } from "react-router-dom";

export default function CardFilme(props){
    const {nomeFilme, idFilme, url} = props;
    return(
            <ContainerImagemFilme>
                    <Link to={`/sessoes/${idFilme}`}>
                        <img src={url} alt={nomeFilme} />
                    </Link>
            </ContainerImagemFilme>
    );
}

const ContainerImagemFilme = styled.div`
    display: flex;
        justify-content: center;
        align-items: center;
        width: 145px;
        height: 209px;
        background-color: white;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
`