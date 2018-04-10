// var app = function() {
//   const tag = document.getElementById("tagline");
//   // const quotes = document.getElementsByClassName("quote");
//   // const quotes = document.getElementsByTagName("article");
//   //
//   // const cites = document.getElementsByTagName("cite");
//   //
//   // const quoteOfDay = document.getElementById("quote-of-the-day");
//
//   //////////////////////////////////////
//   // const quotes = document.querySelectorAll(".quote");
//   //
//   // const element  = document.getElementById("sign-up");
//   // let children = element.children;
//   //
//   // for(let i = 0; i < children.length; i++){
//   //   console.log(children[i]);
//   // }
//
//   const tagline = document.getElementById("tagline");
//   // tagline.innerText = "New Tagline, just using text";
//   // tagline.innerHTML = "<span>New Tagline with HTML</span>";
//
//   const quotes = document.getElementsByTagName("article");
//   // quotes[0].className = "red-quote";          // CSS defined - red-quote, can be handy to dynamically change look
//
//   quotes[0].style.backgroundColor = "tomato";   // better to use CSS, but demos this is possible too
//                                                 // note camelCase instead of snake_case for CSS property!
//   quotes[0].style.display = "none";             // hides quotes[0] - still in dom, just not visible
//
//   debugger;
//
//   // tag.innerHTML("Changed");
// };

const createQuoteArticle = function(){
  let quoteArticle = document.createElement("article");
  quoteArticle.classList.add("quote");
  return quoteArticle;
}

const createBlockQuote = function(quoteText){
  let blockQuote = document.createElement("blockquote");
  blockQuote.innerText = quoteText;
  return blockQuote;
}

const createCite = function(author){
  let cite = document.createElement("cite");
  cite.innerText = author;
  return cite;
}

const appendElements = function(quoteArticle, blockQuote, cite){
  // 4. Append the cite to the blockquote
  blockQuote.appendChild(cite);

  // 5. Append the blockquote to the article
  quoteArticle.appendChild(blockQuote);

  // 6. Add the article to the list of quotes
  let quotes = document.querySelector("#quotes");  // # like CSS, to fetch the element
  quotes.appendChild(quoteArticle);
}

const addQuote = function(author, quoteText) {
  const quoteArticle = createQuoteArticle();
  const blockQuote = createBlockQuote(quoteText);
  const cite = createCite(author);
  appendElements(quoteArticle, blockQuote, cite);
}

const app = function(){

  addQuote("Ally McGilloway", "STOP COPYING AND PASTING!");
  addQuote("J", "TBC");
  addQuote("Sarah", "OMG....");
  debugger;

  // // 1. Create parent container and its className (article, quote)
  // let quoteArticle = document.createElement("article");
  // quoteArticle.classList.add("quote");
  //
  // // 2. Create the first child - blockquote, and its text
  // let blockQuote = document.createElement("blockquote");
  // blockQuote.innerText = "STOP COPYING AND PASTING!";
  //
  // // 3. Create the cite element and its text
  // let cite = document.createElement("cite");
  // cite.innerText = "Ally McGilloway";
  //
  // // 4. Append the cite to the blockquote
  // blockQuote.appendChild(cite);
  //
  // // 5. Append the blockquote to the article
  // quoteArticle.appendChild(blockQuote);
  //
  // // 6. Add the article to the list of quotes
  // let quotes = document.querySelector("#quotes");  // # like CSS, to fetch the element
  // quotes.appendChild(quoteArticle);
  // debugger;
}

window.onload = app;
