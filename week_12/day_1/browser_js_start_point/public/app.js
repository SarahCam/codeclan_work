// wait until whole page is loaded - window.onload,so we can find the intro id!!
// this is because app.js is sourced in the head of index.html

const app = function(){
  const tag = document.getElementById("intro");
  debugger;
  tag.innerHTML = "I've changed the text!";
};

window.onload = app;        // Note, no brackets after app - else it runs immmediately if () are there!!!!  window.onload is delayed as it is a callback that will wait until the page is loaded..
