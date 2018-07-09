var words = require("./wordlist")
var Word = require("./Word")

var word = new Word(pickWord())
console.log(word.diplay())



function pickWord(){
    return words [Math.floor(Math.random()* words.length)]
}