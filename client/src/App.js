import React from 'react';
import logo from './logo.svg';
import './App.css';

import GetData from './Components/GetData'


class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {};
}

componentDidMount() {
 //setInitial State
  this.setState({url: 'http://localhost:5000/api/players'})
}

render() {
  return (
  <GetData url={this.state.url}/>)
}

}


export default App;
