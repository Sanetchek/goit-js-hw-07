function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let number = 30;
  let template = '';

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const tag = `<div style="width: ${number}px; height:${number}px; background-color: ${color};"></div>`;

    template += tag;
    number += 10;
  }

  return template
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

const inputNumber = controls.querySelector('input[type="number"]');
const btnCreate = controls.querySelector('button[data-create]');
const btnDestroy = controls.querySelector('button[data-destroy]');

const onCreateBox = event => {
  const boxNumber = inputNumber.value;

  if (boxNumber > 0 && boxNumber <= 100) {
    boxes.innerHTML = '';
    const newBoxes = createBoxes(boxNumber);
    boxes.insertAdjacentHTML('beforeend', newBoxes);
    inputNumber.value = '';
  }

}

btnCreate.addEventListener('click', onCreateBox);
btnDestroy.addEventListener('click', destroyBoxes);