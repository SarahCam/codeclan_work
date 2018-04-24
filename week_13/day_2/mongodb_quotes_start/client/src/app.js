const QuoteView = require('./views/quoteView');
const Request = require('./services/request.js');

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
