import { useState } from 'react'

import axios from 'axios'

import Form from './components/Form'

import './App.css'
import Address from './components/Address'

function App() {
  const [addressData, setAddressData] = useState([])

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
    <div className="App">
      <h1>Consulta cep</h1>
      <Form onInputHandler={inputHandler} />
      <Address
        cep={addressData.cep}
        logradouro={addressData.logradouro}
        bairro={addressData.bairro}
        localidade={addressData.localidade}
        uf={addressData.uf}
      />
    </div>
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
