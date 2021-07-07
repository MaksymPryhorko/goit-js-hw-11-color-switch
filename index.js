const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId = null;

const bodyRef = document.querySelector('body');
const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');

const onStopBtnClick = () => {
    startBtnRef.removeAttribute('disabled');
    clearInterval(timerId);
};

const onStartBtnClick = () => {
    startBtnRef.setAttribute('disabled', 'disabled');
    timerId = setInterval(changeBgColorBody, 1000);
};

const changeBgColorBody = () => {
    let randomColoBg = randomIntegerFromInterval(0, colors.length - 1);
    bodyRef.style.backgroundColor = colors[randomColoBg];
};


startBtnRef.addEventListener('click', onStartBtnClick);
stopBtnRef.addEventListener('click', onStopBtnClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};