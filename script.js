'use script';
let number = Math.trunc(Math.random()*100+1);
let score = 100;
let highscore = 0;
const displayMessage = function (message)
{
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click' , function()
{
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess)
// when player dont enter anything 
if(!guess){
    document.querySelector('.message').textContent ='🎆🎆no  number';
}
// when player wins
else if(guess==number)
{
    document.querySelector('.message').textContent = '🎆🎆correct number';
    document.querySelector('.number').textContent = number
    document.querySelector('body').style.backgroundColor = '#60b357';
    document.querySelector('.number').style.width = '30rem';

    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore
    }
}
// when player enter the greater number
else if(guess>number)
{
    if(score>0){
    document.querySelector('.message').textContent = '🎗🎗to0 high number'
    score = score-1;
    document.querySelector('.score').textContent = score;
    }
    else {
            document.querySelector('.message').textContent = ' 👽👻👻you lost the game ';
              document.querySelector('.score').textContent = 0;

    }
}
// when player enter the lowest number
else if (guess<number)
{
       if(score>1){
    document.querySelector('.message').textContent = '🎗🎗too low number'
    score = score-1;
    document.querySelector('.score').textContent = score;
    }
    else {
            document.querySelector('.message').textContent = ' 👽👻you lost the game '
                document.querySelector('.score').textContent = 0;
    }
}
}
)
document.querySelector('.again').addEventListener('click', function () {
  score = 100;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});