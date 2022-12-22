import './App.css'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: ${(props) => {
      return props.color ?? 'red'
    }};
`

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`

function App() {
    return (
        <Wrapper>
            <Title a="12">Hello World!</Title>
            <Title color="green">Hello World!</Title>
            <Title>Hello World!</Title>
        </Wrapper>
    )
}

export default App
