import React, { Component } from 'react';
import './App.css';
import HeroesForm from '../Heroes/HeroesForm';
import HeroesList from '../Heroes/Heroslist';

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
      title : "Tour of GIT Heroes",
      heroes: HEROES,
      selectedHero: {
        name:"",
        id: undefined
      }
    };
    this.handleSelectHero = this.handleSelectHero.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleSelectHero(hero){
   const heroIndex = this.state.heroes.map(o => o.id).indexOf(hero.id);
   this.setState({
     selectedHero:{
       ...hero,
       index: heroIndex
   }
   });
  }

  handleOnChange(event){
    this.setState({
      selectedHero: {
        ...this.state.selectedHero,
        name: event.target.value
      }
    })
  }

  handleOnSubmit(event) {
    this.setState({
        heroes: [
          ...this.state.heroes.slice(0, this.state.selectedHero.index),
          {...this.state.selectedHero},
        ...this.state.heroes.slice(
           this.state.selectedHero.index + 1,
           this.state.heroes.length  )

        ],
      
    });
    event.preventDefault();
  }

  render(){
    return (
     <div>
       <h1>{this.state.title}</h1>
       <HeroesList
         heroes={this.state.heroes}
         selectedHero={this.state.selectedHero}
         onHeroClick={this.handleSelectHero}
         />
       <div>
        <h2>{this.state.selectedHero.name} Details!!!!</h2>
        <HeroesForm
          selectedHero={this.state.selectedHero}
          handleOnChange={() => this.handleOnChange}
          handleOnSubmit={() => this.handleOnSubmit} />
    </div>
    </div>
    );
  }
}

export default App;
