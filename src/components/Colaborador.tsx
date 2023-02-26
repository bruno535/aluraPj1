import * as React from 'react';
import styled from 'styled-components';

type Props = {
  nome: string;
  imagem: string;
  lancamento: string;
  backgroundColor: string;
}

const Colaborador = ({ nome, imagem, lancamento, backgroundColor }: Props) => (
  <Div>
    <DivCabecalho style={{ backgroundColor: backgroundColor }}>
      <Img src={imagem} alt={nome} />
    </DivCabecalho>

    <DivRodape>
      <H4>{nome}</H4>
      <H5>{lancamento}</H5>
    </DivRodape>
  </Div>
)

export default Colaborador

const Div = styled.div`
  width: 280px;
`;
const DivCabecalho = styled.div`
  background-color:  #F0F0F0;
  border-radius: 10px 10px 0px 0px;
`;
const Img = styled.img`
  width: 100px;
  border-radius: 50%;
  position: relative;
  bottom: -50px;
`;
const DivRodape = styled.div`
  background: #FFFFFF;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 10px 10px;
  padding-top: 90px;
  padding-bottom: 40px;
`;

const H4 = styled.h4`
  color: #6278F7;
  font-size: 30px;
  line-height: 22px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const H5 = styled.h5`
  font-size: 30px;
  line-height: 22px;
  color: #212121;
  padding: 0 16px;
`;