import React, { Component } from 'react';
import './App.css';
import PiggyBank from './PiggyBank'

class App extends Component {
  render() {
    let owner = "Sarah";
    let title = `${owner}'s Saving Pig`;
    return (
      <PiggyBank title={title} owner={owner} depositAmount={5}/>
    );
  }
}

export default App;
