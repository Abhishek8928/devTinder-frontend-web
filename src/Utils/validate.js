import validator from "validator";

export function validateLogInForm(inputValue, clearErrorHandler) {
  clearErrorHandler();
  const { userEmail, userPassword } = inputValue;
  const isEmailValid = validator.isEmail(userEmail);
  const isPasswordValid = validator.isStrongPassword(userPassword);

  if (validator.isEmpty(userEmail) || !isEmailValid) {
    throw new Error("Invalid Email");
  }
  if (validator.isEmpty(userPassword)) {
    throw new Error("Invalid Password");
  }
  if (!isEmailValid || !isPasswordValid) {
    throw new Error("Invalid Credentials");
  }

  return isEmailValid && isPasswordValid;
}
export function validateSignUpForm(inputValue, clearErrorHandler) {
  clearErrorHandler();
  const { userEmail, userPassword , firstName , lastName } = inputValue;
  const isEmailValid = validator.isEmail(userEmail);
  const isPasswordValid = validator.isStrongPassword(userPassword);

  if (validator.isEmpty(userEmail) || !isEmailValid) {
    throw new Error("Invalid Email");
  }
  if (validator.isEmpty(userPassword)) {
    throw new Error("Invalid Password");
  }
  if (!isEmailValid || !isPasswordValid) {
    throw new Error("Invalid Credentials");
  }
  if (validator.isEmpty(firstName) || validator.isEmpty(lastName)) {
    throw new Error("First Name and Last Name are required");
  }

  return isEmailValid && isPasswordValid;
}
