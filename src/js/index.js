"use strict";

// Важно подключить первым, чтобы все быстрее отработало
import "./helpers.b/_quickfix.js"


import "./components.b/groupers/_bayan.js";
import "./components.b/controls/_select.js";


import "./components.b/header/header.js";
import "./components.b/controls/formich.js";


window.media = {
	tablet: 991,
}

window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('a[href="#languages"]').forEach(lang => {
    lang.addEventListener('click', e => {
      console.log(lang)
      e.preventDefault();
    })
  })
});
