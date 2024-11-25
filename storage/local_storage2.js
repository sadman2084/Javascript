console.log(localStorage);

//setting the values
const batchmate=["sadman","taher","mota mehedi"];
localStorage.setItem("batchmate",JSON.stringify(batchmate));


// getting the values
//we have sent the values in array strin,so need to recieve as a string.
const name=JSON.parse(localStorage.getItem(batchmate));
console.log(name);
