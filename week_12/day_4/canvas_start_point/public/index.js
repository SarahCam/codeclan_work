window.addEventListener('DOMContentLoaded', function(){
  const canvas = document.querySelector('#main-canvas');
  const context = canvas.getContext('2d');

  // Draw rectangle:
  context.fillStyle = 'orange';         // defaults to black, so change color to orange
  context.fillRect(10, 10, 50, 50);     // x, y, w, h

  // Draw line:
  context.strokeStyle = 'hotpink';
  context.beginPath();
  context.moveTo(100, 100);             // move cursor to x, y coord
  context.lineTo(100, 200);             // draw line to x, y coord
  context.stroke();                     // draw

  // Draw triangle:
  context.beginPath();
  context.moveTo(200, 200);
  context.lineTo(200, 300);
  context.lineTo(100, 300);
  context.closePath();                // adds line between end points to complete triangle
  context.stroke();                   // draw line
  context.fill();                     // fill with color

  // Draw circle:
  const drawCircle = function(x,y){
    context.beginPath();                               // 2 PI R
    context.arc(x, y, 100, 0, Math.PI * 2, true);  // x, y, radius, start angle, end angle, clockwise/counterclockwise
    context.stroke();
  }
  // Draw half circle:
  const drawHalfCircle = function(x,y){
    context.fillStyle = 'blue';
    context.beginPath();                               // 2 PI R
    context.arc(x, y, 100, 0, Math.PI, true);     // x, y, radius, start angle, end angle, clockwise/counterclockwise
    context.closePath();
    context.stroke();
    context.fill();
  }

  // canvas.addEventListener('click', function(event){
  //   drawImg(event.x, event.y);
  // })

  canvas.addEventListener('click', function(event){
    drawCircle(event.x, event.y);
  })

  // Draw image:
  const img = document.createElement('img');
  img.src = "https://pbs.twimg.com/profile_images/788554727378325505/8lzc7jXx_reasonably_small.jpg";

  const drawImg = function(x,y){
    context.drawImage(img, x, y, 90, 90);
  }

  img.addEventListener('load', drawImg(200, 300));

  const changeColour = function(){
    context.strokeStyle = this.value;         // colourPicker tag's value
  }

  const colourPicker = document.querySelector('#input-colour');
  colourPicker.addEventListener('change', changeColour);

});
