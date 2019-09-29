import React from 'react';
import Title from '../common/Title';
import useInput from '../../hooks/useInput';
import loginValidation from '../../validations/login';

export default () => {
  const initialState = {
    username: '',
    password: ''
  }

  const {
    values,
    errors,
    handleOnChange,
    handleOnSubmit,
  } = useInput(initialState, loginValidation);

  return (
    <>
      <Title title={"Login Page"} />
      <form onSubmit={handleOnSubmit}>
        <div>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleOnChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div>
          <input
            type="text"
            name="password"
            value={values.password}
            onChange={handleOnChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <input
          type="submit"
          value="Login"
        />
      </form>
    </>
  )
}