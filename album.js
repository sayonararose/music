//  Функція для діалогу з користувачем
function userDialog() {
    let genre = prompt("Який жанр музики ви найбільше полюбляєте?");
    
    if (genre) {
        let isConfirmed = confirm("Ви ввели жанр: " + genre + ". Підтверджуєте?");
        
        if (isConfirmed) {
            alert("Чудовий вибір! У нас є альбоми на будь-який смак!");
        } else {
            alert("Ви нічого не ввели");
        }
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


// Заміна першого елемента списку жанрів 
function replaceFirstGenre() {
    const firstGenre = document.querySelector('ol li');
    if (firstGenre) {
        firstGenre.outerHTML = '<li>Рок</li>';
    }
}


// Зміна тексту спеціального посилання 
function changeSpecialLink() {
    const specialLink = document.querySelector('.special-link');
    if (specialLink) {
        specialLink.textContent = 'Натисни сюди!';
    }
}


// Зміна тексту в блоці соцмереж 
function changeSocials() {
    const bottomSpan = document.querySelector('#bottom span').firstChild;
    if (bottomSpan) {
        bottomSpan.nodeValue = " Facebook, Instagram, TikTok";
    }
}


// Створення нового параграфа 
function addNewParagraph() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Новий параграф.";
    document.body.prepend(newParagraph);
}


// Створення текстовий вузла
function addTextNode() {
    const textNode = document.createTextNode('Створено вузол.');
    const div = document.createElement('div');
    div.prepend(textNode);
    document.body.prepend(div);
}


// Додаємо новий пункт в навігацію 
function prependNavLink() {
    const navList = document.querySelector('.nav-list');
    if (navList) {
        const newNavItem = document.createElement('li');
        newNavItem.innerHTML = '<a href="about.html">Про нас</a>';
        navList.prepend(newNavItem);
    }
}


// Додаємо новий жанр після другого пункту списку 
function addNewGenre() {
    const secondGenre = document.querySelector('ol li:nth-child(2)');
    if (secondGenre) {
        const newGenre = document.createElement('li');
        newGenre.textContent = 'Блюз';
        secondGenre.after(newGenre);
    }
}


// Видалення заголовку "жанри" зі сторінки (remove)
function removeGenresHeading() {
    const h2Genre = document.querySelector('h2');
    if (h2Genre) {
        h2Genre.remove();
    }
}


// Створення нового заголовку через document.write
function writeNewHeading() {
        document.write('<h2>Це новий заголовок</h2>');
    }