import QuickLoan from "../loan Classes/quickLoan";
import Houseloan from "../loan Classes/housingLoan";
import ConsumptLoan from "../loan Classes/consumLoan";

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=
// =-=-=-=-=-=-=-=-=  QUICK LOAN  -=-=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// let button = document.getElementById("quickBtn");
// let quickLoan = new QuickLoan();
window.addEventListener("load", function() {
  let button = document.getElementById("quickBtn");
  button.onclick = function(q) {
    let quickLoan = new QuickLoan(
      parseInt((<HTMLInputElement>document.getElementById("loanAmount")).value),
      parseInt((<HTMLInputElement>document.getElementById("loanTerm")).value)
    );
    q.preventDefault();
    document.getElementById(
      "display"
    ).innerHTML = `${quickLoan.calculate()} €/month`;
  };
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=
// =-=-=-=-=-=-=-=-=  home LOAN  -=-=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// let buttonh = document.getElementById("quickBtnH");
window.addEventListener("load", function() {
  let buttonh = document.getElementById("quickBtnH");
  buttonh.onclick = function(h) {
    let houseloan = new Houseloan(
      parseInt((<HTMLInputElement>document.getElementById("salaryH")).value),
      parseInt((<HTMLInputElement>document.getElementById("loanTermH")).value),
      parseInt(
        (<HTMLInputElement>document.getElementById("loanAmountH")).value
      ),
      parseInt((<HTMLInputElement>document.getElementById("childrenH")).value)
    );
    h.preventDefault();
    document.getElementById(
      "displayH"
    ).innerHTML = `${houseloan.calculate()} €`;
    document.getElementById(
      "monthlyh"
    ).innerHTML = `${houseloan.payMonth()} €/month`;
  };
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=
// =-=-=-=-=-=-=-=-=  consumption LOAN  -=-=-=-=-=-=-=-=-=-
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

window.addEventListener("load", function() {
  let buttonc = document.getElementById("quickBtnC");
  buttonc.onclick = function(c) {
    let consumptLoan = new ConsumptLoan(
      parseInt(
        (<HTMLInputElement>document.getElementById("loanAmountC")).value
      ),
      parseInt((<HTMLInputElement>document.getElementById("loanTermC")).value)
    );
    c.preventDefault();
    document.getElementById(
      "displayC"
    ).innerHTML = `${consumptLoan.calculate()} € /month`;
  };
});
