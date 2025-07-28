# 📘 Anleitung zur Verwendung des GAria-Plugins

GAria ist ein kompaktes JavaScript-Tool, mit dem sich Inhaltsbereiche bequem ein- und ausblenden lassen. Besonders nützlich für barrierefreie Benutzeroberflächen mit Screenreader-Unterstützung.
Alles, was du brauchst, ist eine korrekte Konfiguration des Templates und das Einbinden des Plugins.

---

# 🔌 Einbindung

Über die Konfiguration im Template:

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

Oder direkt im HTML:

```html
<script src="/GAria-plugin.js"></script>
```

---

# 🧱 Beispiel-Template mit Elementen

Wir erstellen einen Button und einen damit verbundenen Inhaltsbereich:

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
    /* Hier kommt der Inhalt */
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

# ⚙️ JS-Konfiguration

```js
$g.getPlugin("GAria").init({
  buttons: "#menubutton",         // Selector für Buttons
  content: "#menucontent",        // Selector für Inhaltsbereich
  aria: "expanded",               // ARIA-Attribut (z. B. expanded oder pressed)
  switch: false,                  // Wenn true: Öffnen eines Bereichs schließt die anderen
  display: "close",               // "close" bedeutet standardmäßig ausgeblendet, "open" zeigt den ersten Bereich
  autoClose: false                // Wenn true: Bereich schließt sich beim Klicken
});
```

---
 
# Wichtig!
Das name-Attribut verbindet den Button mit dem Inhaltsbereich. Die Werte müssen identisch sein.
 
 
 ---
 