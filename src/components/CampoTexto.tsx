import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
    aoAlterado: Function;
    label: string;
    type: 'text' | 'date';
    value: string;
    required: boolean;
    placeholder: string;
}

const CampoTexto = ({ aoAlterado, label, type, value, required, placeholder }: Props) => {

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <Div >
            <Label>
                {label}
            </Label>
            <Input
                type={type}
                value={value}
                onChange={aoDigitado}
                required={required}
                placeholder={placeholder}
            />
        </Div>
    )
}

export default CampoTexto

const Div = styled.div`
    margin: 24px 0;
`

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
`

const Input = styled.input`
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
`