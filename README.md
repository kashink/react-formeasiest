# react-formeasiest

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-formeasiest.svg)](https://www.npmjs.com/package/react-formeasiest) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-formeasiest
```

## Usage

```jsx
import React from 'react'

import { Form } from 'react-formeasiest'

const App = () => {
  const specificHandler = value => {
    return value.length >= 14
  }

  //example of form
  const formSteps = [
    {
      title: 'Step 1',
      fields: [{
        name: 'field1',
        placeholder: 'Field 1',
        required: true,
        errorMessage: 'Field 1 is required',
        requiredHandler: specificHandler,
        mask: 'ZZZ.ZZZ-ZZ'
      },
      {
        name: 'date',
        required: false,
        placeholder: 'Date',
        mask: '99/99/9999'
      }]
    },
    {
      title: 'Step 2',
      fields: [{
        name: 'field2',
        required: true,
        placeholder: 'Field 2'
      }]
    }
  ]

  const handleFinish = values => {
    console.log('values', values)
    //values contain all the form fields values
  }

  return <><Form formSteps={formSteps} handleFinish={handleFinish} /></>
}
```

## License

MIT © [Kashink](https://github.com/Kashink)
