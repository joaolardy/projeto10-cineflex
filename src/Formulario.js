import React, { useState } from "react";
import styled from "styled-components";
import { Botao } from "./assets/css/Botao";
import { useNavigate } from "react-router-dom"
import axios from "axios";

export default function Formulario({registrarCompra, postAxios}){
    const [inputNome, setInputNome] = useState('');
    const [inputCPF, setInputCPF] = useState('');
    const navigate = useNavigate();
    const dadosForm = {name: '', cpf: ''};

    function setarValores(){
        setInputNome(dadosForm.name);
        setInputCPF(dadosForm.cpf);
    }

    return(
        <ContainerFormulario    >
            <form onSubmit={setarValores}>
                <p>Nome do comprador:</p>
                <input type="text" placeholder="Digite seu nome..." onChange={e => dadosForm.name = e.target.value} />
                <p>CPF do comprador</p>
                <input type="text" placeholder="Digite seu CPF..." onChange={e => dadosForm.cpf = e.target.value} />
                <span>.</span>
                <Botao type="submit" onClick={setarValores}>
                    Reservar assento(s)
                </Botao>
            </form>
        </ContainerFormulario>
    );
}

const ContainerFormulario = styled.div`
margin-top: 40px;
display: flex;
flex-direction: column;
align-items: center;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #293845;
        margin-bottom: 5px;
    }
    input{
        width: 327px;
        height: 51px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        padding-left: 10px;
    }
    p + input{
        margin-bottom: 12px;
    }
    input::placeholder{
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        color: #AFAFAF;
        font-size: 18px;
        display: flex;
        align-items: center;
        margin-left: 10px;
    }
    span{
        display: block;
        color: white;
        height: 40px;
    }
`