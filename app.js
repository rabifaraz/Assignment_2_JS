// Chapter 9-11 USER INPUT & CONDITIONAL STATEMENT

// Q-1:

// var userCity = prompt("Enter your city name please!");
// if (userCity === "karachi"){
//     alert("Welcome to the city of lights....");
// }else{
//     alert("Thankyou for your input...... but Karachi is the best");
// }

// Q-2:

// var  userGender = prompt("Please enter your Gender to acknowledge");
// if (userGender === "male"){
//     document.write("<h1>Good Morning Sir</h1>");
// }else if(userGender === "female"){
//     document.write("<h1>Good Morning Ma'am</h1>");
// }else
// document.write("<h1>Please enter one of either <q>male</q> or <q>female</q></h1>");

// Q-3:

// var inputColor = prompt(
//   "PLease enter any of three color name of Traffic signal light?"
// );
// if (inputColor === "red") {
//   document.write(inputColor + " MEANS YOU MUST STOP");
// } else if (inputColor === "yellow") {
//   document.write(inputColor + " MEANS BE READY TO MOVE");
// } else if (inputColor === "green") {
//   document.write(inputColor + " MEANS YOU CAN MOVE NOW");
// } else {
//   document.write(inputColor + " Not a valid Traffic signal light color");
// }

// Q-4:

// var remaingFuel = +prompt("Please enter the number value of remaining fuel in liters!");
// if (remaingFuel === 0.25){
// alert("Please refill the fuel in your car.....");
// }else
// alert("You are fine to go for now!!!");

// Q-5:

// a:
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// This alert will show because statement is true.

// b:
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// This alert will not show because statement is false.

// c:
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// This alert will show for conditions 2 and 4.

// d:
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// This alert will show because it is true.

// e:
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }
// This alert will show because it is true for var true.

// f:
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
// This alert will show but the math is false.

// Q-6:

// var firstSubject = +prompt("Please enter obtained marks of English");
// var secondSubject = +prompt("Please enter obtained marks of Maths");
// var thirdSubject = +prompt("Please enter obtained marks of Science");
// var totalMarks = +prompt("Enter your total marks", 300)

// var obtMarks = firstSubject + secondSubject + thirdSubject;
// var percentage = obtMarks / totalMarks * 100;
// var remarks = ["Excellent", "Good", "You need to improve", "Sorry!"]

// if (percentage >=80 && percentage <=100){
//     document.write("<h1>Marks Sheet</h1>" +"<h2>"+ "Total Marks : 300<br>" +"Marks obtained : " +obtMarks+"<br>"+"Percentage :" + percentage + "%<br>" + "Grade : A-one <br>" + "Remarks : " + remarks[0] +"</h2>");
// }else if (percentage >=70 && percentage <=80){
//     document.write("<h1>Marks Sheet</h1>" +"<h2>"+ "Total Marks : 300<br>" +"Marks obtained : " +obtMarks+"<br>"+"Percentage :" + percentage + "%<br>" + "Grade : A <br>" + "Remarks : " + remarks[1] +"</h2>");
// }else if (percentage >=60 && percentage <=70){
//     document.write("<h1>Marks Sheet</h1>" +"<h2>"+ "Total Marks : 300<br>" +"Marks obtained : " +obtMarks+"<br>"+"Percentage :" + percentage + "%<br>" + "Grade : B <br>" + "Remarks : " + remarks[2] +"</h2>");
// }
// else{
// document.write("<h1>Marks Sheet</h1>" +"<h2>"+ "Total Marks : 300<br>" +"Marks obtained : " +obtMarks+"<br>"+"Percentage :" + percentage + "%<br>" + "Grade : Fail <br>" + "Remarks : " + remarks[3] +"</h2>");
// }

// Q-7:

// var secretNum = 6;
// var userNum = +prompt("HINT: Secret No is between 1-10 \nEnter a number & Guess the secret Number");

// if(userNum === secretNum){
//     alert("Bingo! You win!")
// }else if(userNum === secretNum + 1 || userNum === secretNum - 1){
//     alert("Close enough to the correct answer");
// }else{
//     alert("Sorry... You loose! Would you like to try again?");
// }
// location.reload();

// Q-8:

// var userNum = +prompt("Divisibility by 3 Check \nEnter any number please");
// if (userNum % 3 === 0){
// alert(userNum + " It is Divisible by 3 completely");
// }else if((userNum % 3 > 0)){
//     alert(userNum + " Sorry but it is not Divisible by 3 completely");
// }else{
//     alert("Please Enter a Valid number");
// }

// Q-9:

// var number = +prompt("Enter any number to check odd or even");

// if (number % 2 === 0){
//     alert("This is an even number");
// }else if (number % 2 === 1){
//     alert("This is an odd number");
// }

// Q-10:

// var temperature = +prompt("Enter the current temprature Outside");

// if (temperature >= 40 && temperature <= 100) {
//   alert("It is too hot outside");
// } else if (temperature >= 30 && temperature <= 40) {
//   alert("The Weather today is Normal");
// } else if (temperature >= 20 && temperature <= 30) {
//   alert("Today's Weather is Cool");
// } else if (temperature >= 10 && temperature <= 20) {
//   alert("OMG! Today's Weather is so Cold");
// } else {
//   alert("PLease Enter a valid temprature");
// }

// Q-11:

// var firstNum = +prompt("Please Enter First Number");
// var secondtNum = +prompt("Please Enter Second Number");
// var operator = prompt("Please Enter operation + - * / or %");
// if (operator === "+") {
//   document.write("<h1>Addition of your numbers is: " + firstNum + secondtNum);
// }else if (operator === "-") {
//   document.write("<h1>Subtraction of your numbers is: " + (firstNum - secondtNum));
// }else if (operator === "*") {
//     document.write("<h1>Multiplication of your numbers is: " + firstNum * secondtNum);
// }else if (operator === "/") {
//     document.write("<h1>Division of your numbers is: " + firstNum / secondtNum);
// }else if (operator === "%") {
//     document.write("<h1>Modulus (Remainder) of your numbers is: " + firstNum % secondtNum);
// }else{document.write("<h1>Please Enter the field correctly");
// }

// Chapter 12-13 IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS.

// Q-1:

// var userString = prompt(
//   "Enter an Alphabet (Lowercase / Uppercase#) or a Number: "
// );
// var result = userString.charCodeAt(0);

// if (result >= 65 && result <= 90) {
//   alert(userString + " It is an Uppercase alphabet");
// } else if (result >= 97 && result <= 122) {
//   alert(userString + " It is an Lowercase alphabet");
// } else {
//   alert(userString + " It is a Number or Symbol");
// }

// Q-2:

// var num1 = +prompt("Enter the first integer:");
// var num2 = +prompt("Enter the Second integer:");

// if (num1 === num2) {
//   alert("Both of integers are equal.");
// } else if (num1 > num2) {
//   alert("The larger integer is: " + num1);
// } else {
//   alert("The larger integer is: " + num2);
// }

// Q-3:

// var userInput = parseFloat(prompt("Enter a number:"));

// if (isNaN(userInput)) {
//   alert("Invalid input. Please enter a valid number.");
//   location.reload();
// } else {
//   if (userInput > 0) {
//     alert("The number is positive.");
//   } else if (userInput < 0) {
//     alert("The number is negative.");
//   } else {
//     alert("The number is zero.");
//   }
// }

// Q-4:

// var inputChar = prompt("Enter an Alphabet (Single letter):");

// if (inputChar === "a" || inputChar === "e" || inputChar === "i" || inputChar === "o" || inputChar === "u") {
//     alert(inputChar + " is a Vowel. ");
// } else {
//     alert(inputChar + " is not a Vowel. ");
// }

// Q-5:

// var defaultPass = "karachi123"
// var userPass = prompt("Please Enter your password");

// if (userPass === defaultPass){
// document.write("Correct! The password you entered matches the original password.");
// }else {
//     document.write("Incorrect Password!!!");
// }

// Q-6:

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }else
// greeting = "Good evening";

// Q-7:

var timeInput = prompt("Please Enter Time in 24 hours clock Format i.e. 1900 = 7pm", 1900);

if (timeInput >= 0 && timeInput < 1200){
document.write("<h1>Good Morning!</h1>");
}else if (timeInput >= 1200 && timeInput < 1700){
document.write("<h1>Good Afternoon!</h1>");
}else if (timeInput >= 1700 && timeInput < 2100){
document.write("<h1>Good Evening!</h1>");
}else if (timeInput >= 2100 && timeInput < 2359){
document.write("<h1>Good Night!</h1>");
}else {
document.write("<h1>Enter Correct time in 24 hours format please!</h1>");
}