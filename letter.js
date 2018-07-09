var Letter = function (value){
    this.value = value;
    this.guess = false;
    
}
Letter.prototype = {
    diplay:function(){
        if(this.guess){
            return this.value
        }
        return "_"
         
    },
    guess : function(userGuess){
        if (this.value === userGuess){
            this.guess = true;

        }
        return this.guess

    },
}
module.exports = Letter