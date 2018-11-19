export default abstract class Loans {
  lValue: number;
  lTerm: number;
  lInterest: number;
  pSalary: number;
  pChildren: number;
  maxValue: number;
  maxTerm: number;

  // getAmount() {
  //   let payment = (this.loanAmount * this.interest) / this.loanTerm;
  //   return payment;
  //   // (document.getElementById("display").innerHTML = `${payment} €/month`);
  // }

  // loanAmountInput: HTMLElement = document.getElementById("loanAmount");
  // loanTerminput: HTMLElement = document.getElementById("loanTerm");
  // constructor(loanAmount: number, loanTerm: number) {
  //   this.loanAmount = loanAmount;
  //   this.loanTerm = loanTerm;
  // }
}
