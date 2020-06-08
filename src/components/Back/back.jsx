import React from 'react'
import arrowBack from '../assets/img/arrow_back.png'
import styled from 'styled-components'

const ComponentWrapper = styled.div`
  cursor: pointer;
  text-align: left;
`

const ArrowBack = styled.img`
  width: 18px;
  margin: 20px 0 6px;
`

const Label = styled.p`
  font: Bold 14px/14px Montserrat;
  letter-spacing: 0px;
  color: #5d9dcc;
  margin: 0px;
`

const Back = ({ action }) => (
  <ComponentWrapper onClick={action}>
    <ArrowBack src={arrowBack} />
    <Label>Voltar</Label>
  </ComponentWrapper>
)

export default Back
