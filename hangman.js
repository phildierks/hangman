function setUpVars() {
    word = "";
    guessedletters = [];
    soccerTeams = ["bayern", "dortmund", "chelsea","arsenal"];
    animals = ["duck","goose","rat","mouse","dog","elephant","rooster","monkey","penguin"];
    schoolSupplies = ["pencil","paper","eraser","divider","binder","calculator","highlighter"];
    guess = document.getElementById("guess").value;
    document.getElementById("guessLetter").disabled = true;

}



function clearFields(){
    document.getElementById("guess").value = "";

}

function enableGuess(){
    document.getElementById("guessLetter").disabled = false;
}


function startGame(){
    document.getElementById("hangmanPic").innerHTML ="<img src=img/hangman7.png/>";
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
    if(word == displayedGuess){
        document.getElementById("win?").innerHTML = "You win! The word was:" + word +  ". Press Start Game to play again!";
        document.getElementById("category").disabled = false;
        document.getElementById("startGame").disabled = false;
    }
}





function guesses(){
    if((word.indexOf(guess) == -1)){
        guessesLeft--;
        document.getElementById("wrongLetter").innerHTML = "Guesses Left: " + guessesLeft;
    }

    if(guessesLeft==0){
        document.getElementById("win?").innerHTML= "You Lose! The word was " + word + ". Press Start Game to play again!";
        document.getElementById("guessLetter").disabled = true;
        document.getElementById("category").disabled = false;
        document.getElementById("startGame").disabled = false;
    }

}
function images(){
if(guessesLeft == 6){
    return    "<img src=img/hangman7.png>";
}
if(guessesLeft == 5){
    return    "<img src=img/hangman6.png>";
}
if(guessesLeft == 4){
    return    "<img src=img/hangman5.png>";
}
if(guessesLeft == 3){
    return    "<img src=img/hangman4.png>";
}
if(guessesLeft == 2){
    return    "<img src=img/hangman3.png>";
}
if(guessesLeft == 1){
    return    "<img src=img/hangman2.png>";
}
if(guessesLeft == 0){
    return    "<img src=img/hangman1.png>";
}
}