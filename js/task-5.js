function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('button.change-color');

const onColorChange = event => {
  event.preventDefault();

  const newColor = getRandomHexColor();
  const body = document.querySelector('body');
  const colorName = document.querySelector('span.color');

  body.style.backgroundColor = newColor;
  colorName.textContent = newColor;
}

changeColorBtn.addEventListener('click', onColorChange)