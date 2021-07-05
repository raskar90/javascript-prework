function getMoveName( randomNumber) {
  if( randomNumber == 1){
    return 'kamień';
  } else if( randomNumber == 2){
      return 'papier';
  } else if( randomNumber == 3){
      return 'nożyce';
  }
}     

 function displayResult( argComputerMove, argPlayerMove) {
   printMessage( 'Zagrałem' + argComputerMove + ', a Ty ' + argPlayerMove);
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('Niestety przegrywasz!');
  } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage( 'Ty wygrywasz!');
  } else if( argComputerMove =='kamień' && argPlayerMove == 'nożyce') {
    printMessage( 'Niestety przegrywasz!');
  } else if( argComputerMove == 'papier' && argPlayerMove =='nożyce') {
    printMessage( 'Ty wygrywasz!');
  } else if( argComputerMove == 'nożyce' && argPlayerMove =='papier') {
    printMessage( 'Niestety przegrywasz');
  } else if( argComputerMove == argPlayerMove) {
    printMessage('Remis!');
  } else if( argPlayerMove='nieznany ruch') {
    printMessage( 'Wprowadź poprawną liczbę, tj. liczbę 1, 2 lub 3')
  }
 }

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove =  getMoveName(randomNumber);



/*if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
  computerMove = 'papier';
} else {
  computerMove = 'nożyce';
}*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
  playerMove= 'papier';
} else {
  playerMove='nożyce';
}*/

printMessage('Twój ruch to: ' + playerMove);