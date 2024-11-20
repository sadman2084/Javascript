//for ID
document.getElementById("heading").innerHTML="hello";//choosing the heading id and changed it to hello

//alternative
var heading1=document.getElementById("heading");//declaring a variable
heading1.innerHTML="hello";
//for tag
document.getElementsByTagName("p")[1].innerHTML="bangla bangla";
//Here we are using the tag names instead of Id ,But need to tell ther index number which index we want to change.
//index 0 is bangladesh and index 1 is japan

//for class
document.getElementsByClassName("c1")[1].innerHTML="BUET🤣"
//Here we are using the class names instead of Id ,But need to tell the index number which index we want to change.
//index 0 is PSTU and index 1 is KU


//suppose i want to create a new element in div named "catto".
//now i want to add new element from here in that tag
var heading1= document.createElement("h1");//which type of tag i want to create
var text=document.createTextNode("cat is loved by all");//this test i want to add in h1 tag
heading1.appendChild(text);

var mydiv =document.getElementById("catto");
mydiv.appendChild(heading1);


//now we will remove the text from the h1 or haeding1
//mydiv.removeChild(heading1);