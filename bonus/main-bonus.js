// definisco la variabile button per hamburger menu
const button = document.querySelector(".fa-bars");

// definisco la variabile collegata all'html dell'hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");

// definisco la variabile che mi permettera di chiudere l hamburger menu una volta attivo
const closeButton = document.querySelector(".fa-times");

// definisco l'azione del bottone che aprirà l hamburger menu
button.addEventListener('click', function() {
    hamburgerMenu.classList.add("active");
})

// definisco l'azione del bottone che chiuderà l hamburger menu
closeButton.addEventListener('click', function() {
    hamburgerMenu.classList.remove("active");
})

// --------------------------------------------------------------------------------------------

// dichiaro la variabile che mi collega all'html del link iscrizione
const iscrizioneHtml = document.querySelector(".form-input");

// dichiaro la variabile che mi collega all'html della form
let form = document.querySelector('.form');
let formButton = document.getElementById('form-button');

iscrizioneHtml.addEventListener('click', function() {
    form.classList.remove("hide");
})

formButton.addEventListener('click', function() {
    form.classList.add("hide");
})