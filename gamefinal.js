  (function() {
    var withinOneHundred = ('Getting closer, You\'re within 100! Keep guessing!');
    var guessAgain = ('Muerto, you get an Eybeball, guess again');
    var guess = prompt ('How many Gumballz in the Gumball machine?');
    var tooMany = ('That is too many tries, you dont get a gumball!');
    var correct = ('Correcto, you get a Gumball!');
    guess = Number.parseInt(guess);

      var Guesses = function(guess){
        this.answer = 505;
        this.numTries = 1;
      }
      var nextguess = new Guesses();
      console.log (nextguess);

      while (true) {
        if (guess === nextguess.answer) {
          alert(correct);
          console.log (alert('A la verga - It took you ' + nextguess.numTries + ' tries'));
          break;
        }
          if (Math.abs(guess-nextguess.answer) <= 100){
            guess = Number.parseInt(prompt(withinOneHundred));
            nextguess.numTries += 1;

        } else if (guess < nextguess.answer) {
            guess = Number.parseInt(prompt(guessAgain));
            nextguess.numTries += 1;
        } else if (guess  > nextguess.answer) {
            guess = Number.parseInt(prompt(guessAgain));
            nextguess.numTries +=1;
        }

        if (nextguess.numTries > 5) {
          alert(tooMany);
          break;
        }
      }
  })();

