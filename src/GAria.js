function GAria(g) {
    let m = {
    init(obj) {
      // Loop through the buttons and link them with content areas.
      let buttons = document.querySelectorAll(obj.buttons);
      buttons.forEach(function (data, index) {
        // Start searching for the content area.
        let att = data.getAttribute("name");
        let selector = obj.content + '[name="' + att + '"]';
        let content = document.querySelector(selector);

        // Check if auto display is enabled, then open the first area from the list.
        if (obj?.display == "open") {
          if (index == 0) {
            content.style.display = "block";
            data.setAttribute("aria-" + obj?.aria, "true");
            data.textContent = data.getAttribute("text-close") == undefined ? data.textContent : data.getAttribute("text-close");
          } else { // First area is opened, others are collapsed
            content.style.display = "none";
            data.setAttribute("aria-" + obj?.aria, "false");
            data.textContent = data.getAttribute("text-open") == undefined ? data.textContent : data.getAttribute("text-open");
          }
        } else { // If display is close, then all areas are collapsed by default
          content.style.display = "none";
          data.setAttribute("aria-" + obj?.aria, "false"); // Set button to false
          data.textContent = data.getAttribute("text-open") == undefined ? data.textContent : data.getAttribute("text-open"); // Button label
        }
        data.setAttribute("tabindex", "0"); // assign tabindex to buttons
        // Attach click event 
        if (obj?.autoClose == true) {
          content.addEventListener("click", function (e) {
            document.querySelectorAll(obj?.content).forEach(function (c, i) { c.style.display = "none"; });
            document.querySelectorAll(obj?.buttons).forEach(function (b, x) { b.setAttribute("aria-" + obj?.aria, "false"); b.textContent = b.getAttribute("text-open") == undefined ? b.textContent : b.getAttribute("text-open"); });
          });
        }
        // Attach click handler to buttons.
        data.addEventListener("click", function (e) {
          // Check if the switch is enabled. Also check if the button status is false. Needed to collapse all areas
          if (obj?.switch == true && this.getAttribute("aria-" + obj?.aria) == "false") {
            document.querySelectorAll(obj?.content).forEach(function (c, i) { c.style.display = "none"; });
            document.querySelectorAll(obj?.buttons).forEach(function (b, x) { b.setAttribute("aria-" + obj?.aria, "false"); b.textContent = b.getAttribute("text-open") == undefined ? b.textContent : b.getAttribute("text-open"); });
          }
          // Then check the button's status
          if (this.getAttribute("aria-" + obj?.aria) == "true") {
            this.setAttribute("aria-" + obj?.aria, "false");
            content.style.display = "none";
            this.textContent = this?.getAttribute("text-open") == undefined ? this.textContent : this.getAttribute("text-open");
          } else {
            this.setAttribute("aria-" + obj?.aria, "true");
            content.style.display = "block";
            this.textContent = this?.getAttribute("text-close") == undefined ? this.textContent : this.getAttribute("text-close");
            if (obj?.focus == true) {
              content.setAttribute("tabindex", "0");
              content.focus();
            }
          }
        });
      });
    }
    };
    return m;
}
$g.addPlugin("GAria",GAria);
