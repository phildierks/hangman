guesses = 10;
word = "";
guessedletters = [];
words = ["bayern", "dortmund", "chelsea","arsenal"];
guess = document.getElementById("guess").value;


function startGame(){
    word = words[Math.floor(Math.random() * words.length)];
    printWord();
}
function printWord(){
var r = "";
for (var i = 0; i < ){
    if(guessedletters(word[i]) > -1){
        r += word[i];
    }else{
        r += "_";
    }
}
}
function handleGuess(){

}