// JavaScript Document
console.log("howdy");

// Begin filteren
// Bron: Oefening Libraries: Filteren
var optionAll = document.querySelector("#filter-all");
var optionVormgeving = document.querySelector("#filter-vormgeving");
var optionCode = document.querySelector("#filter-code");
var optionOverig = document.querySelector("#filter-overig");

function filterList(event){
  let deLijst = document.querySelector("main");
  let nieuweFilter = event.target.value;
  deLijst.className = "";
  deLijst.classList.add(nieuweFilter);
}

optionAll.addEventListener("change", filterList);
optionVormgeving.addEventListener("change", filterList);
optionCode.addEventListener("change", filterList);
optionOverig.addEventListener("change", filterList);
// Eind filteren 


// Begin preview geven
// Bron: Oefening Recap: Toetsen 2
var aEen = document.querySelector('a[href="https://oege.ie.hva.nl/~stenekm/Eindopdracht/"]');
var aTwee = document.querySelector('a[href="https://oege.ie.hva.nl/~stenekm/Eindproject/StichtingJeugdwerk/"]');
var aDrie = document.querySelector('a[href="https://oege.ie.hva.nl/~stenekm/onepager/"]');
var aVier = document.querySelector('a[href="https://oege.ie.hva.nl/~stenekm/todolist/registreren/"]');
var aVijf = document.querySelector('a[href="https://milasteneker.github.io/blokweb/"]');
var aZes = document.querySelector('a[href="https://oege.ie.hva.nl/~stenekm/ProjectBeyond.pdf"]');
var aZeven = document.querySelector('a[href="https://oege.ie.hva.nl/~stenekm/Ubicomp.pdf"]');
var aAcht = document.querySelector('a[href="https://milasteneker.github.io/FvD/opdracht1/index.html"]');

console.log(aEen);
console.log(aTwee);
console.log(aDrie);
console.log(aVier);
console.log(aVijf);
console.log(aZes);
console.log(aZeven);
console.log(aAcht);

function openPreviewMetToetsen(event) {
  let deLi = event.target.parentElement;

  switch(event.key) { 
    case "ArrowRight":
      deLi.classList.add("tonen");
      break; 
    case "ArrowLeft":
      deLi.classList.remove("tonen");
      break;  
    case "Escape":
      deLi.classList.remove("tonen");
      break;
  }
}

function openPreviewMetSwipen(event) {
  let deLi = event.target.parentElement;

  deLi.classList.toggle("tonen");
}


aEen.addEventListener('keydown', openPreviewMetToetsen);
aTwee.addEventListener('keydown', openPreviewMetToetsen);
aDrie.addEventListener('keydown', openPreviewMetToetsen);
aVier.addEventListener('keydown', openPreviewMetToetsen);
aVijf.addEventListener('keydown', openPreviewMetToetsen);
aZes.addEventListener('keydown', openPreviewMetToetsen);
aZeven.addEventListener('keydown', openPreviewMetToetsen);
aAcht.addEventListener('keydown', openPreviewMetToetsen);

aEen.addEventListener('touchmove', openPreviewMetSwipen);
aTwee.addEventListener('touchmove', openPreviewMetSwipen);
aDrie.addEventListener('touchmove', openPreviewMetSwipen);
aVier.addEventListener('touchmove', openPreviewMetSwipen);
aVijf.addEventListener('touchmove', openPreviewMetSwipen);
aZes.addEventListener('touchmove', openPreviewMetSwipen);
aZeven.addEventListener('touchmove', openPreviewMetSwipen);
aAcht.addEventListener('touchmove', openPreviewMetSwipen);

// Einde preview geven 


// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
// var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
// var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

// /* de commando's */
// var commandos = [ 'open', 'sluit'];
// var grammar = '#JSGF V1.0; grammar commandos; public <commando> = ' + commandos.join(' | ') + ' ;'

// /* het luisterobject */
// var recognition = new SpeechRecognition();
// var speechRecognitionList = new SpeechGrammarList();

// /* als er een commando uitgesproken is */
// function spraakAfhandelen(event) {

//   let last = event.results.length - 1;
//   let commando = event.results[last][0].transcript;
//   console.log('Result received: ' + commando + '. ' + 'Confidence: ' + event.results[0][0].confidence);

//   if ( commando.trim() == "open") {
//   	let deLi = event.target.parentElement;
//     deLi.classList.add("tonen");
//   } else if (commando.trim() == "sluit") {
//   	let deLi = event.target.parentElement;
//     deLi.classList.remove("tonen");
//   }
// }

// function luisteren(){
//    recognition.start();
//    console.log('Ready to receive a command.');
// }

// /* het luisterobject de commando's leren */
// speechRecognitionList.addFromString(grammar, 1);
// recognition.grammars = speechRecognitionList;
// recognition.continuous = true;
// recognition.lang = 'nl';
// recognition.interimResults = true;
// recognition.maxAlternatives = 1;

// recognition.onresult = function(event) {
//    spraakAfhandelen(event);
// }

// recognition.onend = function() {
//    luisteren();
// }

// luisteren();