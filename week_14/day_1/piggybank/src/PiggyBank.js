import React from 'react';

class PiggyBank extends React.Component{

  constructor(props){
    super(props);         // This is passing the args to parent: React.Component
    this.deposit = this.deposit.bind(this);       //bind 'this' in the constructor
    this.withdraw = this.withdraw.bind(this);
    this.state = {
      total: 0
    }
  }

  // deposit(){
  //   this.setState(
  //     return {total: 5};
  //   )
  // }

  // setState is an asyncronouse React method,
  // so it queues up requests and applies in correct order.
  // Be careful as setState doesn't happen immediately, so anything depending
  // on it might not happen as expected.
  // this uses a callback function:
  deposit(){
    this.setState(prevState => {
      return {total: prevState.total + this.props.depositAmount};
    })
  }

  withdraw(){
    this.setState(prevState => {
      let newTotal = prevState.total < this.props.depositAmount ? 0 : prevState.total - this.props.depositAmount;
      return {total: newTotal};
    })
  }

  render(){
    return(
      <div className="bank-box">
        <h1>{this.props.title}</h1>
        <p>Owner: {this.props.owner}</p>
        <p>Deposit Amount: {this.props.depositAmount}</p>
        <p>I contain £{this.state.total}</p>
        <button onClick={this.deposit}>Add</button>
        <button onClick={this.withdraw}>Withdraw</button>
      </div>
    );
  }
}

export default PiggyBank;
