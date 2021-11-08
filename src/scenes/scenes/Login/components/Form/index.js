
import React from 'react'
import { Formik } from 'formik'
import { Input } from 'baseui/input'
import { Button } from 'baseui/button'

const Form = ({ onSubmit }) => (
  <Formik
    initialValues={{ username: '', password: '' }}
    validate={values => {
      const errors = {}
      if (!values.username) errors.username = 'Required'
      if (!values.password) errors.password = 'Required'

      return errors
    }}
    onSubmit={onSubmit}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          error={errors.username && touched.username && errors.username}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
        />
        <Input
          type="password"
          name="password"
          error={errors.password && touched.password && errors.password}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          isLoading={isSubmitting}
          onClick={handleSubmit}
          overrides={{
            BaseButton: {
              style: {
                width: "100%"
              }
            }
          }}
        >
          Submit
        </Button>
      </form>
    )}
  </Formik>
)

export default Form
