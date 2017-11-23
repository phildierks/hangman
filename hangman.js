function setUpVars() {
    document.getElementById("guessedLetter").innerHTML = "";
    word = "";
    guessedletters = [];
    soccerTeams = ["bayern", "dortmund", "chelsea","arsenal","psg","roma","juventus","tottenham","liverpool","schalke","barcelona","celtic","anderlecht","ajax"];
    animals = ["duck","goose","rat","mouse","dog","elephant","rooster","monkey","penguin","gecko","deer","snake","clownfish","cat","lion","tiger","panther"];
    schoolSupplies = ["pencil","paper","eraser","divider","binder","calculator","highlighter","backpack","book","ruler","compass","marker","pen","crayon","scissors","lunchbox","sharpener"];
    guess = document.getElementById("guess").value;
    document.getElementById("guessLetter").disabled = true;
    possibleLetters = ["0","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
}



function startGame(){
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: 7";
    document.getElementById("guessedLetter").innerHTML= "Guessed Letters: ";
    var box = document.getElementById("guess");
    for(var a=0;a<26;a++){
    if(guessedletters.indexOf(possibleLetters[i])==-1){
        var guessed = document.getElementById("guess").selectedIndex;
        box.remove(guessed);
    }
}

    guessedletters = [];

    guessesLeft = 7;
    document.getElementById("win").innerHTML="";
    document.getElementById("displayedWord").innerHTML = "";
    for(var i=1; i<=26; i++){
        var possibleguess = possibleLetters[i];
            document.getElementById("guess").innerHTML += "<option value=" + possibleguess + ">" + possibleguess + "</option>";
        }
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
    document.getElementById("guessLetter").disabled = false;
 }



function printWord() {

    guess = document.getElementById("guess").value;
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
    document.getElementById("guessedLetter").innerHTML+= guess + " ";
    removeOption(guess);
    document.getElementById("displayedWord").innerHTML= displayedGuess;

    if(word == displayedGuess){
        document.getElementById("win").innerHTML = "You win! The word was: " + word +  ". Press Start Game to play again!";
        document.getElementById("category").disabled = false;
        document.getElementById("startGame").disabled = false;
        document.getElementById("guessLetter").disabled = true;
    }
}

function removeOption(){
    var guessed = document.getElementById("guess").selectedIndex;
    var select = document.getElementById("guess");
    select.remove(guessed);
}



function guesses(){
    if ((word.indexOf(guess) == -1)) {
        guessesLeft--;
        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    }

    if(guessesLeft == 0){
        document.getElementById("win").innerHTML = "You Lose! The word was " + word + ". Press Start Game to play again!";
        document.getElementById("guessLetter").disabled = true;
        document.getElementById("category").disabled = false;
        document.getElementById("startGame").disabled = false;
    }
}

