import React, { useState } from 'react';
import Title from '../common/Title';
import useInput from '../../hooks/useInput';

export default () => {
  const initalState = {
    username: '',
    password: ''
  }

  const {values, handleOnChange} = useInput(initalState);

  console.log(values);

  return (
    <>
      <Title title={"Register page"} />
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="password"
        value={values.password}
        onChange={handleOnChange}
      />
    </>
  )
};
