const btnDarkMode = document.querySelector(".dark-mode-btn");

// Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');
}

// Проверка темной темы в Local Storage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove('dark');
}

//Если меняются систменый настройки, меняем тему
window.matchMedia("(prefers-color-scheme: dark").addEventListener('change', () => {
    const newColorScheme = event.matches ? "dark" : 'light';
    if (newColorScheme === 'dark') {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'dark');
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'light');
    }
})

// Включение ночного режима на кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}


// ClassList - с его помощью можно работать с классами элемента
// toggle - добавляет класс если его нет, и удаляет если он есть
// onclick - обработчик события который срабатывает когда пользователь кликает по элементу

