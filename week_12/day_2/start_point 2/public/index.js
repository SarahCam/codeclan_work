let numClicks = 0;

var app = function(){

  const button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);  // no () so don't execute here

  const input = document.querySelector('input');
  input.addEventListener('keyup', handleKeyPress);      // when key is pressed and released..

  const select = document.querySelector('select');
  select.addEventListener('change', handleSelectChanged);

}

var handleButtonClick = function(){
  const pTag = document.querySelector('#button-result');
  numClicks += 1;
  pTag.innerText = 'Woa dude, I got totally clicked! ' + numClicks;
}

var handleKeyPress = function(){
  const pTag = document.querySelector('#text-result');
  pTag.innerText = this.value;            // object that called this function, is 'this' - the value of input element above - the value of the event when key is pressed above...
}

var handleSelectChanged = function(event){
  const pTag = document.querySelector('#select-result');
  pTag.innerText = this.value;
  console.log(event);
}

window.addEventListener('load', app);
