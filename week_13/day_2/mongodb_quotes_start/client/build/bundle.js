/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const Request = function(url) {
  this.url = url;
}

// READ... send a GET request to the server...
Request.prototype.get = function(callback){
  const request = new XMLHttpRequest();
  request.open("GET", this.url);                  // if we get a get
  request.addEventListener("load", function(){
    if(this.status !== 200){
      return;
    }

    const responseBody = JSON.parse(this.responseText);   // parse the string from the server
    callback(responseBody);
  });

  request.send();
};

// CREATE... send a POST request to the server...
// 'body' is our new quote in JSON format:
Request.prototype.post = function(callback, body){
  const request = new XMLHttpRequest();
  request.open("POST", this.url);

  //Make sure we create JSON:
  request.setRequestHeader("Content-Type", "application/json");

  request.addEventListener("load", function(){    // wait for server to respond...
    if(this.status !== 201){
      return;
    }

    const responseBody = JSON.parse(this.responseText);
    callback(responseBody);
  });
  // pass in the object to the server too..
  request.send(JSON.stringify(body));
};

// DELETE... send a delete request to the server...
Request.prototype.delete = function (callback) {
  const request = new XMLHttpRequest();
  request.open("DELETE", this.url);
  request.addEventListener("load", function(){      // wait for server to respond...
    if(this.status != 204){
      return;
    }

    callback();
  });
  request.send();
};

module.exports = Request;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var QuoteView = function(){
  this.quotes = [];
}

QuoteView.prototype.addQuote = function(quote) {
  this.quotes.push(quote);
  this.render(quote);
}

QuoteView.prototype.clear = function(quote) {
  this.quotes = [];
  const ul = document.querySelector('#quotes');
  ul.innerHTML = '';
}

QuoteView.prototype.render = function(quote){
    const ul = document.querySelector('#quotes');
    const li = document.createElement('li');
    const text = document.createElement('p');
    text.innerText = `${quote.name} - "${quote.quote}"`;
    li.appendChild(text);
    ul.appendChild(li);
}

 module.exports = QuoteView;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const QuoteView = __webpack_require__(1);
const Request = __webpack_require__(0);

const quoteView = new QuoteView();
const request = new Request('http://localhost:3000/api/quotes');

const getQuotesRequestComplete = function(allQuotes){     // allQuotes is the responseBody in request.js  callback function
  console.log(allQuotes);
  for(quote of allQuotes){
    quoteView.addQuote(quote);
  };
}

const createButtonClicked = function(event){
  event.preventDefault();         // prevent the submit from happening...
  console.log("Submit button clicked!");

  // get value from input fields in browser:
  const nameInputValue = document.querySelector("#name").value;
  const quoteInputValue = document.querySelector("#quote").value;

  const quoteToSend = {
    name: nameInputValue,
    quote: quoteInputValue
  };

  request.post(createRequestComplete, quoteToSend);  // makerequest function again... with the quote
}

const createRequestComplete = function(response){
  console.log(response);
  quoteView.addQuote(response);         // pass the new quote in...
}

const deleteButtonClicked = function(){
  console.log("Delete button clicked");
  request.delete(deleteRequestComplete);
}

const deleteRequestComplete = function(){
  quoteView.clear();
}

const appStart = function(){
  // Initial READ action. on opening the browser at the endpoint url...
  request.get(getQuotesRequestComplete);      // same as makeRequest function.. but url is at top

  // CREATE button action...
  // When we hit the 'submit' button in UI, fire eventListener...
  const createQuoteButton = document.querySelector("#submit-quote");
  createQuoteButton.addEventListener("click", createButtonClicked);

  // DELETE button action...
  // When we hit the 'delete all' button in UI...
  const deleteButton = document.querySelector("#deleteButton");
  deleteButton.addEventListener("click", deleteButtonClicked);

}

document.addEventListener('DOMContentLoaded', appStart);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map