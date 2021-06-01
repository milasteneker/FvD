// JavaScript Document
console.log("howdy");


var deLijst = document.getElementById('list');
var sortable = Sortable.create(deLijst);

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


// Preview
var aEen = document.querySelector('a[href="https://oege.ie.hva.nl/~stenekm/Eindopdracht/"]');
var aTwee = document.querySelector('a[href="https://oege.ie.hva.nl/~stenekm/Eindproject/StichtingJeugdwerk/"]');
var aDrie = document.querySelector('a[href="https://oege.ie.hva.nl/~stenekm/onepager/"]');
var aVier = document.querySelector('a[href="https://oege.ie.hva.nl/~stenekm/todolist/registreren/"]');
var aVijf = document.querySelector('a[href="https://milasteneker.github.io/blokweb/"]');
var aZes = document.querySelector('a[href="https://oege.ie.hva.nl/~stenekm/ProjectBeyond.pdf"]');
var aZeven = document.querySelector('a[href="https://oege.ie.hva.nl/~stenekm/Ubicomp.pdf"]');
// var sluitenButton	= document.querySelector("close");
console.log(aEen);
console.log(aTwee);
console.log(aDrie);
console.log(aVier);
console.log(aVijf);
console.log(aZes);
console.log(aZeven);

function openPreviewMetToetsen(event) {
  /* de nav opzoeken met document.querySelector */
  /* en die in een variabele stoppen */
  let dePreview = event.target.nextElementSibling;

  
  /* bepalen welke toets is ingedrukt */
  switch(event.key) {
    /* als dat de ArrowRight is dan dit doen */  
    case "ArrowRight":
      dePreview.classList.add("tonen");
      /* break - zodat de andere toetsen niet onnodig gecheckt worden */
      break;
    /* als dat de ArrowLeft is dan dit doen */  
    case "ArrowLeft":
      dePreview.classList.remove("tonen");
      break;
    /* als dat de Escape is dan dit doen */  
    case "Escape":
      dePreview.classList.remove("tonen");
      break;

  }
}

// function previewSluiten(){
// 	  dePreview.classList.remove("tonen");
// }
aEen.addEventListener('keydown', openPreviewMetToetsen);
aTwee.addEventListener('keydown', openPreviewMetToetsen);
aDrie.addEventListener('keydown', openPreviewMetToetsen);
aVier.addEventListener('keydown', openPreviewMetToetsen);
aVijf.addEventListener('keydown', openPreviewMetToetsen);
aZes.addEventListener('keydown', openPreviewMetToetsen);
aZeven.addEventListener('keydown', openPreviewMetToetsen);
// sluitenButton.addEventListener('click', previewSluiten);
