
import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() { 
    super();
      this.state = {
        monsters: [],
        searchField: ''
      };
  }

  componentDidMount() { // lifecycle method
    // fetch returns a promise, then() (asyncronous), which says "eventually I'll have a value"
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json()) // this is what is returned from .then, gets passed to (users)
    .then ((users) => 
      this.setState(
        () => {
        return {monsters: users}
        }
      )
    );
  } 

  // we've moved this method from our input element's onChange.
  // this ups performance - react doesn't just call an anonymous function everytime it renders
  onSearchChange = (event) => { 
    const searchField = event.target.value.toLocaleLowerCase();  // event target value gives us the string that is in the searchbar so far
    this.setState(
      () => {
        return { searchField };
      }
    );
  }

  
  render() { // every time needs to update the DOM, react runs this render() method.
    // destructuring from 'this.state' and 'this' and cast them to variables.
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster)=> {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
      
    return ( 
      <div className="App">

        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox 
          className="search-box"
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          />
        <CardList monsters={filteredMonsters}/>

      </div>
    );
  }

} 

export default App;
