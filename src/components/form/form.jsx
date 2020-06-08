import React, { useState } from 'react'
import { Col, Grid } from '../Grid/grid'
import FormStep from '../formStep'
import Back from '../Back'
import FormSteps from '../FormSteps'
import MaxWidthWrapper from '../pageWrapper'
import styled from 'styled-components'

const NavbarWrapper = styled(Grid)`
  align-items: center;
`

const ComponentWrapper = styled.div`
  padding: 0 20px;
`

const Form = ({ formSteps, handleFinish }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formFields, setFormFields] = useState()

  const nextStep = (values) => {
    const newValues = { ...formFields, ...values }

    if (currentStep >= formSteps.length) {
      handleFinish(newValues)
    } else {
      setFormFields(newValues)
      setCurrentStep(currentStep + 1)
    }
  }

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    } else {
      console.log('voltar')
    }
  }

  const formStepProp = {
    formFields: formFields,
    nextStep: nextStep,
    previousStep: previousStep,
    stepConfig:
      currentStep > 0 && formSteps.length >= currentStep - 1
        ? formSteps[currentStep - 1]
        : []
  }

  return (
    <MaxWidthWrapper>
      <ComponentWrapper>
        <NavbarWrapper>
          <Col size={3} sizeBigTablet={12}>
            <Back action={previousStep} />
          </Col>
          <Col size={6} sizeBigTablet={12}>
            <FormSteps
              currentStep={currentStep}
              totalSteps={formSteps.length}
            />
          </Col>
        </NavbarWrapper>
        <FormStep {...formStepProp} key={currentStep} />
      </ComponentWrapper>
    </MaxWidthWrapper>
  )
}

export default Form
