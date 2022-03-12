const Address = ({ cep, logradouro, bairro, localidade, uf }) => {
  return (
    <div>
      <h2>{cep}</h2>
      <h2>{logradouro}</h2>
      <h2>{bairro}</h2>
      <h2>{localidade}</h2>
      <h2>{uf}</h2>
    </div>
  )
}

export default Address
