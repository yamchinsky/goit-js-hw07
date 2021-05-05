// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputSymbols = document.querySelector('#validation-input');


inputSymbols.addEventListener('blur', checkSymbols);


function toChangeClass(addClass, removeClass) {

  inputSymbols.classList.add(addClass);
  inputSymbols.classList.remove(removeClass);
};

function checkSymbols() {
  if (Number(inputSymbols.dataset.length) === (inputSymbols.value.length))  {
    toChangeClass('valid', 'invalid');
  }
  else {
    toChangeClass('invalid', 'valid');
  }
};





// function checkSymbols() {
//   if (inputSymbols.value.length > inputLength) {
//     inputSymbols.classList.remove('valid');
//     inputSymbols.classList.add('invalid');
//   } else {
//     inputSymbols.classList.remove('invalid');
//     inputSymbols.classList.add('valid');
//   }
// }
