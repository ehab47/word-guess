Letter = require("./letter");

var Word = function (word) {
    this.word = word;
    this.letters = word.split("").map(function (letter){
        return new Letter(letter)
    });

}
Word.prototype = {
    ifFinished: function(){

    },
    diplay : function(){
        var string = ""
        for (i = 0 ; i< this.letters.length;i++){
            string+=this.letters[i].diplay() + " "
        }
        console.log(string)
    }
}
module.exports = Word