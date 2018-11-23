import Loans from "../interface/Loan";

export default class ConsumptLoan implements Loans {
  private Amount: number;
  private Term: number;

  constructor(lAmount, lTerm) {
    this.Amount = lAmount;
    this.Term = lTerm;
  }
  // culculating interest depending from item type. and also culculating monthly payment
  calculate(): number {
    let selector = document.getElementById("itemTypeC") as HTMLSelectElement;
    var value = selector.selectedIndex;
    const maxTerm = 5;
    const maxValue = 10000;
    const months = 12;
    let errMsg =
      "Loan term or amount is to big. Max term - 5 yars. Max amount - 10000 Euros";
    if (value == 0) {
      let interest = 1.1;
      let monthPayment = (this.Amount * interest) / (this.Term * months);
      if (this.Term <= maxTerm && this.Amount <= maxValue) {
        return parseInt(monthPayment.toFixed(2));
      } else {
        alert(errMsg);
      }
    }
    if (value == 1) {
      let interest = 1.15;
      let monthPayment = (this.Amount * interest) / (this.Term * months);
      if (this.Term <= maxTerm && this.Amount <= maxValue) {
        return parseInt(monthPayment.toFixed(2));
      } else {
        alert(errMsg);
      }
    }
    if (value == 2) {
      let interest = 1.2;
      let monthPayment = (this.Amount * interest) / (this.Term * months);
      if (this.Term <= maxTerm && this.Amount <= maxValue) {
        return parseInt(monthPayment.toFixed(2));
      } else {
        alert(errMsg);
      }
    }
  }
}
