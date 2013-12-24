/*
* Keyboards
* Copyright (C) Codexa Organization 2013.
*/

'use strict';


/* Keyboards
------------------------*/ 
function keyboard(path) {
  if (path) {
    var keyboard = document.getElementById('keyboard');
    var keyboardFrame = document.getElementById('keyboard-frame');
    keyboardFrame.src = path;
    keyboard.classList.toggle('active');
  }
}
