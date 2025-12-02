"use strict";
const toggleBtn = document.getElementById("switchTheme");
const body = document.querySelector("body");
const main = document.querySelector("main");
const header = document.querySelector("header");
const sections = document.querySelectorAll("section");
const text = document.querySelectorAll("p:not(#home p)");
const list = document.querySelectorAll("ol li");
const articles = document.querySelectorAll("article")
const header2 = document.querySelectorAll("h2:not(#home h2)");
const navLinks = document.querySelectorAll("nav a") 
const header1 = document.querySelectorAll("h1");
const header3 = document.querySelectorAll("h3");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");
const textarea = document.querySelector("textarea")
const legend = document.querySelector("legend");
const figcaptions = document.querySelectorAll("figcaption");
//switch from dark mode to light mode
function switchTheme(){
    if(toggleBtn.innerHTML === "Light Mode"){
        toggleBtn.innerHTML = "Dark Mode";
    } else {
        toggleBtn.innerHTML = "Light Mode";
    }
    body.classList.toggle("light");
    main.classList.toggle("light");
    header.classList.toggle("light");
    form.classList.toggle("light");
    textarea.classList.toggle("light");
    legend.classList.toggle("light");
    
    sections.forEach(section => section.classList.toggle("light"));
    text.forEach(p => p.classList.toggle("light"));
    list.forEach(li => li.classList.toggle("light"));
    articles.forEach(article => article.classList.toggle("light"));
    header2.forEach(h2 => h2.classList.toggle("light"));
    navLinks.forEach(a => a.classList.toggle("light"));
    header1.forEach(h1 => h1.classList.toggle("light"));
    header3.forEach(h3 => h3.classList.toggle("light"));
    inputs.forEach(input => input.classList.toggle("light"));
    labels.forEach(label => label.classList.toggle("light"));
    figcaptions.forEach(figcaption => figcaption.classList.toggle("light"));
}


//Cost Calculator

//Contact Form

//Form validation 


//Event Handlers

//Switch theme event handler
document.getElementById("switchTheme").addEventListener("click", switchTheme);

