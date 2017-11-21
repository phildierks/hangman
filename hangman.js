function setUpVars() {
    word = "";
    guessedletters = [];
    soccerTeams = ["bayern", "dortmund", "chelsea","arsenal"];
    animals = ["duck","goose","rat","mouse","dog","elephant","rooster","monkey","penguin"];
    schoolSupplies = ["pencil","paper","eraser","divider","binder","calculator","highlighter"];
    guess = document.getElementById("guess").value;
    document.getElementById("guessLetter").disabled = true;
    possibleLetters = ["a","b","c","d","e","f","g","h","i","j","k","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
}



function clearFields(){
    document.getElementById("guess").value = "";
    document.getElementById("wrongLetter").value = "";
}

function enableGuess(){
    document.getElementById("guessLetter").disabled = false;
}

function clearGuesses(){
    document.getElementById("guessesLeft").innerHTML = "";
}

function startGame(){
    guessesLeft = 6;
    document.getElementById("wrongLetter").innerHTML="";
    document.getElementById("win?").innerHTML="";
    document.getElementById("displayedWord").innerHTML = "";
    var category = document.getElementById("category").value;
    var cat = parseInt(category);
if(cat == 1) {
    word = soccerTeams[Math.floor(Math.random() * soccerTeams.length)];
}
if(cat == 2){
    word = animals[Math.floor(Math.random() * animals.length)];
}
if(cat == 3){
    word = schoolSupplies[Math.floor(Math.random() * schoolSupplies.length)];
}
    document.getElementById("category").disabled = true;
    var displayedLetters = "";
    for(var i = 0; i < word.length; i++){
         displayedLetters += "_ ";
    }
    document.getElementById("startGame").disabled = true;
    document.getElementById("displayedWord").innerHTML = displayedLetters;
    console.log(word);
 }



function printWord() {
    guess = document.getElementById("guess").value;
    guess = guess.toLowerCase();
    guessedletters.push(guess);
    var inLetterList = false;
    for(var i = 0; i < possibleLetters.length; i++){
        if(guess == possibleLetters[i]){
            inLetterList = true;
        }
    }
    if(!inLetterList) {
        document.getElementById("wrongLetter").innerHTML = "You can only enter letters.";
    }

        var displayedGuess = "";
        for (var i = 0; i < word.length; i++) {
            if (guessedletters.indexOf(word[i]) > -1) {
                displayedGuess += word[i];

            } else {
                displayedGuess += "_ ";
            }
        }
        document.getElementById("displayedWord").innerHTML = displayedGuess ;
    guesses();
    document.getElementById("guessedLetters").innerHTML  += guess + " ";
    if(word == displayedGuess){
        document.getElementById("win?").innerHTML = "You win! The word was:" + word +  ". Press Start Game to play again!";
        document.getElementById("category").disabled = false;
        document.getElementById("startGame").disabled = false;
    }
}





function guesses() {
    if ((word.indexOf(guess) == -1)) {
        guessesLeft--;
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    }
    var inLetterList = false;
    for (var i = 0; i < guessedletters.length; i++) {
        if (guess == guessedletters[i]) {
            inLetterList = true;
        }
    }
    if (!inLetterList) {
        document.getElementById("wrongLetter").innerHTML = "You already guessed that.";
    }


    if (guessesLeft == 0) {
        document.getElementById("win?").innerHTML = "You Lose! The word was " + word + ". Press Start Game to play again!";
        document.getElementById("guessLetter").disabled = true;
        document.getElementById("category").disabled = false;
        document.getElementById("startGame").disabled = false;
    }
}

