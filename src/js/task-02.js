// // В HTML есть пустой список ul#ingredients.

// // <ul id="ingredients"></ul>
// // В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// // Напиши скрипт, который для каждого элемента массива ingredients 
// создаст отдельный li, после чего
// вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().



const ulNode = document.querySelector('#ingredients');

const listNode = ingredients.map(item => {
  const liNode = document.createElement('li');
  liNode.textContent = item;
  
  
  return liNode;
});

ulNode.append(...listNode);


console.log(ulNode);


