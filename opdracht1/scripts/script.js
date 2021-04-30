// JavaScript Document
console.log("howdy");

var hapje = document.querySelector('#haribo');
var hapjeSound = document.querySelector('#hapje');


function hapjeSpeelt(event){
	hapjeSound.play();
}

hapje.addEventListener('click', hapjeSpeelt);