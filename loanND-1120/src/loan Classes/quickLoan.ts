import Loans from "../interface/Loan";

export default class QuickLoan implements Loans {
  private lAmount: number;
  private lTerm: number;

  constructor(lValue, lTerm) {
    this.lAmount = lValue;
    this.lTerm = lTerm;
  }
  // monthly payment culculator
  calculate(): number {
    // interest always 20 %
    const interest = 1.2;
    const maxTerm = 24;
    const maxAmount = 5000;
    // culculating monthly  payment
    let monthPayment = (this.lAmount * interest) / this.lTerm;
    // checkink if term and amount is not exceeding max term and max amount
    if (this.lTerm <= maxTerm && this.lAmount <= maxAmount) {
      return parseInt(monthPayment.toFixed(2));
    } else {
      alert(
        "Loan term or amount is to big. Max term - 24 month. Max amount - 5000 Euros"
      );
    }
  }
}
