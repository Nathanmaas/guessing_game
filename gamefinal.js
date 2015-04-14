<script>
  (function() {
    var guess = prompt ('How many Gumballz in the Gumball machine?');
    var withinOneHundred = ('Getting closer, You\'re within 100! Keep guessing!');
    var guessAgain = ('Muerto, you get an Eybeball, guess again');
    var tooMany = ('That is too many tries, you dont get a gumball!');
    var correct = ('Correcto, you get a Gumball!');

      var Guesses = function(guess){
        this.numTries = 1;
        this.answer = 505;

      }

      var nextguess = new Guesses();
      guess.this.numTries = Number.parseInt(elguess.textContent);


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
<</script>

