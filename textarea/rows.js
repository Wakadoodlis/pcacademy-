var minRows = 4;


var myTextareaRows = document.getElementById("myTextarea").rows;
var textArea = document.getElementById("myTextarea");
var maxRows = 12;

if (myTextarea !== "") {
  myTextarea.rows = minRows;
}

function texAreaSize(textarea) {

}

function count(area) {
  // document.getElementById("count1").innerHTML = area.value.length;
  if (area.value.length > 131) {
    area.rows = maxRows;
  } else {
    area.rows = minRows;
  }
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