import React, { useState } from 'react';
import Title from '../common/Title';
import useInput from '../../hooks/useInput';
import registerValidation from '../../validations/register';

export default () => {
  const initalState = {
    username: '',
    password: '',
    confirmPassword: '',
    age: 0
  }

  const {
    values,
    errors,
    handleOnChange,
    handleOnSubmit,
  } = useInput(initalState, registerValidation);

  return (
    <>
      <Title title={"Register page"} />
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
        <div>
          <input
            type="text"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleOnChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <div>
          <input
            type="text"
            name="age"
            value={values.age}
            onChange={handleOnChange}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <input
          type="submit"
          value="Submit"
        />
      </form>
    </>
  )
};
