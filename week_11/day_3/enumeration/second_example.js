const tweetGetter = {
  getTweets: function(callback){
    // DO SOME HORRIBLE TECHY STUFF
    // ...
    // THAT TAKES SOME TIME...
    callback();
  },

  renderHeader: function(){
    // create an <h1 />
  },

  render: function(){
    this.getTweets(function(){
      console.log(this);
      // this.renderHeader();
    }.bind(this));
  }
};

tweetGetter.render();
