/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from 'react'
// import isValidCPF, { setCpfMask } from '../../utils/cpf'
// import validatePhone, { setPhoneMask } from '../../utils/phone'
// import validateDate, { setDateMask } from '../../utils/date'
// import validateEmail from '../../utils/email'

import styled from 'styled-components'
import useForm from '../../hooks/useForm'

const Title = styled.p`
  text-align: left;
  font: Bold 22px/36px Montserrat;
  letter-spacing: 0px;
  color: #333333;
  margin: 16px 0 0;

  @media (min-width: 768px) {
    text-align: center;
    margin: 16px auto;
  }

  @media (min-width: 1366px) {
    font: Bold 40px/36px Montserrat;
    margin: 18px auto 16px;
  }
`

const Form = styled.div`
  height: 100%;
  position: relative;

  @media (min-width: 768px) {
    max-width: 372px;
    margin: 0 auto;
  }
`

const FormFieldWrapper = styled.div`
  margin: 0 0 30px;
`

const Button = styled.button`
  cursor: pointer;
  background: ${(props) =>
    props.isButtonInvalid
      ? '#e8e8e9'
      : 'transparent linear-gradient(81deg, #F06178 0%, #E72A4E 21%, #E11740 49%, #D61953 75%, #B41E8E 100%) 0% 0% no-repeat padding-box'};
  border: none;
  outline: none;
  height: 48px;
  border-radius: 100px;
  width: 100%;
  margin: 32px 0 40px;

  font: Bold 14px/20px Montserrat;
  letter-spacing: 0px;
  color: #ffffff;
`

const FormInput = styled.input`
  display: block;
  width: 100%;
  height: 48px;
  outline: none;
  border: solid 1px ${(props) => (props.error ? '#FF0000' : '#333333')};
  border-top: none;
  border-left: none;
  border-right: none;

  text-align: left;
  font: 16px/24px Montserrat;
  letter-spacing: 0px;
  color: #aaaaaa;
`

const InputError = styled.span`
  text-align: left;
  font: 12px/18px CentraleSansRegular;
  letter-spacing: 0px;
  color: #e25555;
`

const FormStep = ({ formFields, nextStep, stepConfig }) => {
  const { values, handleChange, setNewValues } = useForm({
    ...formFields
  })
  const [valuesError, setValuesError] = useState({})
  const [buttonInvalid, setButtonInvalid] = useState(true)

  useEffect(() => {
    let fieldsForm = {}
    let fieldsError = {}
    stepConfig.fields.forEach((field) => {
      fieldsForm = { ...fieldsForm, [field.name]: '' }
      fieldsError = { ...fieldsForm, [field.name]: false }
    })
    setNewValues(fieldsForm)
    setValuesError(fieldsError)
  }, [])

  useEffect(() => {
    handleButtonEnabled()
  }, [values])

  const handleButtonEnabled = () => {
    let isButtonInvalid = false
    stepConfig.fields.forEach((field) => {
      if (
        field.required &&
        inputErrorVerify(values[field.name], field.requiredHandler)
      )
        isButtonInvalid = true
    })
    setButtonInvalid(isButtonInvalid)
  }

  const inputErrorVerify = (fieldValue, requiredHandler) => {
    if (requiredHandler) {
      return !requiredHandler(fieldValue || '')
    } else {
      return !fieldValue || fieldValue.length < 1
    }
  }

  const handleInputBlur = (fieldName, required, requiredHandler) => {
    let fieldError = false
    const fieldValue = values[fieldName]
    if (required) {
      fieldError = inputErrorVerify(fieldValue, requiredHandler)
    }

    setValuesError({ ...valuesError, [fieldName]: fieldError })
  }

  const handleClick = () => {
    nextStep(values)
  }

  const customHandleChange = (e, mask) => {
    let i = 0
    let maskChar = 0

    const newEvent = e
    let finalValue = ''

    if (mask) {
      if (newEvent.target.value.length <= mask.length) {
        const newValue = newEvent.target.value.replace(
          /[!@#$%^&*(),.?":{}|<>/_\-]/g,
          ''
        )

        while (i - maskChar < newValue.length) {
          if (
            (mask[i].match(/\d/g) && newValue[i - maskChar].match(/\d/g)) ||
            (mask[i].match(/[a-zA-Z]/g) &&
              newValue[i - maskChar].match(/[a-zA-Z]/g))
          ) {
            finalValue += newValue[i - maskChar]
          } else if (mask[i].match(/[!@#$%^&*(),.?":{}|<>/_\-]/g)) {
            finalValue += mask[i]
            maskChar += 1
          }

          i++
        }
      } else {
        finalValue = newEvent.target.value.substring(0, mask.length)
      }
    } else {
      finalValue = newEvent.target.value
    }

    newEvent.target.value = finalValue

    handleChange(newEvent)
  }

  return (
    <Form>
      <Title>{stepConfig.title}</Title>
      {stepConfig.fields.map((field, index) => (
        <FormFieldWrapper key={index}>
          <FormInput
            id={field.name}
            name={field.name}
            error={valuesError[field.name] || false}
            value={values[field.name] || ''}
            onChange={(e) => customHandleChange(e, field.mask)}
            onBlur={() =>
              handleInputBlur(field.name, field.required, field.requiredHandler)
            }
            placeholder={field.placeholder}
          />
          {field.required && (valuesError[field.name] || false) && (
            <InputError>{field.errorMessage}</InputError>
          )}
        </FormFieldWrapper>
      ))}
      <Button
        isButtonInvalid={buttonInvalid}
        disabled={buttonInvalid}
        onClick={handleClick}
      >
        Continuar
      </Button>
    </Form>
  )
}

export default FormStep
