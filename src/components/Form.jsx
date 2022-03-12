import { useState } from 'react'

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
    <form onSubmit={submitHandler}>
      <input type="text" value={input} onChange={inputChangeHandler} />
      <button>Consultar</button>
    </form>
  )
}

export default Form
