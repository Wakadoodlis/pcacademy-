import Loans from "../interface/Loan";
// import basicLoan from "../abstr Class/abstrLoan";

export default class Houseloan implements Loans {
  private pSalary: number;
  private lTerm: number;
  private lAmount: number;
  private pChildren: number;

  constructor(pSalary, lTerm, lAmount, pChildren) {
    this.pSalary = pSalary;
    this.lTerm = lTerm;
    this.lAmount = lAmount;
    this.pChildren = pChildren;
  }
  payMonth(): number {
    let interest = 1.02;
    let monthPay = (this.lAmount * interest) / (this.lTerm * 12);
    return parseInt(monthPay.toFixed(2));
  }

  calculate(): number {
    let termInMonth = this.lTerm * 12;

    const minSalery = 400 + this.pChildren * 100;
    const maxTerm = 30;

    // counting maximum loan
    let maxPayment = this.pSalary - minSalery;
    let maxAmount = maxPayment * termInMonth;
    // checkink if term is not exceeding max term
    if (this.lTerm <= maxTerm) {
      return maxAmount;
    } else {
      alert("Loan term is to big. Max term - 30 years.");
    }
  }
}
