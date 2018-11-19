import QuickLoan from "../Classes/quickLoan";
import HomeLoan from "../Classes/homeLoan";

let button = document.getElementById("quickBtn");
// QUICK LOAN
let quickLoan = new QuickLoan();

// let button = document.getElementById("quickBtn");
button.onclick = function(e) {
  e.preventDefault();
  quickLoan.getAmount();
  quickLoan.checkFields();
};
quickLoan.getAmount();
quickLoan.checkFields();

// HOME LOAN
let homeLoan = new HomeLoan();

button.onclick = function(e) {
  e.preventDefault();
};
