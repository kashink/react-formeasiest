import React from 'react'
import styled from 'styled-components'
import Form from './components/form'

const Wrapper = styled.div`
  margin: 2em;
  padding: 0.5em;
  border: 2px solid #000;
  font-size: 2em;
  text-align: center;
  background: #c3c3c3;
`

export const ExampleComponent = ({ text }) => {
  return <Wrapper>Example Component: {text}</Wrapper>
}

export { Form }
