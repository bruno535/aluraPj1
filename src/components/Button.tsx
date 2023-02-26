import * as React from 'react';
import styled from 'styled-components';

const Botao = ({ children }: any) => <Button>{children}</Button>;

export default Botao;

const Button = styled.button`
  background-color: #fb1620;
  border-radius: 10px;
  font-weight: 700;
  font-size: 18px;
  padding: 32px;
  border: none;
  cursor: pointer;
  color: #FFF;
  margin: 32px 0;

  &:hover {
    background-color: #df1720;
  }
`;