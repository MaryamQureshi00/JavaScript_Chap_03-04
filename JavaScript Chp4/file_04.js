console.log('Chapter 04 Assignment');
/*exercise 4.1
1. Create a variable with a Boolean value.
2. Output the value of the variable to the console.
3. Check whether the variable is true and if so, output a message to the console,
using the following syntax:
if(myVariable){
//action
} 
4. Add another if statement with an ! in front of the variable to check whether
the condition is not true, and create a message that will be printed to the
console in that instance. You should have two if statements, one with an
! and the other without. You could also use an if and an else statement
instead—experiment!
5. Change the variable to the opposite to see how the result changes.
*/
let myVariable = true;
console.log(`The value of myVariable is ${myVariable}`);

if (myVariable){
    console.log(`myVariable is true! This message is from the first if statement`);
}
if (!myVariable){
    console.log(`myVariable is not true! This message is from the second if statement`);
} else{
    console.log(`myVariable is true! This message is from else`);
}
myVariable = !myVariable;

console.log(`The value of myVariable is ${myVariable}`);

if (myVariable){
    console.log(`myVariable is true! This message is from the first if statement`);
}
if (!myVariable){
    console.log(`myVariable is not true! This message is from the second if statement`);
} else {
    console.log(`myVariable is true! This message is from else`);
}

/*exercise 4.2
1. Create a prompt to ask the user's age
2. Convert the response from the prompt to a number
3. Declare a message variable that you will use to hold the console message for
the user
4. If the input age is equal to or greater than 21, set the message variable to
confirm entry to a venue and the ability to purchase alcohol
5. If the input age is equal to or greater than 19, set the message variable to
confirm entry to the venue but deny the purchase of alcohol
6. Provide a default else statement to set the message variable to deny entry if
none are true
7. Output the response message variable to the console
*/


let age = Number(prompt("Enter your age: "));
let message;

if (age >= 21) {
    message = `You are confirmed for entry to the venue and can purchase alcohol.`;
} else if (age >= 19) {
    message = `You are confirmed for entry to the venue but can't purchase alcohol.`;
} else {
    message = "You are denied entry to the venue";
}

console.log(message);

/*exercise 4.3
1. Create a Boolean value for an ID variable
2. Using a ternary operator, create a message variable that will check whether
their ID is valid and either allow a person into a venue or not
3. Output the response to the console
*/

let id = true;
let message2 = id ? console.log(`You are allowed to enter the venue`) : consocole.log(`You are not allowed to enter the venue`);

/* exercise 4.4
As discussed in Chapter 1, Getting Started with JavaScript, the JavaScript function Math.
random() will return a random number in the range of 0 to less than 1, including 0
but not 1. You can then scale it to the desired range by multiplying the result and
using Math.floor() to round it down to the nearest whole number; for example, to
generate a random number between 0 and 9:
// random number between 0 and 1
let randomNumber = Math.random();
// multiply by 10 to obtain a number between 0 and 10
randomNumber = randomNumber * 10;
// removes digits past decimal place to provide a whole number
RandomNumber = Math.floor(randomNumber);
In this exercise, we'll create a Magic 8-Ball random answer generator:
1. Start by setting a variable that gets a random value assigned to it. The value
is assigned by generating a random number 0-5, for 6 possible results. You
can increase this number as you add more results.
2. Create a prompt that can get a string value input from a user that you can
repeat back in the final output.
3. Create 6 responses using the switch statement, each assigned to a different
value from the random number generator.
4. Create a variable to hold the end response, which should be a sentence
printed for the user. You can assign different string values for each case,
assigning new values depending on the results from the random value.
5. Output the user's original question, plus the randomly selected case
response, to the console after the user enters their question.
*/

const randomNum = Math.floor(Math.random() * 6);
const userQuestion = prompt("Ask the magic 8-Ball a question:");
let response;

switch (+userQuestion) {
    case 0:
        response = "Wow";
        break;
    case 1:
        response = "That's great";
        break;
    case 2:
        response = "They both are amazing players";
        break;
    case 3:
        response = "Tough Competition";
        break;
    case 4:
        response = "Congratulations";
        break;
    case 5:
        response = "You won";
        break;
    default:
        alert("userfail");
}

console.log(`You asked: "${userQuestion}"`);
console.log(`Magic 8-Ball reply: "${response}"`);

/*exercise 4.5
1. Create a variable called prize and use a prompt to ask the user to set the
value by selecting a number between 0 and 10
2. Convert the prompt response to a number data type
3. Create a variable to use for the output message containing the value "My
Selection: "
4. Using the switch statement (and creativity), provide a response back
regarding a prize that is awarded depending on what number is selected
5. Use the switch break to add combined results for prizes
6. Output the message back to the user by concatenating your prize variable
strings and the output message string
*/

const prize = Number(prompt("Select a number between 0 and 10"));

let mySelection;

switch (prize) {
    case 0:
        mySelection = "You win Laptop";
        break;
    case 1:
        mySelection = "You win Mobile";
        break;
    case 3:
        mySelection = "You win Airpods";
        break;
    case 4:
        mySelection = "You win Smart watch";
        break;
    case 5:
        mySelection = "You win Car";
        break;
    case 6:
        mySelection = "You win Gold";
        break;
    case 7:
        mySelection = "You win Diamond";
        break;
    case 8:
        mySelection = "You win Bronze Medal";
        break;
    case 9:
        mySelection = "You win Cash";
        break;
        default:
            console.log("userfail");
}
console.log(` ${mySelection}`);