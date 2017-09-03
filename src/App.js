import React, { Component } from 'react';
import './App.css';

const HEROES = [
  { id: 11, name: "Mr. Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" },
  { id: 18, name: "Dr IQ" },
  { id: 19, name: "Magma" },
  { id: 20, name: "Tornado" }
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title = "Tour of GIT Heroes",
      heroes: HEROES,

    }
  }
  render() {
    return (
     <div>HELLO</div>
    );
  }
}

export default App;
