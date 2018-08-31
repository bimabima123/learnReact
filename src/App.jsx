import React , {Component} from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline : 'Desember 25, 2018',
      newDeadline : ''
    } 
  }

  changeDeadline(){
    console.log('state', this.state);

    // this.setState({deadline: 'November 25, 2018'})
  }


  render(){
    return(
      // <div>CountDown Champ, App Component</div>
      <div className="App">
        <div className="App-title">CountDown to {this.state.deadline}</div>
       <div>
        <div className="Clock-days">14 Days</div>
        <div className="Clock-hours">30 Hours</div>
        <div className="Clock-minutes">15 Minutes</div>
        <div className="Clock-second">20 Seconds</div>
       </div>
       <div>
        <input placeholder='New Date' onChange={event => this.setState({newDeadline: event.target.value})}/>
        <button onClick={() => this.changeDeadline()} >
        Submit
        </button>
       </div>
      </div>
    )
  }
} 



export default App;