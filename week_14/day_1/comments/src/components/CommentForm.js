import React from "react";

class CommentForm extends React.Component {
  constructor(props){
    super(props)
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      author: "",
      text: ""
    }
  }

  handleAuthorChange(event){
    this.setState({author: event.target.value})
  }

  handleTextChange(event){
    this.setState({text: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();
    if(!text || !author){
      return
    }
    this.props.onCommentSubmit({author: author, text: text}); // run the function passed in as a prop
    this.setState({author: '', text: ''});                    //blank input fields
  }

  render(){
    return(
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post"/>
      </form>
    )
  }
}

export default CommentForm;
