// Assignment Code
// getting a handle on the button
var generateBtn = document.querySelector("#generate");



function writePassword() 
{
  // this imputs the functions answer to the text area
  var password = generatePassword();
  var passwordText = document.querySelector("#result");

  passwordText.value = password;

  function generatePassword() 
  {
    var Plength = prompt("How long do you want your password? It has to be between 8-128 characters.");

    
      // This is to make that the user request a password with at least 8 characters
      if (Plength <8 || Plength > 128){
        alert("Does not meet requirements");
        location.reload();
        
      } else {
        // This assignes variables to the questions
        var addNumber = prompt("Do you want to add numbers to your password? Yes or No?")
        var addSpecial = prompt("Do you want to add a special symbol to your password? Yes or No?")
        var addUpcase = prompt("Do you want uppercase letters? Yes or No?")
        var addLower = prompt("Do you want lowercase letters? Yes or No?")

        // List of strings that conatin the possible characters
        var numberList = "0123456789";
        var special = "%^!@#$%&*()<>";
        var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lCase = "abcdefghijklmnopqrstuvwxyz";
        // Where all of the selected character are getting added to
        var finalP = "";

      }      
      // Checks if they added a Number
      if (addNumber = "Yes"){
        finalP += numberList;      
      };
      // Checks if they added a Symbol
      if (addSpecial = "Yes"){
        finalP += special;
      };
      // Checks if they added a upper case
      if (addUpcase = "Yes"){
        finalP += upCase; 
      };
      //  Checks for lower case
      if (addLower = "Yes"){
        finalP += lCase;
      };
      // this is just incase they select none of the criteria 
      if (finalP === ""){
        alert("You need to select something!");
        location.reload();
      };
      // this function is to generate the password
      var randomP = "";
      for (var i = 0; i < Plength; i++) {
        randomP += finalP.charAt(Math.floor(Math.random) * finalP.length);
      };
    return randomP;
  }

}


// Starts the prompts 
generateBtn.addEventListener("click", writePassword)

// prompt users to choose how long they want their password
// validate response
// if not, keep promptiing
// ask user for each option
// randomly add the requested characters together
