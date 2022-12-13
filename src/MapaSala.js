import Assentos from "./Assentos";
import Legenda from "./Legenda";
import React from "react";
import Formulario from "./Formulario";

export default function MapaSala({idSessaoEscolhida}) {
    return (
        <>
            <Assentos idSessaoEscolhida={idSessaoEscolhida} />
            <Legenda />
            <Formulario />
        </>
    );
}