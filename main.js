let countryName = document.querySelector(".country");
let populationCount = document.querySelector(".population");
let regionName = document.querySelector(".region");
let capitalName = document.querySelector(".capital");
let countryFlag = document.querySelector("img");
let boxes = document.querySelector(".boxes");
let search = document.getElementById("search");


function getData(){
  fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      boxes.innerHTML += `<div class="box">
      <div class="img-flaq"><img src="${element.flags.svg}"/></div>
      <div class="about">
        <h1 class="country">${element.name.common}</h1>
        <p class="population">Population : ${element.population}</p>
        <p class="region">Region : ${element.region}</p>
        <p class="capital">Capital : ${element.capital}</p>
      </div>
    </div>`;
    });
  });
}
getData();


search.addEventListener("input", function(){
  let searchValue = search.value.toLocaleLowerCase();
if(search.value.length > 0){
  fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
  .then(res => res.json())
  .then(data => {
    data.forEach((element) => {
      boxes.innerHTML = `<div class="box">
      <div class="img-flaq"><img src="${element.flags.svg}"/></div>
      <div class="about">
        <h1 class="country">${element.name.common}</h1>
        <p class="population">Population : ${element.population}</p>
        <p class="region">Region : ${element.region}</p>
        <p class="capital">Capital : ${element.capital}</p>
      </div>
    </div>`;
    })
  })
}
})
  