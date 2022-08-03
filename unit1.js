function calcAge() {
var dob = document.getElementById("Birthdate").value;
var currDate = new Date(dob);
var currYear = currDate.getFullYear();
var age = currYear - 
return document.getElementByID("Age").innerHTML = age
}

function calcCredit() {
const score = []
score[0] = document.getElementById("score1").value;
score[1] = document.getElementById("score2").value;
score[2] = document.getElementById("score3").value;
score[3] = document.getElementById("score4").value;
score[4] = document.getElementById("score5").value;
score[5] = document.getElementById("score6").value;
  

function load() {
  calcAge();
  calcCredit();
  calcComment();
  calcGPA();
}
