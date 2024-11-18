var ID = 2102020;
document.write("the number 2102020 is "+ typeof (ID) + "<br>");

ID = toString(ID);//it is now in string
document.write("the number 2102020 is "+typeof(ID) + "<br>");

ID = parseInt(ID);//it is now in integer
document.write("the number 2102020 is "+typeof (ID) + "<br>");



var value = 220.43;
value = parseFloat(value);//it is now in float
document.write("the number 220.43 is "+typeof (value) + "<br>");
document.write("the float number is "+value.toFixed(2) + "<br>");

var value = 220.43;
value = parseInt(value);//it is now in float
document.write("the number 220.43 is "+typeof (value) + "<br>");
document.write("the integer number is "+ value + "<br>");

var value = 220.42325433;
document.write("the number is "+ value.toPrecision(5) + "<br>");//this will show only five digits

document.write("converted to number "+Number("7654.88")+ "<br>");//coverts to number
document.write("converted to number from boolean true "+Number(true)+ "<br>");//coverts to number from true
document.write("converted to number from boolean false "+Number(false)+ "<br>");//coverts to number from false
