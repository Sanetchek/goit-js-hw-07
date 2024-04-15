function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// first variant
// function createBoxes(amount) {
//   let number = 30;
//   let template = '';

//   // Create string of blocks
//   for (let i = 0; i < amount; i++) {
//     const color = getRandomHexColor();
//     const tag = `<div style="width: ${number}px; height:${number}px; background-color: ${color};"></div>`;

//     template += tag;
//     number += 10;
//   }

//   return template
// }

// second variant
function createBoxes(amount) {
  let number = 30;
  const items = [];

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const item = document.createElement("div");
    item.style.width = `${number}px`
    item.style.height = `${number}px`
    item.style.backgroundColor = color;
    items.push(item);
  }
  boxes.append(...items);
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
    createBoxes(boxNumber);
    // const newBoxes = createBoxes(boxNumber);
    // boxes.insertAdjacentHTML('beforeend', newBoxes);
    inputNumber.value = '';
  }

}

btnCreate.addEventListener('click', onCreateBox);
btnDestroy.addEventListener('click', destroyBoxes);