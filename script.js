const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else if (button.textContent === 'C') {
            display.value = ''; // Очистка поля ввода
        } else {
            display.value += button.textContent;
        }
    });
});

display.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        display.value += key;
    } else if (key === 'Enter') {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        display.value = '';
    }
});
