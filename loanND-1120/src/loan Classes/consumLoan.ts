import Loans from "../interface/Loan";

export default class ConsumptLoan implements Loans {
  private lAmount: number;
  private lTerm: number;

  constructor(lAmount, lTerm) {
    this.lAmount = lAmount;
    this.lTerm = lTerm;
  }

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

// export default class ConsumptionLoan extends Loans {
//   lValue = parseInt(
//     (<HTMLInputElement>document.getElementById("loanAmountC")).value
//   );
//   lTerm = parseInt(
//     (<HTMLInputElement>document.getElementById("loanTermC")).value
//   );

//   lInterest = 1.2;
//   maxTerm = 30;

//   checkFields() {
//     this.lValue = parseInt(
//       (<HTMLInputElement>document.getElementById("loanAmountC")).value
//     );
//     this.lTerm = parseInt(
//       (<HTMLInputElement>document.getElementById("loanTermC")).value
//     );
//     this.maxTerm = 30;

//     if (this.lTerm > this.maxTerm) {
//       document.getElementById("form-wr").style.height = "420" + "px";
//       document.getElementById("displayC").style.color = "red";
//       document.getElementById(
//         "displayC"
//       ).innerHTML = `! Maximum term was exceeded !`;
//     } else {
//       document.getElementById("displayC").style.color = "#003C5A";
//     }
//   }
//   getAmount() {
//     this.lValue = parseInt(
//       (<HTMLInputElement>document.getElementById("loanAmountC")).value
//     );
//     this.lTerm = parseInt(
//       (<HTMLInputElement>document.getElementById("loanTermC")).value
//     );
//     this.lInterest = 1.2;
//     let payment = (this.lValue * this.lInterest) / this.lTerm;
//     document.getElementById("displayC").innerHTML = `${payment.toFixed(
//       2
//     )} €/month`;
//   }
// }
