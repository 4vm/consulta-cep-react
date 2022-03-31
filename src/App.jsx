import { useState } from 'react'

import axios from 'axios'

import styled from 'styled-components'

import Form from './components/Form'
import Address from './components/Address'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 4rem;

  gap: 4rem;
`

function App() {
  const [addressData, setAddressData] = useState({})
  const [isValidData, setisValidData] = useState(false)

  const inputHandler = (input) => {
    fetchData(input)
  }

  const fetchData = async (cep) => {
    try {
      const resp = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      setAddressData(resp.data)
      setisValidData(true)
    } catch (err) {
      console.error(err)
      setisValidData(false)
    }
  }

  return (
    <Main>
      <Form onInputHandler={inputHandler} />
      {isValidData && (
        <Address
          cep={addressData.cep}
          logradouro={addressData.logradouro}
          bairro={addressData.bairro}
          localidade={addressData.localidade}
          uf={addressData.uf}
        />
      )}
    </Main>
  )
}

export default App
