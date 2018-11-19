import Loans from "../Interfaces/loans";

export default class QuickLoan extends Loans {
  lValue = parseInt(
    (<HTMLInputElement>document.getElementById("loanAmount")).value
  );
  lTerm = parseInt(
    (<HTMLInputElement>document.getElementById("loanTerm")).value
  );
  lInterest = 1.2;
  maxValue = 5000;
  maxTerm = 24;

  // checkInput(){
  // //   if(document.getElementById("loanAmount").value != this.lValue)
  // // }

  checkValue() {
    if (this.lValue > this.maxValue) {
      document.getElementById("form-wr").style.height = "400" + "px";
      document.getElementById("valueToBig").innerHTML =
        "Maximum amount - 5000€";
    } else {
      document.getElementById("valueToBig").remove();
      document.getElementById("form-wr").style.height = "350" + "px";
    }
  }

  checkTerm() {
    if (this.lTerm > this.maxTerm) {
      document.getElementById("form-wr").style.height = "420" + "px";
      document.getElementById("termToBig").innerHTML =
        "Maximum term - 24 month";
    } else {
      document.getElementById("termToBig").remove();
      document.getElementById("form-wr").style.height = "350" + "px";
    }
  }
  getAmount() {
    let payment = (this.lValue * this.lInterest) / this.lTerm;
    document.getElementById("display").innerHTML = `${payment.toFixed(
      2
    )} €/month`;
  }
  // countPayment() {
  //   let amount = parseInt((<HTMLInputElement>document.getElementById("loanAmount")).value);
  //   let term = parseInt(<HTMLInputElement>document.getElementById("loanTerm")).value);
  //   let palukanos = 1.2;
  //   console.log(amount);
  //   console.log(term);
  //   // this.loanAmount = amount;
  //   // this.loanTerm = term;
  //   let payment = (amount * palukanos) / term;
  //   console.log(payment);
  //   document.getElementById("display").innerHTML = `${payment} €/month`;
  // }
}
