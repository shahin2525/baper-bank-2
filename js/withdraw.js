document.getElementById("withdraw-btn").addEventListener("click", () => {
  const newWithdrawInput = getInputElementById("withdraw");
  if (isNaN(newWithdrawInput)) {
    alert("provide relevant number");
    return;
  }

  const previousWithdrawField = getTexElement("withdraw-balance");
  const totalWithdraw = newWithdrawInput + previousWithdrawField;
  setTextElement("withdraw-balance", totalWithdraw);

  const previousTotalBalance = getTexElement("total-balance");
  const newTotalBalance = previousTotalBalance - newWithdrawInput;

  setTextElement("total-balance", newTotalBalance);
});
