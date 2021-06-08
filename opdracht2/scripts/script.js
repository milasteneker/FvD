// JavaScript Document
console.log("howdy");


var deLijst = document.getElementById('list');
var sortable = Sortable.create(deLijst);

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

console.log(aEen);
console.log(aTwee);
console.log(aDrie);
console.log(aVier);
console.log(aVijf);
console.log(aZes);
console.log(aZeven);

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

aEen.addEventListener('keydown', openPreviewMetToetsen);
aTwee.addEventListener('keydown', openPreviewMetToetsen);
aDrie.addEventListener('keydown', openPreviewMetToetsen);
aVier.addEventListener('keydown', openPreviewMetToetsen);
aVijf.addEventListener('keydown', openPreviewMetToetsen);
aZes.addEventListener('keydown', openPreviewMetToetsen);
aZeven.addEventListener('keydown', openPreviewMetToetsen);

// Einde preview geven 