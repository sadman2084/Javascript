var c = document.getElementById("canva");
var ctx = c.getContext("2d");

ctx.strokeStyle="black";//to create a black border
ctx.strokeRect(10,10,380,280);//border size


ctx.fillStyle = "green";  //rectanghle color
ctx.fillRect(12, 12, 376, 276); //Reactangle size(x axis,y axis,width,height)



var centerX = c.width / 2;
var centerY = c.height / 2;

ctx.beginPath();  // Start the path for the circle
ctx.arc(centerX, centerY, 50, 0, 2 * Math.PI, false); //center from x,cneter from y,radius,staring angle,ending angle,counter wise circle
ctx.fillStyle = "red";  // Set the fill color to red
ctx.fill();  // Fill the circle with red color
ctx.stroke();