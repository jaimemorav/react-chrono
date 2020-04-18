import React, {Component} from 'react';

class Chrono extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    idClearInterval: '', 
  }

  startChrono = () => {
    let id = setInterval(()=>{      
      this.setState({
        seconds: this.Counter(),
      })
    },1000)
    
    this.setState({
      idClearInterval: id,
    })
  }

  Counter = () => {
    const { seconds, minutes } = this.state;
    if(seconds === 59) {
      this.CounterMinutes()
      return 0;
    } else {
      let newSeconds = seconds + 1;
      return newSeconds;
    }
  }

  CounterMinutes = () => {
    const {minutes} = this.state;
    let newMinutes = minutes + 1; 
    this.setState({
      minutes: newMinutes,
    })
  }


  stopChrono = () => {
    clearInterval(this.state.idClearInterval)
  }

  componentDidMount = () => {
    const {start} = this.props;
    (start ? this.startChrono() : console.log('Not started'))
  }

  reset = () => {
    this.stopChrono()
    this.setState({
      seconds: 0,
      minutes: 0,
    })
  }



  render(){
    const {minutes, seconds} = this.state;
    return (<div className='Chrono'>{minutes < 10 ? '0' +  minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}<div className='ButtonsContainer'><button onClick={this.stopChrono}>PAUSE</button><button onClick={this.startChrono}>START</button><button onClick={this.reset}>RESET</button></div></div>)
  }
}

export default Chrono; 