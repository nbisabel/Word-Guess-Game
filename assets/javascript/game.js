$(document).ready(function () {
    var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var words = ['seal', 'dolphin', 'orca', 'clownfish', 'seaturtle'];
    var alphabet = getAlphabetArray();


    var wins = 0,
        losses = 0,
        correct =0,
        lives = 0,
        lettersGuessed= [],
        letterBlanks = [],
        randomWord = "";
    
    word = words[Math.floor(Math.random() * words.length)];

    function gameOver() {
        if (letterBlanks.indexOf("_") === -1) {
            wins++;
            document.write("You won!");
        } else {
            losses++;
            document.write("So sad you lost")       
         }
   
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loss").innerHTML = losses;

    restartTheGame();
    } 
    function checkGameOver () {
        return livesLeft === 0 || correct == i;
    }
   function isValidLetter(letter) {
       return alphabet.indexOF(letter) > -1;
   }
   function updateWrongGuess() {
       livesLeft--;
       document.getElementById("guessedSoFar").innerHTML =lettersGuessed.join(" ");
       document.getElementById("guessesLeft").innerHTML = livesLeft;
    }

    function initializeGame () {
        livesLeft = 10;
        lettersGuessed=[];
        lettersBlanks=[];
        randomWord = words[Math.floor ((Math.random()=words.length))];

        for (var i=0; i <randomWord.length; i++) {
            letterBlanks.push("_");
        }
    }
    function getAlphabetArray () {
        var alphabetArray=[];

        for(var i ="a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
            alphabetArray.push(String.fromCharCode(i));
        }

        return alphabetArray;
    }

    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        
    }
    var wordElement = document.getElementById('#theWord');
    var letterCountElement = document.getElementById('#guessesLeft');
    var lettersGuessedElement = document.getElementById('#guessesSoFar');
   
    function initializeGame() {
      word = 
      allowedGuesses = 10;
      wrongGuesses = [];
      correctGuesses = [];
      document.getElementById('#guessesSoFar').innerHTML = "";
   
   
      // initialize correctGuesses array with underscores
      for (var i = 0; i < word.length; i++) {
        correctGuesses.push('_');
      }
   
      wordElement.innerHTML = correctGuesses.join(' ');
      letterCountElement.innerHTML = allowedGuesses;
    }
   
    function updateGuesses(letter) {
      allowedGuesses--; // decrement guesses left
      letterCountElement.innerHTML = allowedGuesses;
   
      if (word.indexOf(letter) === -1) { // letter is NOT in the word
        wrongGuesses.push(letter); // update letters guessed
        lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
      } else {
        //also update letters guessed
        wrongGuesses.push(letter); // update letters guessed
        lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
        // replace underscore with the letter
        for (var i = 0; i < word.length; i++) {
          if (word[i] === letter) {
            correctGuesses[i] = letter;
          }
        }
   
        wordElement.innerHTML = correctGuesses.join(' ');
      }
    }
   
    function checkWin() {
      if (correctGuesses.indexOf('_') === -1) {
        wins++;
        document.getElementById('.wins').innerHTML = wins;
        alert('You Won!');
        resetGame();
      } else if (allowedGuesses === 0) {
        alert('Better luck next time!');
        resetGame();
      }
    }
   
    function resetGame() {
      initializeGame();
    }
   
    document.onkeyup = function (event) {
      var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
      updateGuesses(letterGuessed);
      checkWin();
    };
   
    initializeGame();
   
   });//close ready function



