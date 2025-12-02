"use strict";
const toggleBtn = document.getElementById("switchTheme");
const body = document.querySelector("body");
const main = document.querySelector("main");
const header = document.querySelector("header");
//switch from dark mode to light mode
function switchTheme(){
    if(btn.innerHTML === "Light Mode"){
        toggleBtn.innerHTML = "Dark Mode";
        body.classList.toggle("light");
        main.classList.toggle("light");
        header.classList.toggle("light");
    } else {
        toggleBtn.innerHTML = "Light Mode"
        body.classList.toggle("light");
        main.classList.toggle("light");
        header.classList.toggle("light");
    }
}


//Cost Calculator

//Contact Form

//Form validation 


//Event Handlers

//Switch theme event handler
document.getElementById("switchTheme").addEventListener("click", switchTheme);

