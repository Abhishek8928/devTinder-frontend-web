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
