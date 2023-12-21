function BankAccount(accountNumber, name, type, balance ,isActive){
    this.accountNumber=accountNumber,
    this.name=name,
    this.type=type,
    this. balance= balance,
    this.bankstatus=isActive

};


BankAccount.prototype.deposit=function deposit(amount){
     if(amount>0){
        this.balance+=amount
        console.log(`Deposited ${amount} into ${this.name}'s account. New balance: ${this.balance}`);
     }
     else{
        console.log('Please enter a valid deposit amount.');
     }


}
BankAccount.prototype.withdraw=function withdraw(amount){
    if(amount>0 && amount<=this.balance){
       this.balance-=amount
       console.log(`Withdrawn ${amount} from ${this.name}'s account. New balance: ${this.balance}`);
      
    }
    else{
        console.log('Insufficient funds or invalid withdrawal amount.');
    }


}
BankAccount.prototype.checkbalance=function balancecheck(){
    console.log(`Current amount ${this.balance} from ${this.name}'s account.`);
}
BankAccount.prototype.isActive=function isActive(){
     if(this.bankstatus===1){
        console.log("active account")
     }else{
        console.log("inactive account")
     }
}
let p1= new BankAccount(12355556778, "shivani","saving bank",1000,1 );
let p2= new BankAccount(1235537778, "ishu","saving bank",1,0 );

let p3= new BankAccount(12356786778, "bhanu","saving bank",10000000,1 );




p1.deposit(500);
p1.withdraw(10000);
p1.withdraw(50);
p1.checkbalance();
p1.isActive();

// p2.deposit(5000000);
// p2.withdraw(10);
// p2.withdraw(50);
// p2.checkbalance();
// p2.isActive();

// p3.deposit(50);
// p3.withdraw(100);
// p3.withdraw(500);
// p3.checkbalance();
// p3.isActive();





