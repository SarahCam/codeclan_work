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
  event.preventDefault();
  console.log("Submit button clicked!");

  // get value from input fields in browser:
  const nameInputValue = document.querySelector("#name").value;
  const quoteInputValue = document.querySelector("#quote").value;

  const quoteToSend = {
    name: nameInputValue,
    quote: quoteInputValue
  };

  request.post(createRequestComplete, quoteToSend);
}

const createRequestComplete = function(response){
  console.log(response);
  quoteView.addQuote(response);
}

const appStart = function(){
  request.get(getQuotesRequestComplete);

  const createQuoteButton = document.querySelector("#submit-quote");
  createQuoteButton.addEventListener("click", createButtonClicked);
}

document.addEventListener('DOMContentLoaded', appStart);
