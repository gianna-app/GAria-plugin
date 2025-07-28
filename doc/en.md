# 📘 GAria Plugin Usage Guide

GAria is a compact JavaScript tool that lets you easily toggle content areas — show or hide them when needed. Especially useful for screen reader–friendly interfaces.
All you need is to set up the template correctly and connect the plugin.

---

# 🔌 Integration

Via template config:

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

Or the regular way in HTML:

```html
<script src="/GAria-plugin.js"></script>
```

---

# 🧱 Template Example with Elements

We create a button and a linked content area:

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
    /* Content goes here */
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

# ⚙️ JS Configuration

```js
$g.getPlugin("GAria").init({
  buttons: "#menubutton",         // Selector for buttons
  content: "#menucontent",        // Selector for the content area
  aria: "expanded",               // ARIA attribute (e.g., expanded or pressed)
  switch: false,                  // If true, opening one area closes the others
  display: "close",               // "close" hides the area by default; "open" shows the first one
  autoClose: false                // If true, content area closes when clicked
});
```

---

# Important!

The name attribute links the button with the content area. The values must match.
 
 
 ---
 