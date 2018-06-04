import React, { Component } from 'react';

class Increase extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  increaseClick = () => {
    this.setState({value: Number(this.state.value) + 1});
  }
  decreaseClick = () => {
    this.setState({value: this.state.value - 1});
  }

  handleChange = event => {
     if (!isNaN(parseFloat(event.target.value)) && isFinite(event.target.value)) {
       this.setState({value: event.target.value - 0});
     }
  }

  render(){
    return (<div>
      <input type="number" value={this.state.value} onChange={this.handleChange}/>
      <br />
      <button onClick={this.increaseClick}> Increase value</button>
      <button onClick={this.decreaseClick}> Decrease value </button>
      <br />
      <span> {this.state.value} </span>
    </div>)
  }
}





export default Increase;
