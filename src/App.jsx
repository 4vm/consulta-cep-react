import { useState } from 'react'

import axios from 'axios'
import styled from 'styled-components'

import Form from './components/Form'
import Address from './components/Address'

const Container = styled.div`
  display: grid;
  place-items: center;
  margin: 4rem;
`

function App() {
  const [addressData, setAddressData] = useState({})

  const inputHandler = (input) => {
    fetchData(input)
  }

  const fetchData = async (cep) => {
    try {
      const resp = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      console.log(resp.data)
      setAddressData(resp.data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Container>
      <Form onInputHandler={inputHandler} />
      {addressData && (
        <Address
          cep={addressData.cep}
          logradouro={addressData.logradouro}
          bairro={addressData.bairro}
          localidade={addressData.localidade}
          uf={addressData.uf}
        />
      )}
    </Container>
  )
}

export default App

/*
axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resp) => {
        console.log(resp.data)
      })
      .catch((err) => {
        // Handle Error Here
        console.error(err)
      })
*/
