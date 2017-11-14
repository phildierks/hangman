function setUpVars() {
    guesses = 10;
    word = "";
    guessedletters = [];
    words = ["bayern", "dortmund", "chelsea","arsenal","mbappe"];
    guess = document.getElementById("guess").value;
    document.getElementById("underscore").innerHTML = "_";
}


function startGame(){
    var num = "";
    word = words[Math.floor(Math.random() * words.length)];
    for(var i = 0; i < word.length; i++){
        num+= "_"
    }
    printWord();
}

function printWord(){
var r = "";
for(var i = 0; i < word.length; i++){
    if(guessedletters.indexOf(word[i]) > -1){
        r += word[i];
    }else{
        r += "_";
    }
    document.getElementById("underscore").innerHTML = printWord();
}
}
function handleGuess(){

}