# Портфолио разработчика

[Смотреть портфолио на GitHub Pages - https://k3nshi87.github.io/portfolio/](https://k3nshi87.github.io/portfolio/)

## Описание используемых технологий  
Проект создан с использованием следующих технологий:  

- **HTML** – структура страницы  
- **CSS** – стилизация и адаптивность  
- **JavaScript** – динамическое поведение  


## Основные элементы  

### 1. CSS-переменные  
В проекте используются **CSS-переменные** для удобного управления цветами и темами.  
Пример объявления переменных:  

```css
:root {
    --blackpure: #000;
    --black: #171718;
    --black-border: #26292d;
    --white: #FFF;
    --purple: #5C62EC;
    
    --text-color: var(--black); 
    --dark-bg: var(--black);
    --dark-border: var(--black-border);
    --header-text: var(--white);
    --accent: var(--purple);
}
```

### 2. Реализация адаптивной верстки с помощью медиа-запросов
```css
@media screen and (max-width: 620px) {
    .header {
        min-height: unset;
    }

    .header__title {
        font-size: 30px;
    }
    
    .header__title strong {
        font-size: 40px;
    }

    .section {
        padding: 40px 0;
        font-size: 40px;
    }

    .title-1 {
        margin-bottom: 30px;
        font-size: 40px;
    }

    .title-2 {
        margin-bottom: 10px;
        font-size: 30px;
    }

    .content-list {
        row-gap: 20px;
    }

    .content-list__item {
        font-size: 16px;
    }

    .project__title {
        font-size: 22px;
    }

    .footer {
        padding: 40px 0;
    }

    .footer__wrapper {
        row-gap: 20px;
    }

    .social {
        column-gap: 20px;
    }

    .social__item {
        width: 28px;
    }

    .btn-outline {
        font-size: 16px;
    }

    .project-details__desc {
        font-size: 22px;
        margin-bottom: 20px;
    }

    .nav-row {
        justify-content: space-between;
    }

    .dark-mode-btn {
        order: 0;
    }
}
```

### 3. Реализация смены темной и светлой темы с её сохранением в LocalStorage

```js
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}
```