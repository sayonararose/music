function changeBackground() {
    document.body.style.backgroundColor = "#ab5583";
    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, 30000);
}

function redirectToMerch() {
    location.href = "merch.html";
}

function changeTextColor() {
    document.getElementById("bottom").style.color = "lightblue";
}

function changeAllH1() {
    let allH1 = document.querySelectorAll("h1"); 

    allH1.forEach((h1, index) => {
        h1.textContent = `Новий заголовок №${index + 1}`;
        h1.style.color = "lightblue"; 
        h1.style.fontSize = "50px"; 
    });
}

// Автоматичні зміни одразу при завантаженні сторінки
window.onload = function() {
    replaceFirstGenre();
    changeSpecialLink();
    changeSocials();
};

// Функції для автоматичних дій
function replaceFirstGenre() {
    const firstGenre = document.querySelector('ol li');
    if (firstGenre) {
        firstGenre.outerHTML = '<li>Рок</li>';
    }
}

function changeSpecialLink() {
    const specialLink = document.querySelector('.special-link');
    if (specialLink) {
        specialLink.textContent = 'Натисни сюди!';
    }
}

function changeSocials() {
    const bottomSpan = document.querySelector('#bottom span').firstChild;
    if (bottomSpan) {
        bottomSpan.nodeValue = " Facebook, Instagram, TikTok";
    }
}


function addStrongToWelcome() {
    const welcome = document.querySelector('.welcome-message');
    if (welcome) {
        const strong = document.createElement('strong');
        strong.textContent = ' Насолоджуйтесь!';
        welcome.prepend(strong);
    }
}

function addNewParagraph() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Новий параграф, створений через createElement.";
    document.body.prepend(newParagraph);
}

function addTextNode() {
    const textNode = document.createTextNode('Створено вузол.');
    const div = document.createElement('div');
    div.prepend(textNode);
    document.body.prepend(div);
}

function prependNavLink() {
    const navList = document.querySelector('.nav-list');
    if (navList) {
        const newNavItem = document.createElement('li');
        newNavItem.innerHTML = '<a href="about.html">Про нас</a>';
        navList.prepend(newNavItem);
    }
}

function addNewGenre() {
    const secondGenre = document.querySelector('ol li:nth-child(2)');
    if (secondGenre) {
        const newGenre = document.createElement('li');
        newGenre.textContent = 'Блюз';
        secondGenre.after(newGenre);
    }
}


function replaceAlbumImage() {
    const albumImage = document.querySelector('.gallery .popular-album img');
    if (albumImage) {
        albumImage.src = "img/rosie.jpg"; 
        albumImage.alt = "Rosie by Rosé ";
    }
}



function removeGenresHeading() {
    const h2Genre = document.querySelector('h2');
    if (h2Genre) {
        h2Genre.remove();
    }
}

function writeNewHeading() {
    document.write('<h2>Це новий заголовок</h2>');
}
