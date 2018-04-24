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
