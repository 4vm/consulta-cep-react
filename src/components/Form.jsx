import { useState } from 'react'

import Card from './UI/Card'

import styled from 'styled-components'

const StyledForm = styled.form`
  display: grid;
  place-items: center;
  align-content: space-evenly;

  width: 25rem;
  height: 14rem;
`

const Title = styled.div`
  width: 100%;

  h1 {
    text-align: left;
    margin-left: 2.5rem;
  }

  label {
    text-align: left;
    margin-left: 2.5rem;
    color: #aeaeae;
  }
`

const Input = styled.input`
  padding: 0;
  margin: 0;

  width: 20rem;
  height: 2.2rem;

  font-size: 1.6rem;
  letter-spacing: 2px;

  border: 2px solid #e8e8e8;
  border-radius: 4px;

  &:focus {
    outline: none;
    border: 2px solid palevioletred;
  }
`

const Button = styled.button`
  margin: 0;
  padding: 0;

  width: 20.2rem;
  height: 2.5rem;

  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;

  background: transparent;
  border-radius: 4px;
  border: 2px solid palevioletred;
  color: palevioletred;

  &:hover {
    outline: none;
    border: 2px solid palevioletred;
    background: palevioletred;
    color: #ffffff;
    transition: 0.25s;
    cursor: pointer;
  }
`

const Form = ({ onInputHandler }) => {
  const [input, setInput] = useState('')

  const inputChangeHandler = (event) => {
    setInput(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    onInputHandler(input)
    setInput('')
  }

  return (
    <Card>
      <StyledForm onSubmit={submitHandler}>
        <Title>
          <h1>Consulta CEP</h1>
          <label>Digite o CEP:</label>
        </Title>
        <Input type="text" value={input} onChange={inputChangeHandler} />
        <Button>Consultar</Button>
      </StyledForm>
    </Card>
  )
}

export default Form

//box-shadow: inset 0 0 0 2px #e3e8ee;
