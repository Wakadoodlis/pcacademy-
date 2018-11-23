import Loans from "../interface/Loan";

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
    const months = 12;
    let interest = 1.02;
    let monthPay = (this.lAmount * interest) / (this.lTerm * months);
    return parseInt(monthPay.toFixed(2));
  }
  calculate(): number {
    const months = 12;
    let termInMonth = this.lTerm * months;
    const childrenMoney = 100;
    const minSalery = 400 + this.pChildren * childrenMoney;
    const maxTerm = 30;
    let maxPayment = this.pSalary - minSalery;
    let maxAmount = maxPayment * termInMonth;
    if (this.lTerm <= maxTerm) {
      return maxAmount;
    } else {
      alert("Loan term is to big. Max term - 30 years.");
    }
  }
}
