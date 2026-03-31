function requestNumber() {
  let userInput;
  for (let attempt = 0; attempt < 10; attempt++) { 
    userInput = prompt("Enter a number greater than 100:");
    if (userInput === null) { 
      console.log("User canceled input");
      return;
    }
    userInput = Number(userInput); 
    if (isNaN(userInput)) { 
      alert("Please enter a valid number!");
      attempt--; 
      continue;
    }
    if (userInput > 100) {
      break; 
    } else {
      alert("The number must be greater than 100. Try again.");
    }
  }
  console.log("Last entered number:", userInput);
}
requestNumber();