const categories = document.querySelector('ul#categories');
const items = categories.querySelectorAll('li.item');

console.log("Number of categories:", items.length);

items.forEach((item) => {
  const header = item.querySelector('h2');
  const list = item.querySelectorAll('li');

  console.log("Category:", header.textContent);
  console.log("Elements:", list.length);
})