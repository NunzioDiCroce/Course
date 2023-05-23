
// definizione ed assegnazione variabili Deposit/WithDraw
let oneDepositAmount:number = 900;
let oneWithDrawAmount:number = 400;
let twoDepositAmount:number = 1000;
let twoWithDrawAmount:number = 500;
let interest:number = 0.10;

// definizione classe MotherAccount
class MotherAccount {
    balanceInit:number = 0;
    constructor (_balanceInit:number) {
        this.balanceInit = _balanceInit
    }
    oneDeposit (): number {
        return this.balanceInit + oneDepositAmount;
    }
    oneWithDraw (): number {
        return this.balanceInit + oneDepositAmount - oneWithDrawAmount;
    }
    twoDeposit (): number {
        return this.balanceInit + oneDepositAmount - oneWithDrawAmount + twoDepositAmount;
    }
    twoWithDraw (): number {
        return this.balanceInit + oneDepositAmount - oneWithDrawAmount + twoDepositAmount - twoWithDrawAmount
    }
}

// definizione classe SonAccount come estensione della classe MotherAccount
class SonAccount extends MotherAccount {
    constructor (_balanceInit:number) {
        super (_balanceInit)
    }
    addInterest (): number {
        return (this.balanceInit + oneDepositAmount - oneWithDrawAmount + twoDepositAmount - twoWithDrawAmount)*(1-interest)
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
console.log(`Interest: ${interest*100}%`);
console.log(`Final Balance: ${newSonAccount.addInterest()} €`);
