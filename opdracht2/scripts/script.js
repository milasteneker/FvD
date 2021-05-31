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