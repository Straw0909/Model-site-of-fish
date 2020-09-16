// Release 0.1
// 1.
// Каков адрес, указанный на веб-странице?
let adress = document.getElementById('address');
console.log(adress.innerText);
// 2.
// Как называется последняя рыба в списке?
let lastFish = document.getElementsByClassName('fish-list-card-name');
console.log(lastFish[lastFish.length - 1].innerText);
// 3.
// Каково значение атрибута src для картинки черного бандита-ангела?
let firstFish = document.querySelector('img').src;
console.log(firstFish);
