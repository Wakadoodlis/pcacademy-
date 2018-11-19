import Loans from "../Interfaces/loans";

export default class HomeLoan extends Loans {
  lValue = parseInt(
    (<HTMLInputElement>document.getElementById("loanAmount")).value
  );
  lTerm = parseInt(
    (<HTMLInputElement>document.getElementById("loanTerm")).value
  );
  pSalary = parseInt(
    (<HTMLInputElement>document.getElementById("salary")).value
  );
  pChildren = parseInt(
    (<HTMLInputElement>document.getElementById("children")).value
  );

  lInterest = 1.2;
  maxTerm = 30;

  checkFields() {
    this.lValue = parseInt(
      (<HTMLInputElement>document.getElementById("loanAmount")).value
    );
    this.lTerm = parseInt(
      (<HTMLInputElement>document.getElementById("loanTerm")).value
    );
    this.maxTerm = 30;

    if (this.lTerm > this.maxTerm) {
      document.getElementById("form-wr").style.height = "420" + "px";
      document.getElementById("display").style.color = "red";
      document.getElementById(
        "display"
      ).innerHTML = `! Maximum term was exceeded !`;
    } else {
      document.getElementById("display").style.color = "#003C5A";
    }
  }
  getAmount() {
    this.lValue = parseInt(
      (<HTMLInputElement>document.getElementById("loanAmount")).value
    );
    this.lTerm = parseInt(
      (<HTMLInputElement>document.getElementById("loanTerm")).value
    );
    this.lInterest = 1.2;
    let payment = (this.lValue * this.lInterest) / this.lTerm;
    document.getElementById("display").innerHTML = `${payment.toFixed(
      2
    )} €/month`;
  }
}
