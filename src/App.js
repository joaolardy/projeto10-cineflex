import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BarraSup from "./BarraSup"
import Home from "./Home";
import Horarios from "./Horarios";
import Finalizado from "./Finalizado";
import axios from "axios";
import Loading from "./Loading";
import MapaSala from "./MapaSala";


export default function App() {
    const [listaFilmes, setListaFilmes] = useState([]);
    const [filmeEscolhido, setFilmeEscolhido] = useState('');
    const [sessaoEscolhida, setSessaoEscolhida] = useState('');

    useEffect(() => {
        const obterFilmes = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies');
        obterFilmes.then(resposta => {
            setListaFilmes(resposta.data);})
        obterFilmes.catch((resposta) => {
            return (
                <Loading></Loading>
            );})
    }, [])
    return (
        <BrowserRouter>
            <BarraSup />
            <Routes>
                <Route path="/" element={<Home listaFilmes={listaFilmes} setFilmeEscolhido={setFilmeEscolhido}/>} />
                <Route path="/sessoes/:idFilme" element={<Horarios setSessaoEscolhida={setSessaoEscolhida}/>} />
                <Route path="/assentos/:idSessao" element={<MapaSala idSessaoEscolhida={sessaoEscolhida} />} />
                <Route path="/sucesso" element={<Finalizado />} />
            </Routes>
        </BrowserRouter>
    );
}
