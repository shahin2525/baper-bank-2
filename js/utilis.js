const getInputElementById = (inputId) => {
  const inputField = document.getElementById(inputId);
  const inputValueString = inputField.value;
  const inputValue = parseFloat(inputValueString);

  inputField.value = "";
  return inputValue;
};

const getTexElement = (elementId) => {
  const elementField = document.getElementById(elementId);
  const elementFieldString = elementField.innerText;
  const elementFieldValue = parseFloat(elementFieldString);
  return elementFieldValue;
};
