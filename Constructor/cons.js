function student(name, age, cpga, lang) {
  this.name = name;
  this.age = age;
  this.cpga = cpga;
  this.lang = lang;
}
//constructor name is student

var student1 = new student("sadman", 12, 3.1, ["bangla", "english"]);
//object name is student1
document.write(student1.name + "<br>");
document.write(student1.age + "<br>");
document.write(student1.cpga + "<br>");
document.write(student1.lang + "<br>");
