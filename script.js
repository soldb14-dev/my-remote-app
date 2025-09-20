// Замените этот URL на адрес вашего сервера или API
const API_BASE_URL = 'https://ваш-сервер.com/api';

// Функция для отправки команды
async function sendCommand(command) {
    const statusElement = document.getElementById('status');
    statusElement.textContent = `Отправляю: ${command}...`;

    try {
        // Отправляем GET-запрос на сервер
        // Для POST-запросов используйте fetch с методом 'POST'
        const response = await fetch(`${API_BASE_URL}?command=${command}`);

        if (response.ok) {
            statusElement.textContent = `Команда "${command}" успешно отправлена!`;
            // Через 2 секунды очистим статус
            setTimeout(() => { statusElement.textContent = 'Готов к работе.'; }, 2000);
        } else {
            statusElement.textContent = 'Ошибка сервера.';
        }
    } catch (error) {
        console.error('Ошибка:', error);
        statusElement.textContent = 'Ошибка сети!';
    }
}

// Код для регистрации Service Worker (для PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}