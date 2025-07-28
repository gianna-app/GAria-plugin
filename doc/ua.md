# 📘 Посібник з використання GAria-плагіна

GAria — це компактний JavaScript-інструмент для зручного показу та згортання контенту. Особливо корисний для інтерфейсів із підтримкою програм екранного доступу.
Все, що потрібно — правильно налаштувати шаблон і підключити плагін.

---

# 🔌 Підключення

Через конфіг шаблону:

```json
{
  "container": "div",
  "config": {
    "js": [
      {
        "path": "/GAria-plugin.js",
        "async": false,
        "cache": false
      }
    ]
  }
}
```


Або звичайним способом у HTML:

```html
<script src="/GAria-plugin.js"></script>
```

---

# 🧱 Приклад шаблону з елементами

Створимо кнопку та пов’язану з нею область для контенту:

```json
{
  "container": "div",
  "elements": [
    {
      "container": "button",
      "text": "Menu",
      "attributes": {
        "id": "menubutton",
        "name": "menu"
      }
    },
    /* Тут буде контент */
    {
      "container": "nav",
      "attributes": {
        "id": "menucontent",
        "name": "menu"
      }
    }
  ]
}
```

---

# ⚙️ JS-конфігурація

```js
$g.getPlugin("GAria").init({
  buttons: "#menubutton",         // Селектор кнопок
  content: "#menucontent",        // Селектор області контенту
  aria: "expanded",               // ARIA-атрибут (наприклад: expanded або pressed)
  switch: false,                  // Якщо true — усі області зв’язані: відкриття однієї ховає інші
  display: "close",               // "close" — область згорнута за замовчуванням, "open" — перша відкрита
  autoClose: false                // Якщо true — область автоматично згорнеться при натисканні
});
```

---

# Важливо!

Атрибут name пов’язує кнопку з областю контенту. Значення мають збігатися.
 