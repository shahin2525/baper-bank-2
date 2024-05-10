document.getElementById("deposit-btn").addEventListener("click", () => {
  const newDepositInput = document.getElementById("deposit-input");
  const newDepositString = newDepositInput.value;
  const newDeposit = parseFloat(newDepositString);

  //   balance

  const previousDepositBalanceField =
    document.getElementById("deposit-balance");
  const previousDepositBalanceString = previousDepositBalanceField.innerText;
  const previousDepositBalance = parseFloat(previousDepositBalanceString);
  const newDepositBalance = previousDepositBalance + newDeposit;

  previousDepositBalanceField.innerText = newDepositBalance;

  depositInput.value = "";
});
