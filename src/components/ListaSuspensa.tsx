import * as React from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
  aoAlterado: (value: string) => void;
  required: boolean;
  value: string;
  itens: string[];
}

const ListaSuspensa = ({ label, aoAlterado, required, value, itens }: Props) => {
  return (
    <div>
      <Label>
        {label}
      </Label>

      <Select onChange={evento => aoAlterado(evento.target.value)}
        required={required}
        value={value}
      >

        <Option value=""></Option>

        {itens.map(item => {
          return <Option key={item}>{item}</Option>
        })}
      </Select>
    </div>
  )
}

export default ListaSuspensa

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 24px;
`;
const Select = styled.select`
  background-color: #150609;
  color: white;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  width: 100%;
  border: none;
  font-size: 24px;
  padding: 24px;
  box-sizing: border-box;
`;

const Option = styled.option`
  color: white;
`;