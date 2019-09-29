import { useState } from 'react';

const useInput = initialState => {
  const [values, setValues] = useState(initialState);

  const handleOnChange = event => setValues({
    ...values,
    [event.target.name]: event.target.value
  });

  return {
    values,
    handleOnChange
  }
}

export default useInput;