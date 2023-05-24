"use strict";
// definizione ed assegnazione variabili Deposit/WithDraw
let oneDepositAmount = 900;
let oneWithDrawAmount = 400;
let twoDepositAmount = 1000;
let twoWithDrawAmount = 500;
let interest = 0.10;
// definizione classe MotherAccount
class MotherAccount {
    constructor(_balanceInit) {
        this.balanceInit = 0;
        this.balanceInit = _balanceInit;
    }
    oneDeposit() {
        return this.balanceInit + oneDepositAmount;
    }
    oneWithDraw() {
        return this.balanceInit + oneDepositAmount - oneWithDrawAmount;
    }
    twoDeposit() {
        return this.balanceInit + oneDepositAmount - oneWithDrawAmount + twoDepositAmount;
    }
    twoWithDraw() {
        return this.balanceInit + oneDepositAmount - oneWithDrawAmount + twoDepositAmount - twoWithDrawAmount;
    }
}
// definizione classe SonAccount come estensione della classe MotherAccount
class SonAccount extends MotherAccount {
    constructor(_balanceInit) {
        super(_balanceInit);
    }
    addInterest() {
        return (this.balanceInit + oneDepositAmount - oneWithDrawAmount + twoDepositAmount - twoWithDrawAmount) * (1 - interest);
    }
}
// istanza classe MotherAccount + consol.log
let newMotherAccount = new MotherAccount(1000);
console.log('- - - - - - - - - - MotherAccount - - - - - - - - - -');
console.log(`Initial balance: ${newMotherAccount.balanceInit} €`);
console.log(`Deposit[+]: ${oneDepositAmount} €`);
console.log(`WithDraw[-]: ${oneWithDrawAmount} €`);
console.log(`Deposit[+]: ${twoDepositAmount} €`);
console.log(`WithDraw[-]: ${twoWithDrawAmount} €`);
console.log(`Final Balance: ${newMotherAccount.twoWithDraw()} €`);
// istanza classe SonAccount + consol.log
let newSonAccount = new SonAccount(1000);
console.log('- - - - - - - - - - SonAccount - - - - - - - - - -');
console.log(`Initial balance: ${newSonAccount.balanceInit} €`);
console.log(`Deposit[+]: ${oneDepositAmount} €`);
console.log(`WithDraw[-]: ${oneWithDrawAmount} €`);
console.log(`Deposit[+]: ${twoDepositAmount} €`);
console.log(`WithDraw[-]: ${twoWithDrawAmount} €`);
console.log(`Interest: ${interest * 100}%`);
console.log(`Final Balance: ${newSonAccount.addInterest()} €`);
