"use strict";

//switch from dark mode to light mode
function switchTheme(){
    let btn = document.getElementById("switchTheme");
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    const header = document.querySelector("header");

    if(btn.innerHTML === "Light Mode"){
        btn.innerHTML = "Dark Mode";
        body.classList.toggle("light");
        main.classList.toggle("light");
        header.classList.toggle("light");
    } else {
        btn.innerHTML = "Light Mode"
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

