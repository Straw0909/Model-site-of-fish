// Releae 0.3
// 1
function alertWordmarkclick() {
  alert('You clicked the wordmark');
}
let wordmark = document.getElementById('wordmark');
wordmark.addEventListener("click", alertWordmarkclick);
// 2
// Попробуй написать еще один обработчик самостоятельно.
function alertAdressClick() {
  alert('You click the address');
}
let adress = document.getElementById('address');
adress.addEventListener("click", alertAdressClick);
