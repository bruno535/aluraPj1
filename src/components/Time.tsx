import * as React from 'react';
import styled from 'styled-components';

import Colaborador from './Colaborador';

type Props = {
    corPrimaria: string;
    corSecundaria: string;
    colaboradores: Array<{
        nome: string,
        lancamento: string,
        imagem: string
    }>;
    nome: string;
}

const Time = ({ corPrimaria, corSecundaria, colaboradores, nome }: Props) => {

    if (colaboradores.length > 0) {
        return (
            <Section
                className='time'
                style={{ backgroundColor: corSecundaria }}
            >
                <H3 style={{ borderColor: corPrimaria }}>
                    {nome}
                </H3>

                <Div className='colaboradores'>

                    {colaboradores.map(colaborador =>
                        <Colaborador
                            backgroundColor={corPrimaria}
                            key={colaborador.nome}
                            nome={colaborador.nome}
                            lancamento={colaborador.lancamento}
                            imagem={colaborador.imagem}
                        />
                    )}
                </Div>
            </Section>
        )
    } else {
        return <></>
    }

}

export default Time

const Section = styled.section`
  text-align: center;
  padding: 32px;
`;
const H3 = styled.h3`
  font-size: 32px;
  border-bottom: 4px solid;
  display: inline-block;
  padding-bottom: 8px;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 32px;
  flex-wrap: wrap;
`;