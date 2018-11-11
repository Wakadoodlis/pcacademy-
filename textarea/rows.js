// priskiriam kintamuosius minrow ir maxrow ir textarea
var minRows = 3;
var maxRows = 12;
var myTextarea = document.getElementById("myTextarea");
// tikrinam textarea ir uzdedam min row skaiciu
if (myTextarea !== "") {
  myTextarea.rows = minRows;
}
//tikrinam ar textarea perziangia min row skaiciu, pagal raidziu skaiciu ir uzdedam max row. Max row nuimam, jei text area sumazeja iki min row.
function count(area) {
  // document.getElementById("count1").innerHTML = area.value.length;
  if (area.value.length > 130) {
    area.rows = maxRows;
  } else {
    area.rows = minRows;
  }
}