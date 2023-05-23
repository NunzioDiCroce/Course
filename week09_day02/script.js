var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// definizione ed assegnazione variabili Deposit/WithDraw
var oneDepositAmount = 900;
var oneWithDrawAmount = 400;
var twoDepositAmount = 1000;
var twoWithDrawAmount = 500;
var interest = 0.10;
// definizione classe MotherAccount
var MotherAccount = /** @class */ (function () {
    function MotherAccount(_balanceInit) {
        this.balanceInit = 0;
        this.balanceInit = _balanceInit;
    }
    MotherAccount.prototype.oneDeposit = function () {
        return this.balanceInit + oneDepositAmount;
    };
    MotherAccount.prototype.oneWithDraw = function () {
        return this.balanceInit + oneDepositAmount - oneWithDrawAmount;
    };
    MotherAccount.prototype.twoDeposit = function () {
        return this.balanceInit + oneDepositAmount - oneWithDrawAmount + twoDepositAmount;
    };
    MotherAccount.prototype.twoWithDraw = function () {
        return this.balanceInit + oneDepositAmount - oneWithDrawAmount + twoDepositAmount - twoWithDrawAmount;
    };
    return MotherAccount;
}());
// definizione classe SonAccount come estensione della classe MotherAccount
var SonAccount = /** @class */ (function (_super) {
    __extends(SonAccount, _super);
    function SonAccount(_balanceInit) {
        return _super.call(this, _balanceInit) || this;
    }
    SonAccount.prototype.addInterest = function () {
        return (this.balanceInit + oneDepositAmount - oneWithDrawAmount + twoDepositAmount - twoWithDrawAmount) * (1 - interest);
    };
    return SonAccount;
}(MotherAccount));
// istanza classe MotherAccount + consol.log
var newMotherAccount = new MotherAccount(1000);
console.log('- - - - - - - - - - MotherAccount - - - - - - - - - -');
console.log("Initial balance: ".concat(newMotherAccount.balanceInit, " \u20AC"));
console.log("Deposit[+]: ".concat(oneDepositAmount, " \u20AC"));
console.log("WithDraw[-]: ".concat(oneWithDrawAmount, " \u20AC"));
console.log("Deposit[+]: ".concat(twoDepositAmount, " \u20AC"));
console.log("WithDraw[-]: ".concat(twoWithDrawAmount, " \u20AC"));
console.log("Final Balance: ".concat(newMotherAccount.twoWithDraw(), " \u20AC"));
// istanza classe SonAccount + consol.log
var newSonAccount = new SonAccount(1000);
console.log('- - - - - - - - - - SonAccount - - - - - - - - - -');
console.log("Initial balance: ".concat(newSonAccount.balanceInit, " \u20AC"));
console.log("Deposit[+]: ".concat(oneDepositAmount, " \u20AC"));
console.log("WithDraw[-]: ".concat(oneWithDrawAmount, " \u20AC"));
console.log("Deposit[+]: ".concat(twoDepositAmount, " \u20AC"));
console.log("WithDraw[-]: ".concat(twoWithDrawAmount, " \u20AC"));
console.log("Interest: ".concat(interest * 100, "%"));
console.log("Final Balance: ".concat(newSonAccount.addInterest(), " \u20AC"));
