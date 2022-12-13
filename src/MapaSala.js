import Assentos from "./Assentos";
import Legenda from "./Legenda";
import React, { useState } from "react";
import Formulario from "./Formulario";
import styled from "styled-components";

export default function MapaSala({idSessaoEscolhida}) {
    const [postAxios, setPostAxios] = useState({
        ids: [],
        name: "",
        cpf: ""
    });
    function registrarNome(nome){
        setPostAxios({
            ids: [...postAxios.id],
            name: nome,
            cpf: postAxios.cpf
        })
    }

    return (
        <ContainerMapaSala>
            <Assentos idSessaoEscolhida={idSessaoEscolhida} />
            <Legenda />
            <Formulario postAxios={postAxios} registrarNome={registrarNome} />
        </ContainerMapaSala>
    );
}

const ContainerMapaSala = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
`