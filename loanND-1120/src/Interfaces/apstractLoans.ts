export default abstract class AbstractLoans {
  loanAmount: number;
  loanTerm: number;

  constructor(loanAmount: number, loanTerm: number) {
    this.loanAmount = loanAmount;
    this.loanTerm = loanTerm;
  }
}
