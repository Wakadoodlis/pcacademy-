// import Loans from "../abstract Class/loan";

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
