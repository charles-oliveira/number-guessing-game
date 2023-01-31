const msg1 = document.getElementById('msg1') //msg1
const msg2 = document.getElementById('msg2') //msg2
const msg3 = document.getElementById('msg3') //msg3

const guessBtn = document.getElementById('guess-btn')

const answer = Math.floor(Math.random()*100) + 1
let noOfguesses = 0 
let guessedNumbers = [] 

// projeto muito simples, refazer do zero e aprender a lição das declarações de variáveis
// foi muito interessante!!!!

function play() {
    const userGuess = document.getElementById('guess').value
        if (userGuess < 1 || userGuess > 100) {
            alert('Please enter a number between 1 and 100')
        }
        else {
            guessedNumbers.push(userGuess)
            noOfguesses += 1

            if(userGuess < answer){
                msg1.textContent = "Your guess is too low."
                msg2.textContent = 'No of guesses: ' + noOfguesses
                msg3.textContent = 'Guessed numbers are:  ' + guessedNumbers
            } else if (userGuess > answer) {
                msg1.textContent = 'Your guess is too high.'
                msg2.textContent = 'No of guesses: ' + noOfguesses
                msg3.textContent = 'Guessed numbers are: ' + guessedNumbers
            } else if (userGuess == answer) {
                msg1.textContent = 'Yippue You Win!!'
                msg2.textContent = 'The Number was: ' + answer
                msg3.textContent = 'You guessed it in' + guessedNumbers
            }
        }
}

guessBtn.addEventListener('click', play)

