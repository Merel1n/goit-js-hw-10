const formElem = document.querySelector('.form');
const inputValue = formElem.querySelector('.form input');
const bnt = formElem.querySelector('.form button');
console.log(`this is input ${inputValue.value}`);
formElem.addEventListener('submit', e => {
  e.preventDefault;
  e = inputValue.value;
});
