document.getElementById("deposit-btn").addEventListener("click", () => {
  const newDeposit = getInputElementById("deposit-input");
  console.log(newDeposit);

  if (isNaN(newDeposit)) {
    alert("provide relevant number");
    return;
  }

  const previousDepositBalance = getTexElement("deposit-balance");
  console.log(previousDepositBalance);
  const newDepositBalance = previousDepositBalance + newDeposit;
  setTextElement("deposit-balance", newDepositBalance);

  const previousTotalBalance = getTexElement("total-balance");
  const newTotalBalance = newDeposit + previousTotalBalance;

  setTextElement("total-balance", newTotalBalance);
});
