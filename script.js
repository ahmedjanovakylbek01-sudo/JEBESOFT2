const blue = document.querySelector('.rect-blue');
const yellow = document.querySelector('.rect-yellow');
const red = document.querySelector('.circle-red');

blue.onclick = () => {
  blue.style.backgroundColor = 'green';
};

yellow.onclick = () => {
  yellow.style.backgroundColor = 'purple';
};

red.onclick = () => {
  red.style.backgroundColor = 'black';
};