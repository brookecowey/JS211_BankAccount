//BankAccount

class BankAccount
 {
    constructor(_accountNumber, _owner)
    {
      this.accountNumber = _accountNumber 
      this.owner = _owner
    }

    transation = []

    balance() //gets the balance
    {
      
      if(this.transation.length >=2)
      {
        console.log("No History")
      }

      else if(this.transation.length == 1)
      {
        this.transation[0].amount
        console.log(this.transation[0].amount)
      }

      else {

      let sum = this.transaction.reduce(
        function(a, b){
        return a.amount + b.amount;
      });
      
      console.log("Sum: " + sum)
      }
    }
    deposit(amt) //make transaction
    {

      let currTransaction = new Transation(amt, this.owner)
      console.log(currTransaction.date)
      this.transation.push(currTransaction)
    }
    charge(payee, amt)
    {
      let currTransaction = new Transation(amt, payee)
      this.transation.push(currTransaction)
    }




class Transation
{
  constructor(_amount, _payee)
  {
    this.amount = _amount,
    this.payee = _payee

    const d = new Date();
    this.date = d.getDay();
  }
  date
}

let myFirstBankAccount = new BankAccount("account123", "Michael Scott");

let myFirstTransaction = new Transation(12.50, "Holly Scott");



myFirstBankAccount.deposit(10.50)
myFirstBankAccount.deposit(100.50)
//should have 111 in account

myFirstBankAccount.charge(50)
myFirstBankAccount.balance()

