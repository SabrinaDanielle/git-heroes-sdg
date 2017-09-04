import React, { Component } from 'react';
import './App.css';
import HeroesList from "../Heroes/HeroesList";
import HeroesForm from "../Heroes/HeroesForm";

import {getHeroes, getHeroesSlowly} from "../../services/heroes.service";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title : "Tour of GIT Heroes",
      heroes: [],
      selectedHero: {
        name:"",
        id: undefined
      }
    };
    this.handleSelectHero = this.handleSelectHero.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  ComponentWillMount(){
    getHeroes.catch(getHeroesSlowly).then(payload => {
      this.setState({
        heroes: payload
      });

    });
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
    const slHero = this.state.selectedHero;
    const heroes = this.state.heroes;
    this.setState({
        heroes: [
          ...heroes.slice(0, this.state.selectedHero.index),
          {...slHero},
        ...heroes.slice(slHero.index + 1, heroes.length )
        ]
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
        <h2>{this.state.selectedHero.name}</h2>
        <HeroesForm
         selectedHero={this.state.selectedHero}
         handleOnChange={() => this.handleOnChange}
         handleOnSubmit={() => this.handleOnSubmit} />
      </div>
    );
  }
}


export default App;
