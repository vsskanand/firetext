/*
* Formatting Keyboard
* Copyright (C) Codexa Organization 2013.
*/

'use strict';


/* Format
------------------------*/ 

window.onload= function(){
	document.getElementsByClassName('gactive')[0].onclick = function () {
		var chs = document.querySelectorAll(".hidden"),
			ul = document.getElementsByClassName("align")[0];
		if(chs[0] !== undefined){
			for (var i=0; i<chs.length; i++) {
				chs[i] = chs[i].classList.remove("hidden");
				chs[i] = chs[i].classList.add("active");
			}
			var li = document.createElement("li"), 
				img = document.createElement("img");
			img.src = "style/icons/misc/garrow.svg";
			img.classList.add("arrow");
			li.appendChild(img);
			ul.insertBefore(li, chs[0].parentNode);
		} else {
			chs = document.querySelectorAll(".active");
			for (var i=0; i<chs.length; i++) {
				chs[i] = chs[i].classList.remove("active");
				chs[i] = chs[i].classList.add("hidden");
			}
			var li = document.getElementsByClassName("arrow").parentNode;
			ul.removeChild(li);
		}
	}
}