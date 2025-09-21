// Инициализация EmailJS. 
// ЗАМЕНИТЕ 'YOUR_PUBLIC_KEY' на ваш настоящий Public Key из Dashboard!
emailjs.init("YOUR_PUBLIC_KEY"); 

// Функция для отправки команды
async function sendCommand(command) {
    const statusElement = document.getElementById('status');
    statusElement.textContent = `Отправляю команду: ${command}...`;

    // Опционально: добавляем дату для отправки в шаблон
    const templateParams = {
        command: command,
        time: new Date().toLocaleString('ru-RU') // Дата в формате для России
    };

    try {
        // Отправляем письмо
        // ЗАМЕНИТЕ 'your_service_id' и 'your_template_id' на реальные ID!
        const response = await emailjs.send(
            'your_service_id', // Ваш Service ID
            'your_template_id', // Ваш Template ID
            templateParams // Переменные для подстановки в шаблон
        );

        console.log('SUCCESS!', response.status, response.text);
        statusElement.textContent = `Успешно! Команда "${command}" отправлена.`;
        
        // Через 3 секунды очистим статус
        setTimeout(() => { 
            statusElement.textContent = 'Готов к работе.';
        }, 3000);

    } catch (error) {
        console.error('FAILED...', error);
        statusElement.textContent = 'Ошибка отправки. Проверьте консоль.';
    }
}
