import { useState } from 'react';

const useInput = (initialState, validation) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleOnChange = event => setValues({
    ...values,
    [event.target.name]: event.target.value
  });

  const handleOnSubmit = event => {
    event.preventDefault();
    const errors = validation(values);

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    setErrors({});
  }

  return {
    values,
    errors,
    handleOnChange,
    handleOnSubmit,
  }
}

export default useInput;