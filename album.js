function showLisaInfo() {
  alert("Альбом 'Alter Ego' від Lisa — потужний дебют.");
}
function showJennieInfo() {
  alert("Альбом 'Ruby' від Jennie — емоційна історія.");
}

document.getElementById("like-jisoo").onclick = function () {
  alert("Ти вподобав(ла) альбом Jisoo 💜");
};
document.getElementById("add-jisoo").onclick = function () {
  alert("Amortage додано до колекції 🎵");
};

// addEventListener
const addJennieBtn = document.getElementById("add-jennie");

function logAdd() {
  console.log("Користувач додав Ruby від Jennie до колекції");
}
function alertAdd() {
  alert("Ruby додано до колекції 🎵");
}
addJennieBtn.addEventListener("click", logAdd);
addJennieBtn.addEventListener("click", alertAdd);

document.getElementById("like-jennie").onclick = function () {
  alert("Ти вподобав(ла) альбом Jennie 💖");
};


document.getElementById("like-lisa").onclick = function () {
  alert("Ти вподобав(ла) альбом Lisa 🖤");
};
document.getElementById("add-lisa").onclick = function () {
  alert("Додано до колекції: Alter Ego 🎶");
};

// handleEvent
const addRoseBtn = document.getElementById("add-rose");

const roseHandler = {
  handleEvent(event) {
    alert("Rosie від Rosé додано до колекції 🌹");
    console.log("Обробник спрацював на:", event.currentTarget);
  }
};
addRoseBtn.addEventListener("click", roseHandler);

document.getElementById("like-rose").onclick = function () {
  alert("Ти вподобав(ла) альбом Rosé 🌸");
};


const removeBtnNightLovell = document.getElementById("remove-night-lovell");

// Функція-обробник для видалення альбому
function removeAlbum() {
  const album = document.getElementById("album-night-lovell");
  album.remove(); // Видаляємо альбом
  console.log("Альбом 'Night Lovell - I Hope You're Happy' видалено");
}

removeBtnNightLovell.addEventListener("click", removeAlbum);


const genreList = document.getElementById('genreList');

// Обробник події на весь список
genreList.onclick = function(event) {
  if (event.target.tagName === 'LI') {
    genreList.querySelectorAll('li').forEach(li => li.classList.remove('active'));
    event.target.classList.add('active');
  }
};



