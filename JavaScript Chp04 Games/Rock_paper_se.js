console.log('Chapter 04 Games');
// Rock Paper Scissors Game:


// Create an array that contains the variables Rock, Paper, and Scissors
let choices = ["Rock", "Paper", "Scissors"];

// Generate a random number 0-2 for player and computer selections
let playerIndex = Math.floor(Math.random() * 3);
let computerIndex = Math.floor(Math.random() * 3);

// Create a variable to hold a response message to the user
let resultMessage = "";

// Handle player and computer selections
if (playerIndex === computerIndex) {
    resultMessage = "It's a tie!";
} else {
    // Apply game logic
    if (
        (playerIndex === 0 && computerIndex === 2) ||
        (playerIndex === 1 && computerIndex === 0) ||
        (playerIndex === 2 && computerIndex === 1)
    ) {
        resultMessage = "You win!";
    } else {
        resultMessage = "Computer wins!";
    }
}

// Output the result message
console.log(`Player chose ${choices[playerIndex]}, Computer chose ${choices[computerIndex]}. <strong>${resultMessage}</b>`);
function playGame(id) {
    // Create an array that contains the variables Rock, Paper, and Scissors
    let choices = ["Rock", "Paper", "Scissors"];

    // Generate a random number 0-2 for player and computer selections
    let playerIndex = id?id:Math.floor(Math.random() * 3);
    console.log(Math.random(),"Math.random()")
    let computerIndex = Math.floor(Math.random() * 3);

    // Create a variable to hold a response message to the user
    let resultMessage = "";

    // Handle player and computer selections
    if (playerIndex === computerIndex) {
        resultMessage = "It's a tie!";
    } else {
        if (
            (playerIndex === 0 && computerIndex === 2) ||
            (playerIndex === 1 && computerIndex === 0) ||
            (playerIndex === 2 && computerIndex === 1)
        ) {
            resultMessage = "You win!";
        } else {
            resultMessage = "Computer wins!";
        }
    }

    // Output the result message to the result-container
    let resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `Player chose ${choices[playerIndex]}, Computer chose ${choices[computerIndex]}.
     <strong>${resultMessage}</strong>`;
}
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  const playfrnd = () => { 

    let userName = prompt("Enter a name:");

// Use the switch statement to return a confirmation
switch (userName) {
    case "Alice":
    case "Bob":
    case "Charlie":
        console.log(`${userName} is a friend!`);
        alert(`${userName} is a friend!`)
        break;
    default:
        console.log("Sorry, I don't know this person.");
        alert(`Sorry, I don't know this person.`)

}
   }


  function  playevNum(){
    let userNumber = prompt("Enter a number:");

    // Dynamic number value in your code
    let dynamicNumber = 10;
    
    // Check whether the user's number is greater than, equal to, or less than the dynamic number
    if (userNumber > dynamicNumber) {
        console.log("Your number is greater than the dynamic number.");
        alert(`Your number is greater than the dynamic number.`)

    } else if (userNumber === dynamicNumber) {
        console.log("Your number is equal to the dynamic number.");
        alert(`Your number is equal to the dynamic number.`)

    } else {
        console.log("Your number is less than the dynamic number.");
        alert(`Your number is less than the dynamic number.`)

    }

   }