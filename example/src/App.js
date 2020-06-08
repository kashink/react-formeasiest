import React from 'react'

import { Form } from 'kashink-lib-test'
import 'kashink-lib-test/dist/index.css'

const App = () => {
  const cpfHandler = cpf => {
    return cpf.length >= 14
  }

  const formSteps = [
    {
      title: 'Passo 1',
      fields: [{
        name: 'cpf',
        placeholder: 'CPF',
        required: true,
        errorMessage: 'CPF obrigatório',
        requiredHandler: cpfHandler,
        mask: '999.999.999-99'
      },
      {
        name: 'birthDate',
        required: false,
        placeholder: 'Data de nascimento',
        mask: 'ZZ/ZZ/ZZZZ'
      }]
    },
    {
      title: 'Passo 2',
      fields: [{
        name: 'address',
        required: true,
        placeholder: 'Endereço'
      }]
    },
    {
      title: 'Passo 3',
      fields: [{
        name: 'outro',
        required: false,
        placeholder: 'outro'
      }]
    }
  ]

  const handleFinish = values => {
    console.log('acabou', values)
  }

  return <><Form formSteps={formSteps} handleFinish={handleFinish} /></>
}

export default App
