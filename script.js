//  object oriented programming-> classes

// properties, fileds and methods

class BankAccount{
    // fields
// number
// name
#balance
// constructor-> 
// _balance=
// num=[]
constructor(number,name,balance){
this.number=number
this.name=name
this.#balance=balance
// this.num.push(this)
}


// methods
withdraw(amount){
   if(this.#balance>amount){ this.#balance-=amount
    console.log(`you have withdrew  ${amount}, your #balance is ${this.#balance}`)}
    else{
        console.log("Insufficient Funds")
    }

}
 set deposit(amount){
    this.#balance+=amount

}
get inquireBalance(){
    console.log("your balance is "+this.#balance)
    return this.#balance

}
getLoan(){

}
static numAccounts(){
return num
}


}

let acnt1= new BankAccount(1207431,'Steve Otieno',200000)
console.log(acnt1)

acnt1.deposit=15000
acnt1.withdraw(5000)
acnt1.inquireBalance
let acnt2=new BankAccount(1234565,'Azhar Takoy', 1000000)
acnt2.inquireBalance
// acnt2.numAccounts()
// console.log(acnt2.balance)
// methods -> static, standard, 
// getter, setter
// get->  set->
//  console.log(BankAccount.numAccounts())



// inheritance one class acquires the features of another class

// Current- Joint- Savings
class Savings extends BankAccount{
    constructor(...args){
        super(...args)
        this.target=args[args.length-1]
    }
    targetSaving(){
        console.log('Your target savings yearly is '+this.target)
    }

}
let svng1= new Savings(123456,"Scholar",450000)
console.log(svng1)
svng1.targetSaving()



// syntatic sugar
// class-Es6-2015
//  the prototype model


// creating a function
// adding fields
// add methods 


// prototype
function BankAcc(number, name, balance){
    this.number=number
    this.name=name
    this.balance=balance
    // this.inqbalance=function(){
    //     return this.balance
    // }
}
BankAcc.prototype.inqbalance=function(){
    return this.balance
}
BankAcc.prototype.withdraw=function(amount){
    if(this.balance>amount){ 
        this.balance-=amount
        console.log(`you have withdrew  ${amount}, your #balance is ${this.balance}`)}
        else{
            console.log("Insufficient Funds")
        }
        return this.balance
}

console.log(acn.withdraw(70000)) 

// 
