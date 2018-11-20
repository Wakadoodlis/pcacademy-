import Loans from "../interface/Loan";

export default class Houseloan implements Loans {
  private pSalary: number;
  private lTerm: number;

  constructor(pSalary, lTerm) {
    this.pSalary = pSalary;
    this.lTerm = lTerm;
  }

  calculate(): number {
    let termInMonth = this.lTerm * 12;

    const minSalery = 400;
    // counting maximum loan
    let maxPayment = this.pSalary - minSalery;
    let maxAmount = maxPayment * termInMonth;
    return maxAmount;
  }
}

// export default class HousingLoan extends Loans {
//   // lValue = parseInt(
//   //   (<HTMLInputElement>document.getElementById("loanAmountH")).value
//   // );

//   // lTerm = parseInt(
//   //   (<HTMLInputElement>document.getElementById("loanTermH")).value
//   // );

//   // pSalary = parseInt(
//   //   (<HTMLInputElement>document.getElementById("salaryH")).value
//   // );
//   // pChildren = parseInt(
//   //   (<HTMLInputElement>document.getElementById("childrenH")).value
//   // );

//   hlInterest = 1.2;
//   maxhTerm = 30;

//   checkTerm() {
//     this.lValue = parseInt(
//       (<HTMLInputElement>document.getElementById("loanAmountH")).value
//     );
//     this.lTerm = parseInt(
//       (<HTMLInputElement>document.getElementById("loanTermH")).value
//     );
//     this.maxTerm = 30;

//     if (this.lTerm > this.maxhTerm) {
//       // document.getElementById("form-wr").style.height = "420" + "px";
//       document.getElementById("displayH").style.color = "red";
//       document.getElementById(
//         "displayH"
//       ).innerHTML = `! Maximum term was exceeded !`;
//     } else {
//       document.getElementById("displayH").style.color = "#003C5A";
//     }
//   }

//   getLoanAmount(loanAmount, loanTerm, pSalary) {
//     // this.lValue = parseInt(
//     //   (<HTMLInputElement>document.getElementById("loanAmountH")).value
//     // );
//     // this.lTerm = parseInt(
//     //   (<HTMLInputElement>document.getElementById("loanTermH")).value
//     // );
//     // this.pSalary = parseInt(
//     //   (<HTMLInputElement>document.getElementById("salaryH")).value
//     // );
//     let month = 12;
//     let minSalary = 400;
//     let termInMounth = loanTerm * month;
//     this.lInterest = 1.02;
//     // counting monthly payments
//     let loanAmountMonth = (this.lValue * this.lInterest) / termInMounth;
//     document.getElementById("monthlyh").innerHTML = `${loanAmountMonth.toFixed(
//       2
//     )} €/month`;
//     // counting maximum loan
//     let maxPayment = this.pSalary - minSalary;
//     let maxAmount = maxPayment * termInMounth;
//     document.getElementById("displayH").innerHTML = `${maxAmount.toFixed(
//       2
//     )} €/month`;
//     // for (this.pChildren = 1; this.pChildren > 10; this.pChildren++) {}
//     // if (this.pChildren == 1) {
//     //   let minSalary = 400;
//     //   // counting maximum loan
//     //   let maxPayment = this.pSalary - minSalary;
//     //   let maxAmount = maxPayment * termInMounth;
//     //   document.getElementById("displayH").innerHTML = `${maxAmount.toFixed(
//     //     2
//     //   )} €/month`;
//     // }
//     // if (this.pChildren == 2) {
//     //   let minSalary = 500;
//     //   // counting maximum loan
//     //   let maxPayment = this.pSalary - minSalary;
//     //   let maxAmount = maxPayment * termInMounth;
//     //   document.getElementById("displayH").innerHTML = `${maxAmount.toFixed(
//     //     2
//     //   )} €/month`;
//     // }
//     // if (this.pChildren == 3) {
//     //   let minSalary = 600;
//     //   // counting maximum loan
//     //   let maxPayment = this.pSalary - minSalary;
//     //   let maxAmount = maxPayment * termInMounth;
//     //   document.getElementById("displayH").innerHTML = `${maxAmount.toFixed(
//     //     2
//     //   )} €/month`;
//     // }
//   }
// }
