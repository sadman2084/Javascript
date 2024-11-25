function student(name, age) {
    return {
        name,
        age
    }
}
console.log(student("sadman", 12));



// Concise method syntax
//example 1
let message1 = {
    body: function () {
        return (`Eid is always special day for us.`);
    }
}
console.log(message1.body())

// example 2
let message2 = {
    body() {
        return (`Eid is always special day for us.`);
    }
}
console.log(message2.body())


//example 3
let message3 = {
    'body name'() {
        return (`Eid is always special day for us.`);
    }
}
console.log(message3['body name']())