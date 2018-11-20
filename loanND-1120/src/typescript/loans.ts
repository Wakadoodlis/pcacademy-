import QuickLoan from "../loan Classes/quickLoan";
import Houseloan from "../loan Classes/housingLoan";
// import ConsumptionLoan from "../loan Classes/consumLoan";

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=
// =-=-=-=-=-=-=-=-=  QUICK LOAN  -=-=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// let button = document.getElementById("quickBtn");
// let quickLoan = new QuickLoan();

let button = document.getElementById("quickBtn");
button.onclick = function(e) {
  let quickLoan = new QuickLoan(
    parseInt((<HTMLInputElement>document.getElementById("loanAmount")).value),
    parseInt((<HTMLInputElement>document.getElementById("loanTerm")).value)
  );
  e.preventDefault();
  document.getElementById(
    "display"
  ).innerHTML = `${quickLoan.calculate()} €/month`;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=
// =-=-=-=-=-=-=-=-=  home LOAN  -=-=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

let buttonh = document.getElementById("quickBtnH");
buttonh.onclick = function(a) {
  let houseloan = new Houseloan(
    parseInt((<HTMLInputElement>document.getElementById("salaryH")).value),
    parseInt((<HTMLInputElement>document.getElementById("loanTermH")).value)
  );
  a.preventDefault();
  document.getElementById(
    "displayH"
  ).innerHTML = `${houseloan.calculate()} €/month`;
};
// housingLoan.getLoanAmount();
// buttonh.onclick = function(e) {
//   e.preventDefault();
//   alert("housing ");
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=
// =-=-=-=-=-=-=-=-=  consumption LOAN  -=-=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// let buttonc = document.getElementById("quickBtnC");
// console.log(buttonc);
// let consumptionLoan = new ConsumptionLoan();
// buttonc.onclick = function(c) {
//   c.preventDefault();
//   alert("consum");
// };
