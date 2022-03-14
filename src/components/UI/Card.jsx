import styled from 'styled-components'

const Container = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

const Card = (props) => {
  return <Container>{props.children}</Container>
}

export default Card
