let countryArray = [];

const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();           // XHR
  request.open("GET", url);                       // open URL
  request.addEventListener("load", callback)      // when it loads fire the callback function
  request.send();                                 // send request
};

const requestComplete = function(){
  if(this.status !== 200) return;         // this means there has been an error, 200 means good
  const jsonString = this.responseText;
  const countries = JSON.parse(jsonString);
  // populateList(countries);
  populateDropDown(countries);
};

const populateList = function(countries){
  const ul = document.getElementById('country-list');
  // countries.forEach(country => {
  //   const li = document.createElement('li');
  //   li.innerText = country.name;
  //   ul.appendChild(li);
  // });
  for(let country of countries){
    const li = document.createElement('li');
    li.innerText = country.name;
    ul.appendChild(li);
  }
};

const populateDropDown = function(countries){
  const select = document.getElementById('country-dropdown');
  for(let country of countries){
    const option = document.createElement('option');
    option.value = country;
    option.innerText = country.name;
    select.appendChild(option);
    countryArray.push(country);                 // Push country object into our global array
  }
};

const displayCountryDetails = function(country){
  const name = document.getElementById('country-name');
  const population = document.getElementById('country-population');
  const capital = document.getElementById('country-capital');
  name.innerText = "Country Name: " + country.name;
  population.innerText = "Population: " + country.population;
  capital.innerText = "Capital City: " + country.capital;
};

const updateCountryDetails = function(value){
  displayCountryDetails(countryArray[value]);
  localStorage.setItem('lastCountry', JSON.stringify(countryArray[value]));
};

const app = function(){
  const url = "https://restcountries.eu/rest/v2/all";

  const lastStoredCountry = JSON.parse(localStorage.getItem('lastCountry')) || null;
  if(lastStoredCountry != null){
    displayCountryDetails(lastStoredCountry);
  }

  const button = document.getElementById('fetchCountries');
  button.addEventListener('click', function(){
    makeRequest(url, requestComplete);               // once we get URL we fire our function
  });

  const select = document.getElementById('country-dropdown');
  select.addEventListener("change", function(event){
    updateCountryDetails(event.target.selectedIndex);
  });
}

window.addEventListener('load', app);
