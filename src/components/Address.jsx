import styled from 'styled-components'

import Card from './UI/Card'

const Div = styled.div`
  width: 25rem;
  height: 14rem;

  text-align: center;
  font-size: 2rem;
  font-weight: 300;
`

const Address = ({ cep, logradouro, bairro, localidade, uf }) => {
  return (
    <Card>
      <Div>
        <p>{cep}</p>
        <p>{logradouro}</p>
        <p>{bairro}</p>
        <p>{localidade}</p>
        <p>{uf}</p>
      </Div>
    </Card>
  )
}

export default Address
