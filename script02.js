// Release 0.2
// 1
// Измени название «Akindynos Clownfish» на «Clownfish».
let fishName = document.getElementsByClassName('fish-list-card-name');
let fish5 = fishName[4];
fish5.innerText = "Clownfish";
// 2
// Добавь другую рыбу в список, используя только JavaScript (без редактирования файла HTML). 
let fish9 = document.createElement('li');
fish9.id = "fish-9";
fish9.className = "fish-list-card flex-column light";
let fish9Img = document.createElement("img");
fish9Img.src = "./images/green-wrasse.jpg";
fish9Img.className = "fish-list-card-image";
fish9Img.alt = "fish pic";
fish9.appendChild(fish9Img);
let fish9Text = document.createElement("span");
fish9Text.className = "fish-list-card-name";
fish9Text.innerText = "Green Wrasse";
fish9.appendChild(fish9Text);
let body = document.getElementById('body');
body.appendChild(fish9);


