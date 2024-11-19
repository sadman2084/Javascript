var value = parseInt(prompt("Input the value"));

// Using if-else
document.write("Using if else" + "<br><br>");
if (value > 0) {
  document.write("positive value <br><br>");
} else if (value < 0) {
  document.write("negative value <br><br>");
} else {
  document.write("zero value <br><br>");
}

// Using switch case
document.write("Using switch case" + "<br><br>");
switch (true) { 
  case value > 0:
    document.write("positive value <br>");
    break;

  case value < 0:
    document.write("negative value <br>");
    break;

  default:
    document.write("zero value <br>");
}
