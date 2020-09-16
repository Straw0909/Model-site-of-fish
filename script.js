// Get list of elements
let listFish = document.getElementsByClassName('fish-list-card flex-column light');
// get each card of fish
for (let i = 0; i < listFish.length; i += 1) {
  // create buttom
  let buttomBuy = document.createElement('button');
  buttomBuy.id = "buttom";
  buttomBuy.innerText = "Купить";
  buttomBuy.style.marginBottom = '1em';
  // add buttom to each card of fish
  listFish[i].appendChild(buttomBuy);
  // add event
  listFish[i].addEventListener("click", alertBuyClick);
  // create event from function
  function alertBuyClick() {
    alert('Вы хотите купить ' + listFish[i].innerText + ' ?');
  }
}

