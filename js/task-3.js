const containerName = document.getElementById('name-output');
const emptyName = containerName.textContent;
const input = document.getElementById('name-input');

const onInputName = event => {
  const inputValue = event.currentTarget.value.trim();

  if (inputValue === '') {
    return containerName.textContent = emptyName
  }

  return containerName.textContent = inputValue
}

input.addEventListener('input', onInputName)