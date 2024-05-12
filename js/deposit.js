document.getElementById("deposit-btn").addEventListener("click", () => {
  // const newDepositInput = document.getElementById("deposit-input");
  // const newDepositString = newDepositInput.value;
  const newDeposit = getInputElementById("deposit-input");
  // newDepositInput.value = "";
  if (isNaN(newDeposit)) {
    alert("provide relevant number");
    return;
  }
  //   addDeposit

  const previousDepositBalanceField =
    document.getElementById("deposit-balance");
  const previousDepositBalanceString = previousDepositBalanceField.innerText;
  const previousDepositBalance = parseFloat(previousDepositBalanceString);
  const newDepositBalance = previousDepositBalance + newDeposit;

  previousDepositBalanceField.innerText = newDepositBalance;

  // add TotalBalance
  const previousTotalBalanceField = document.getElementById("total-balance");
  const previousTotalBalanceString = previousTotalBalanceField.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceString);
  const newTotalBalance = newDeposit + previousTotalBalance;
  previousTotalBalanceField.innerText = newTotalBalance;

  newDepositInput.value = "";
});
