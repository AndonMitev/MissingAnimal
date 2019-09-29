export default values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Username is required';
  } else if (values.username.length < 3) {
    errors.username = 'Username should be at least 3 symbols long';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 3) {
    errors.password = 'Password should be at least 3 symbols long';
  }

  return errors;
}