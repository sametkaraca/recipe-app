import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'

const API_KEY="c7d1efee67938d5f0426d9c9230291d1"

class App extends Component {
  
  state = {
    recipes: []
  }

  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault()

    const API_CALL = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken?count=5`) 
    const DATA = await API_CALL.json()
    
    this.setState({
      recipes: DATA.recipes
    })

    console.log(this.state.recipes)

  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />        
      </div>
    );
  }
}

export default App;