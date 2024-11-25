const message = "Today is friday";

document.write(message.startsWith("Today") +"<br>");
document.write(message.startsWith("Today", 0)+"<br>");
document.write(message.startsWith("Today", 5)+"<br>");
document.write(message.startsWith("today")+"<br>");

document.write(message.endsWith("today")+"<br>");
document.write(message.endsWith("friday")+"<br>");

document.write(message.includes("Today")+"<br>");
document.write(message.includes("is")+"<br>");
document.write(message.includes("that")+"<br>");