//  Функція для діалогу з користувачем
function userDialog() {
    let genre;
    let attempts = 0;
    const maxAttempts = 3; // максимальна кількість спроб

    while (attempts < maxAttempts) {
        genre = prompt("Який жанр музики ви найбільше полюбляєте?");
        
        if (genre) {
            alert("Чудовий вибір! У нас є альбоми на будь-який смак!");
            break; 
        } else {
            alert("Ви нічого не ввели. Спробуйте ще раз.");
        }
        
        attempts++; 
    }

    if (attempts === maxAttempts) {
        alert("Ви перевищили максимальну кількість спроб.");
    }
}
userDialog();

// Інфо про розробника
function developerInfo(surname, name, position = "Студент") {
    alert(`Розробник сторінки: ${surname} ${name}, посада: ${position}`);
}
developerInfo("Савенко", "Анастасія");

// Функція порівняння рядків
function compareStrings(str1, str2) {
    if (str1 > str2) {
        alert(`Більший рядок: ${str1}`);
    } else if (str2 > str1) {
        alert(`Більший рядок: ${str2}`);
    } else {
        alert("Рядки однакові.");
    }
}
compareStrings("музика", "альбом");

// Зміна фону сторінки на 30 секунд
function changeBackground() {
    document.body.style.backgroundColor = "#ab5583";
    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, 30000);
}


// Перехід на іншу сторінку через location
function redirectToSpotify() {
    location.href = "https://open.spotify.com/album/1vWMw6pu3err6qqZzI3RhH?si=357c9c013f354cd5";
}


// Зміна кольору тексту через getElementById
function changeTextColor() {
    document.getElementById("bottom").style.color = "lightblue";
}


// Зміна всіх заголовків h1 через querySelectorAll
function changeAllH1() {
    let allH1 = document.querySelectorAll("h1");
    allH1.forEach((h1, index) => {
        h1.textContent = `Новий заголовок №${index + 1}`;
        h1.style.color = "lightblue";
        h1.style.fontSize = "50px";
    });
}

// Видалення заголовку "жанри" зі сторінки (remove)
function removeGenresHeading() {
    const h2Genre = document.querySelector('h2');
    if (h2Genre) {
        h2Genre.remove();
    }
}

// Заміна першого елемента списку жанрів
document.querySelector('ol li').outerHTML = '<li>Рок</li>';

// Зміна тексту спеціального посилання
document.querySelector('.special-link').textContent = 'Натисни сюди!';

// Зміна тексту в блоці соцмереж
document.querySelector('#bottom span').firstChild.nodeValue = " Facebook, Instagram, TikTok";

// Створення нового параграфа
const newParagraph = document.createElement('p');
newParagraph.textContent = "Новий параграф.";
document.body.prepend(newParagraph);

// Створення текстового вузла
const textNode = document.createTextNode('Створено вузол.');
const div = document.createElement('div');
div.prepend(textNode);
document.body.prepend(div);

// Додаємо новий пункт в навігацію
const newNavItem = document.createElement('li');
newNavItem.innerHTML = '<a href="about.html">Про нас</a>';
document.querySelector('.nav-list').prepend(newNavItem);

// Додаємо новий жанр після другого пункту списку
const newGenre = document.createElement('li');
newGenre.textContent = 'Блюз';
document.querySelector('ol li:nth-child(2)').after(newGenre);

// Створення нового заголовку через document.write
document.write('<h2>Це новий заголовок</h2>');

