//"change" event
//we can work with the ->text,number,password,email,color,radio,checkbox,search,time,date,datetime,week,month,url,tel,file

const input = document.querySelector("input[name=name]");
input.addEventListener('change', changeHander);


function changeHander(event) {
    // document.write(event);
    // document.write(event.type);
    // document.write(event.target);
    // document.write(event.target.className);
    // document.write(event.target.id);
    //document.write(event.target.value);
}



// Select all checkboxes with the name 'program'
const programs = document.querySelectorAll("input[name=program]");

// Add an event listener to each checkbox
programs.forEach((program) => {
    program.addEventListener("change", programHandler);
});

// The event handler function
function programHandler(event) {
    // Check if the checkbox is checked
    if (event.target.checked) {
        // Log the value of the checked checkbox to the console
        console.log(event.target.value);
    }
}
