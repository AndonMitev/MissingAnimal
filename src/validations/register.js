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

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm password is required';
  } else if (values.password && values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Password and Confirm password do not match';
  }

  if(!values.age) {
    errors.age = 'Age is required';
  } else if (values.age < 10) {
    errors.age = 'You should be at least 10 years old to can register';
  }

  return errors;
}