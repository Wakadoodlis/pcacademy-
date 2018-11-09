var minRows = 4;


var myTextareaRows = document.getElementById("myTextarea").rows;
var maxRows = 12;

if (myTextarea !== "") {
  myTextarea.rows = minRows;
} else if (myTextarea.clientHeight < myTextarea.offsetHeight) {
  myTextarea.setAttribute("rows", maxRows);

}

function texAreaSize(textarea) {

}

// if (myTextarea.clientHeight < myTextarea.scrollHeight)
//   {
//     textField.style.height = textField.scrollHeight + "px";
//     if (textField.clientHeight < textField.scrollHeight)
//     {
//       textField.style.height = 
//         (textField.scrollHeight * 2 - textField.clientHeight) + "px";
//     }
//   }