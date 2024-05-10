document.getElementById("deposit-btn").addEventListener("click", () => {
  const newDepositInput = document.getElementById("deposit-input");
  const newDepositString = newDepositInput.value;
  const newDeposit = parseFloat(newDepositString);
  newDepositInput.value = "";
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

// withdraw section
document.getElementById("withdraw-btn").addEventListener("click", () => {
  // new withdraw input
  const newWithdrawInput = document.getElementById("withdraw");
  const newWithdrawInputString = newWithdrawInput.value;
  const newWithdraw = parseFloat(newWithdrawInputString);
  if (isNaN(newWithdraw)) {
    alert("provide relevant number");
    return;
  }

  // previous Withdraw
  const previousWithdrawField = document.getElementById("withdraw-balance");
  const previousWithdrawString = previousWithdrawField.innerText;
  const previousWithdraw = parseFloat(previousWithdrawString);

  // previous deposit
  const previousDepositBalanceField = document.getElementById("total-balance");
  const previousDepositBalanceString = previousDepositBalanceField.innerText;
  const previousDepositBalance = parseFloat(previousDepositBalanceString);

  newWithdrawInput.value = "";
  // check sufficient balance
  if (previousDepositBalance < newWithdraw) {
    alert("you do not have sufficient balance");
    return;
  }

  //  previous total balance
  const previousTotalBalanceField = document.getElementById("total-balance");
  const previousTotalBalanceString = previousTotalBalanceField.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceString);

  // add total withdraw
  const totalWithdraw = newWithdraw + previousWithdraw;
  previousWithdrawField.innerText = totalWithdraw;
  // deduct new withdraw from previous total balance
  const newTotalBalance = previousTotalBalance - newWithdraw;

  previousTotalBalanceField.innerText = newTotalBalance;
  console.log(newTotalBalance);
  console.log(newWithdraw);
});
