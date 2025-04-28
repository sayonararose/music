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

