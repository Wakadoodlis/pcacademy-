import Loans from "../interface/Loan";

export default class ConsumptLoan implements Loans {
  private lAmount: number;
  private lTerm: number;

  constructor(lAmount, lTerm) {
    this.lAmount = lAmount;
    this.lTerm = lTerm;
  }
  // culculating interest depending from item type. and also culculating monthly payment
  calculate(): number {
    // setting dropdown items from index
    let selector = document.getElementById("itemTypeC") as HTMLSelectElement;
    var value = selector.selectedIndex;
    const maxTerm = 5;
    const maxValue = 10000;
    let errMsg =
      "Loan term or amount is to big. Max term - 5 yars. Max amount - 10000 Euros";
    // checking which dropdown item, and culculating interest and monthly payments.
    // interest 10%
    if (value == 0) {
      let interest = 1.1;
      let monthPayment = (this.lAmount * interest) / (this.lTerm * 12);
      // checkink if term and amount is not exceeding max term and max amount
      if (this.lTerm <= maxTerm && this.lAmount <= maxValue) {
        return parseInt(monthPayment.toFixed(2));
      } else {
        alert(errMsg);
      }
    }
    // interest 15%
    if (value == 1) {
      let interest = 1.15;
      let monthPayment = (this.lAmount * interest) / (this.lTerm * 12);
      if (this.lTerm <= maxTerm && this.lAmount <= maxValue) {
        return parseInt(monthPayment.toFixed(2));
      } else {
        alert(errMsg);
      }
    }
    // interest 20%
    if (value == 2) {
      let interest = 1.2;
      let monthPayment = (this.lAmount * interest) / (this.lTerm * 12);
      if (this.lTerm <= maxTerm && this.lAmount <= maxValue) {
        return parseInt(monthPayment.toFixed(2));
      } else {
        alert(errMsg);
      }
    }
  }
}
