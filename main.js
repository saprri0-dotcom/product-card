const cards = document.querySelectorAll('.card');
const changeColorButton = document.querySelector('#change-color-all-cards-button');
const blueColorHash = '#0000FF';
const initialColor = Array.from(cards, (card) => {
  return getComputedStyle(card).backgroundColor;
});
let colorChangeTimer;

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

const firstCard = document.querySelector('.card');
const changeColorCardButton = document.querySelector('#change-color-card-button');
let isFirstCardBlue = false;
const FirstCardInitialColor = getComputedStyle(firstCard).backgroundColor;
changeColorCardButton.addEventListener('click', () => {
  firstCard.style.backgroundColor = isFirstCardBlue 
? FirstCardInitialColor 
: blueColorHash;
  isFirstCardBlue = !isFirstCardBlue;
});

changeColorButton.addEventListener('click', () => {
  clearTimeout(colorChangeTimer);

  colorChangeTimer = setTimeout(() => {
    cards.forEach((card) => {
      card.style.backgroundColor = getRandomColor();
    });
  }, 250);
});

changeColorButton.addEventListener('dblclick', () => {
  clearTimeout(colorChangeTimer);

  cards.forEach((card, index) => {
    card.style.backgroundColor = initialColor[index];
  });
});

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть страницу Google.com?');

  if (answer === true) {
    window.open('https://www.google.com');
  } else {
    return;
  }
}

const outputConsoleLogButton = document.querySelector('#output-console-log');

outputConsoleLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}




