// Функция для обработки формы обратного звонка
document.addEventListener("DOMContentLoaded", function() {
    const callbackForm = document.querySelector('form[action="submit-form.html"]');
    
    if (callbackForm) {
        callbackForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Остановка отправки формы

            // Получить значения из полей формы
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;

            alert(`Спасибо, ${name}! Мы свяжемся с вами по номеру ${phone}.`);
            callbackForm.reset(); // Сбросить форму
        });
    }
});

// Функция для обработки формы записи на урок
document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.querySelector('form[action="submit-registration.html"]');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Остановка отправки формы

            // Получить значения из полей формы
            const childName = document.getElementById('child-name').value;
            const age = document.getElementById('age').value;
            const parentName = document.getElementById('parent-name').value;
            const phone = document.getElementById('phone').value;

            alert(`Регистрация успешна! ${childName} (${age} лет) будет записан(а) на урок. Мы свяжемся с вами, ${parentName}, по номеру ${phone}.`);
            registrationForm.reset(); // Сбросить форму
        });
    }
});

// Пример функции для переключения темного и светлого режима
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        body.style.backgroundColor = '#333';
        body.style.color = '#fff';
    } else {
        body.style.backgroundColor = '#fff';
        body.style.color = '#333';
    }
}

// Добавление возможность переключения режимов через кнопку
// Добавьте в HTML страницу кнопку:
// <button onclick="toggleDarkMode()">Переключить режим</button>