import { useState } from 'react'

const useForm = (data) => {
  const [values, setValues] = useState(data)

  const handleChange = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  }

  const setNewValues = (newValues) => {
    setValues((values) => ({
      ...values,
      ...newValues
    }))
  }

  const clearForm = () => {
    Object.keys(values).map((key) =>
      setValues((values) => ({
        ...values,
        [key]: ''
      }))
    )
  }

  return {
    handleChange,
    values,
    clearForm,
    setNewValues
  }
}

export default useForm
