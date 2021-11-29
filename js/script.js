/* Question 1 */

var firstNumber = 90;
var secondNumber = 89;

if (firstNumber < secondNumber) {
    console.log("The first number is smaller than the second");
}

/* Question 2 */

var age = 11;
var minimumAge = "13";

if (age >= minimumAge) {
    console.log("pass");
}
else {
    console.log("fail");
}

/* Question 3 */

var income = "11.050";
var maximumIncome = "13.075";

if (income >= maximumIncome) {
    console.log("pass")
}
else {
    console.log("fail")
}

/* Question 4 */

var studentAge = 19;

var message;

if (studentAge >= 6 && studentAge <= 13 ){
    message = "barneskole";
}
else if (studentAge >= 14 && studentAge <= 16 ) {
    message = "ungdomskole";
}

else if (studentAge >= 17 && studentAge <= 19 ) {
    message = "Videregående skole";
}

else {
    message = "Invalid age";
}

console.log(message)

/* Question 5 */

var colour = "blue";

if ((colour === "orange")) {
    console.log("this colour is a bit rubbish");
    
}

/* Question 6 */

var invoicePaid = false;

if (invoicePaid === false) {
    console.log("Not paid")
}

/* Question 7 */

var selectedNumber = 11;
var winningNumber = "15";

if (selectedNumber !== parseInt (winningNumber)) {
    console.log("You lose again");
}

/* Question 8 */

var daysOfTheWeek = 2;
var message;

switch (daysOfTheWeek) {
    case 1:
        message = "Monday";
        break;
    case 2:
        message = "Tuesday";
        break;
    case 3:
        message = "Wednesday";
        break;
    case 4:
        message = "Thursday";
        break;
    case 5:
        message = "Friday";
        break;
    case 6:
        message = "Saturday";
        break;
    case 7:
        message = "Sunday";
        break;
}

console.log(message);

