import React, { Component } from 'react';
import './App.css';
import Chrono from './Components/Chrono';

class App extends Component {
  state = {
    show: true,
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    })
  }
  render(){
    const { show } = this.state;
    return (
      <div className="App">
        <header className="App-header">
        <h1>Chrono</h1>
        </header>
        {show ? <Chrono start={true} show={show} /> : '' }

        <Chrono start={false} show={show} />
        <button onClick={this.handleShow}>Show/hide</button>
      </div>
    )
  }
}

export default App;
