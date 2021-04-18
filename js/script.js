/*searchbar function*/
let searchButton = document.getElementById("enter-search");
let inputValue = document.getElementById("search");
/*USA*/
let middleDiv = document.querySelector(".search-corona-virus-container");
let h1Name = document.getElementById("title-for-div--2");
let usaTotal = document.getElementById("usa-total-cases-of-covid");
let usaActive = document.getElementById("usa-active-cases-of-covid");
let usaDeaths = document.getElementById("usa-deaths-cases-of-covid");
let usaRecovered = document.getElementById("usa-recovered-cases-of-covid");
/*SEARCH*/
let searchTotal = document.getElementById("search-total-cases-of-covid");
let searchActive = document.getElementById("search-active-cases-of-covid");
let searchDeaths = document.getElementById("search-deaths-cases-of-covid");
let searchRecovered = document.getElementById(
  "search-recovered-cases-of-covid"
);
let us = "us";
/*CHINA*/
let chinaTotal = document.getElementById("china-total-cases-of-covid");
let chinaActive = document.getElementById("china-active-cases-of-covid");
let chinaDeaths = document.getElementById("china-deaths-cases-of-covid");
let chinaRecovered = document.getElementById("china-recovered-cases-of-covid"); //
let china = "china";

/**/
searchButton.addEventListener("click", () => {
  fetch(
    "https:api.quarantine.country/api/v1/summary/region?region=" +
      inputValue.value +
      "&sub_areas=1"
  )
    .then((response) => response.json())
    .then((data) => {
      let searchTotalCases = data["data"]["summary"]["total_cases"];
      let searchTotalActive = data["data"]["summary"]["active_cases"];
      let searchTotalDeaths = data["data"]["summary"]["deaths"];
      let searchTotalRecovered = data["data"]["summary"]["recovered"];
      /**/
      console.log(data);
      searchTotal.textContent = "Total cases: " + searchTotalCases;
      searchActive.textContent = "Total active: " + searchTotalActive;
      searchDeaths.textContent = "Deaths: " + searchTotalDeaths;
      searchRecovered.textContent = "Recovered: " + searchTotalRecovered;
      h1Name.textContent = inputValue.value + " statistics";
      middleDiv.style.display = "block";
    })
    .catch((err) => {
      console.log(err);
    });
});

/*usa*/
fetch(
  "https:api.quarantine.country/api/v1/summary/region?region=" +
    us +
    "&sub_areas=1"
)
  .then((response) => response.json())
  .then((data) => {
    let usaTotalCases = data["data"]["summary"]["total_cases"];
    let usaTotalActive = data["data"]["summary"]["active_cases"];
    let usaTotalDeaths = data["data"]["summary"]["deaths"];
    let usaTotalRecovered = data["data"]["summary"]["recovered"];
    /**/
    console.log(data);
    usaTotal.textContent = "Total cases: " + usaTotalCases;
    usaActive.textContent = "Total active: " + usaTotalActive;
    usaDeaths.textContent = "Deaths: " + usaTotalDeaths;
    usaRecovered.textContent = "Recovered: " + usaTotalRecovered;
  })
  .catch((err) => {
    console.log(err);
  });
/*china*/
fetch(
  "https:api.quarantine.country/api/v1/summary/region?region=" +
    china +
    "&sub_areas=1"
)
  .then((response) => response.json())
  .then((data) => {
    let chinaTotalCases = data["data"]["summary"]["total_cases"];
    let chinaTotalActive = data["data"]["summary"]["active_cases"];
    let chinaTotalDeaths = data["data"]["summary"]["deaths"];
    let chinaTotalRecovered = data["data"]["summary"]["recovered"];
    /**/
    console.log(data);
    chinaTotal.textContent = "Total cases: " + chinaTotalCases;
    chinaActive.textContent = "Total active: " + chinaTotalActive;
    chinaDeaths.textContent = "Deaths: " + chinaTotalDeaths;
    chinaRecovered.textContent = "Recovered: " + chinaTotalRecovered;
  })
  .catch((err) => {
    console.log(err);
  });
