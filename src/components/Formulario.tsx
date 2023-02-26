import React, { useState } from 'react';
import styled from 'styled-components';

import Botao from './Button';
import CampoTexto from './CampoTexto';
import ListaSuspensa from './ListaSuspensa';

type Props = {
    aoColaboradorCadastrado: any;
    times: string[];
}

const Formulario = ({ aoColaboradorCadastrado, times }: Props) => {

    const [nome, setNome]: [string, Function] = useState('')
    const [lancamento, setLancamento]: [string, Function] = useState('')
    const [imagem, setImagem]: [string, Function] = useState('')
    const [time, setTime]: [string, Function] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        aoColaboradorCadastrado({
            nome,
            lancamento,
            imagem,
            time
        })
        setNome('')
        setLancamento('')
        setImagem('')
        setTime('')
    }

    return (
        <Section>
            <Form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    type='text'
                    required
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    aoAlterado={(value: string) => setNome(value)}
                />
                <CampoTexto
                    type='date'
                    required
                    label="Lancamento"
                    placeholder="Digite a data de lancamento"
                    value={lancamento}
                    aoAlterado={(value: string) => setLancamento(value)}
                />
                <CampoTexto
                    type='text'
                    required={false}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    aoAlterado={(value: string) => setImagem(value)}
                />
                <ListaSuspensa
                    required
                    label="Time"
                    itens={times}
                    value={time}
                    aoAlterado={(valor: string) => setTime(valor)}
                />
                <DivButton>
                    <Botao>
                        Criar Card
                    </Botao>
                </DivButton>
            </Form>
        </Section>
    )
}

export default Formulario

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 80px 0;
  display: flex;
`;

const Form = styled.form`
  background-color: #1c1b1c;
  border-radius: 20px;
  padding: 36px 64px;
  box-shadow: 8px 8px 16px rgba(0,0,0, 0.08);

  @media(max-width: 700px){
    width: 60vw;
  }

  @media(min-width: 700px){
    width: 40vw;
  }
`;

const DivButton = styled.div`
  text-align: center;
`;