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
    for(var i = 0; i < word.length; i++){
        document.getElementById("underscore").innerHTML += "<div>_ </div>";
    }
}

function printWord(){
 var r = "";
for(var i = 0; i < word.length; i++){
    if(guessedletters.indexOf(word[i]) > -1){
        r += word[i];
    }else{
        r += "_";
    }
    document.getElementById("guessLetter").innerHTML = printWord();
}
}
function handleGuess(){

}