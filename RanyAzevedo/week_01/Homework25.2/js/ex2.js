/*
JavaScript Bank
In this homework, you'll create a basic bank in Javascript.
The bank has many accounts and the following capabilities that
you need to write.

Bank

There is only one bank.
 * This bank has an array of accounts.
 * The bank needs a method that will return the total sum of money
 in the accounts.
 +It also needs an addAccount method that will enroll a new account at
  the bank and add it to the array of accounts.
 There is no need to create additional functions of the bank to delete
 accounts, etc.

The bank has many accounts. Accounts should be objects that all share
a set of common functionality.

Accounts

Accounts have a current balance and owner's name.
You should be able
 to
 *deposit
 *withdraw
 from an account to change the balance.

There is no need to write a user interface. Make sure functions return
values -- you may also have your functions console.log() values to help
you see your code working.

You should write a basic story through a series of JavaScript commands
 that shows that the methods do indeed work as expected: add some accounts,
 show the total balance, make some deposits and withdrawals,
 show the new total balance. */

var bank = [
  {
  name: 'Ana',
  balance: 5000
},
  {
  name: 'Paul',
  balance: 6000
},
 {
 name: 'Vick',
 balance: 7000
}
];

var sumMoney = function(i){
  var totalBalance = 0;
  for (var i = 0; i < bank.length; i++) {
     totalBalance += bank[i].balance;
  }
  return totalBalance;
};

var deposit = function (name, deposit){
  for (var i = 0; i < bank.length; i++) {
    if (name === bank[i].name){
      bank[i].balance += deposit;
     console.log (name + " has a total of $ " + totalAcc + " in her account");
     return totalAcc;
    }
  }
};

var withdraw = function (name, withdraw){
  for (var i = 0; i < bank.length; i++) {
    if (name === bank[i].name){
      var totalAcc = bank[i].balance - withdraw;
     console.log (name + " has a total of $ " + totalAcc + " in her account");
     return totalAcc;
   }
  }
};



// var addAccount = function(){ bank.push();};
// var withdraw = function (){};
