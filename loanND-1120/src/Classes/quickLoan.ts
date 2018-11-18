import Loans from "../Interfaces/loans";

export default class QuickLoan extends Loans {
  countPayment() {
    let amount = parseInt(
      (<HTMLInputElement>document.getElementById("loanAmount")).value
    );

    let term = parseInt(
      (<HTMLInputElement>document.getElementById("loanTerm")).value
    );
    let paymentPlace = document.getElementById("payMonth");
    let palukanos = 1.2;
    console.log(amount);
    console.log(term);
    // this.loanAmount = amount;
    // this.loanTerm = term;
    let payment = (amount * palukanos) / term;
    console.log(payment);
    let templateHTML = `<h5>${payment} €/month all amount: ${amount} all term: ${term}</h5>`;
    paymentPlace.insertAdjacentHTML("beforeend", templateHTML);
  }
}
