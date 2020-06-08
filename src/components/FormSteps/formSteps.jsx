import React from 'react'
import styled from 'styled-components'
import stepComplete from '../assets/img/step-complete.png'

const ComponentWrapper = styled.div`
  padding: 20px 0px;
  margin: 40px 0 20px;

  @media (max-width: 600px) {
    margin: 16px 0 0;
    padding: 13px 0px;
  }
`

const Step = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background: ${(props) => (props.active ? '#46535A' : '#fff')};
  border: solid 0.5px #46535a;
  display: inline-block;
  margin: 0 8px;
`

const StepComplete = styled.img`
  width: 24px;
  height: 24px;
  display: inline-block;
  margin: 0 8px;
`

const StepWrapper = styled.div`
  width: 121px;
  margin: 0 auto;
  display: flex;
`

const StepText = styled.p`
  margin: 0 auto;
  text-align: center;
  color: ${(props) => (props.active ? '#fff' : '#46535A')};
`

const FormSteps = ({ currentStep, totalSteps }) => {
  const stepList = []

  let i = 1
  while (i <= totalSteps) {
    stepList.push(`${i}`)
    i++
  }

  return (
    <ComponentWrapper>
      <StepWrapper>
        {stepList.map((item, index) => (
          <div key={index}>
            {index + 1 < currentStep && <StepComplete src={stepComplete} />}
            {index + 1 >= currentStep && (
              <Step active={index + 1 === currentStep}>
                <StepText active={index + 1 === currentStep}>{item}</StepText>
              </Step>
            )}
          </div>
        ))}
      </StepWrapper>
    </ComponentWrapper>
  )
}

export default FormSteps
