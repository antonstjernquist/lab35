import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        name: 'steve',
        email: '@lit.com'
        }
    }
  }

  render(){
    return (
    <div>
      <h1> Hello </h1>
      <ul>
        <li className="listItem"> hej </li>
        <li className="listItem"> då </li>
      </ul>
    </div>
  )
  }
}

export default App;
