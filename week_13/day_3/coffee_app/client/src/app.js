const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

const coffeeRequestComplete = function(){
  const responseText = this.responseText;
  const coffeeArray = JSON.parse(responseText);
  populateList(coffeeArray);
};

const populateList = function(coffeeArray){
  for(let coffee of coffeeArray){
    const p = document.createElement("p");
    p.innerText = "You drank: " + coffee.name + " by: " + coffee.roaster + " from: TBC";
    document.body.appendChild(p);
  }
};

const app = function(){
  // When we start, i.e. http://localhost:3000,
  // We are going to make a server request to /coffees,
  // Which will trigger our server.js get /coffees route.
  // Note:
  // There is no need to explicity put the whole url ("http://localhost:3000/coffees")
  // because we are on localhost already as the server...
  makeRequest("/coffees", coffeeRequestComplete);
};

document.addEventListener("DOMContentLoaded", app);
