// Функція для діалогу з користувачем
function userDialog() {
    let genre = prompt("Який жанр музики ви найбільше полюбляєте?");
    if (genre) {
        alert("Чудовий вибір! У нас є альбоми на будь-який смак!");
    } else {
        alert("Ви нічого не ввели");
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

// Функція зміни фону сторінки
function changeBackground() {
    document.body.style.backgroundColor = "#ab5583";
    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, 30000);
}

// Функція переходу на сторінку мерчу
function redirectToMerch() {
    location.href = "merch.html";
}

// Функція зміни кольору тексту внизу сторінки
function changeTextColor() {
    document.getElementById("bottom").style.color = "lightblue";
}

// Функція зміни всіх заголовків h1
function changeAllH1() {
    let allH1 = document.querySelectorAll("h1"); 
    allH1.forEach((h1, index) => {
        h1.textContent = `Новий заголовок №${index + 1}`;
        h1.style.color = "lightblue"; 
        h1.style.fontSize = "50px"; 
    });
}

// Автоматичні зміни при завантаженні сторінки
window.onload = function() {
    replaceFirstGenre();
    changeSpecialLink();
    changeSocials();
};

// Заміна першого елемента списку жанрів (outerHTML)
function replaceFirstGenre() {
    const firstGenre = document.querySelector('ol li');
    if (firstGenre) {
        firstGenre.outerHTML = '<li>Рок</li>';
    }
}

// Зміна тексту спеціального посилання (textContent)
function changeSpecialLink() {
    const specialLink = document.querySelector('.special-link');
    if (specialLink) {
        specialLink.textContent = 'Натисни сюди!';
    }
}

// Зміна тексту в блоці соцмереж (nodeValue)
function changeSocials() {
    const bottomSpan = document.querySelector('#bottom span').firstChild;
    if (bottomSpan) {
        bottomSpan.nodeValue = " Facebook, Instagram, TikTok";
    }
}

// Додає напівжирний текст до привітання (createElement, textContent, prepend)
function addStrongToWelcome() {
    const welcome = document.querySelector('.welcome-message');
    if (welcome) {
        const strong = document.createElement('strong');
        strong.textContent = ' Насолоджуйтесь!';
        welcome.prepend(strong);
    }
}

// Створює новий параграф і додає його на початок сторінки (createElement, textContent, prepend)
function addNewParagraph() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Новий параграф, створений через createElement.";
    document.body.prepend(newParagraph);
}

// Створює текстовий вузол і додає в новий div (createTextNode, prepend)
function addTextNode() {
    const textNode = document.createTextNode('Створено вузол.');
    const div = document.createElement('div');
    div.prepend(textNode);
    document.body.prepend(div);
}

// Додає новий пункт "Про нас" в навігацію (createElement, innerHTML, prepend)
function prependNavLink() {
    const navList = document.querySelector('.nav-list');
    if (navList) {
        const newNavItem = document.createElement('li');
        newNavItem.innerHTML = '<a href="about.html">Про нас</a>';
        navList.prepend(newNavItem);
    }
}

// Додає новий жанр після другого пункту списку (createElement, textContent, after)
function addNewGenre() {
    const secondGenre = document.querySelector('ol li:nth-child(2)');
    if (secondGenre) {
        const newGenre = document.createElement('li');
        newGenre.textContent = 'Блюз';
        secondGenre.after(newGenre);
    }
}

// Заміна зображення альбому (зміна атрибутів src та alt)
function replaceAlbumImage() {
    const albumImage = document.querySelector('.gallery .popular-album img');
    if (albumImage) {
        albumImage.src = "img/rosie.jpg"; 
        albumImage.alt = "Rosie by Rosé";
    }
}

// Видаляє заголовок "жанри" зі сторінки (remove)
function removeGenresHeading() {
    const h2Genre = document.querySelector('h2');
    if (h2Genre) {
        h2Genre.remove();
    }
}

// Створює новий заголовок через document.write
function writeNewHeading() {
    document.write('<h2>Це новий заголовок</h2>');
}
