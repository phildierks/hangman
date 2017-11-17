function setUpVars() {
    guesses = 10;
    word = "";
    guessedletters = [];
    words = ["bayern", "dortmund", "chelsea","arsenal"];
    guess = document.getElementById("guess").value;

}

function startGame(){

    document.getElementById("underscore").innerHTML = "";

    word = words[Math.floor(Math.random() * words.length)];
    var displayedLetters = "";
    for(var i = 0; i < word.length; i++){
         displayedLetters += "_ ";
    }
    document.getElementById("underscore").innerHTML = displayedLetters;
    console.log(word);
 }

function printWord(){
    guess = document.getElementById("guess").value;
guessedletters.push(guess);
 var displayedGuess = "";
for(var i = 0; i < word.length; i++){
    if(guessedletters.indexOf(word[i]) > -1){
        displayedGuess += word[i];

    }else{
        displayedGuess += "_ ";
    }

}
document.getElementById("underscore").innerHTML = displayedGuess;
    if(){
        document.getElementById("tryAgain").innerHTML= "wrong!"
    }

}

function handleGuess(){

}