
function deleteSomething() {
  let value = confirm("Do you want to delete?");
  if (value) {
   document.write("deleted");
  } else {
    document.write("not deleted");
  }
}
deleteSomething();

function welcomeMessage() {
    var h1 = document.createElement("h1");
    let text;
  
    var name = prompt("Enter your name: ");
    if (name == null || name == "") {
      text = "no name found";
    } else {
      text = "welcome " + name;
    }
    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
  }
  
  welcomeMessage();