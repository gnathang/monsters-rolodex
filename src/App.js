
import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {

  // setting intial state values.. useState isn't an obejct anymore - it's whatever value you set it to in the string
  const [searchField, setSearchField] = useState(""); // [value we want to store, and the setter value]
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState (monsters);

  // whenever any of the values in the second argument (dependency array)change, run the first argument (the callback function)
  // we pass the dependcy array NOTHING, because we only want fetch to happen once - when App component first mounts. 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json()) 
    .then ((users) => setMonsters(users)); 
  }, []);

  // we've moved filteredMonsters() to a useEffect hook. This is so it only gets fired when it
  // is relevant for it to do so (ie. when (monsters) changes or searchField changes (second array arg.)
  useEffect (() => {
    const newFilteredMonsters = monsters.filter((monster)=> {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]
  );
  
  const onSearchChange = (event) => { 
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox 
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search-monsters"
      />

      <CardList monsters={filteredMonsters}/>
    </div>
  )
}


// class App extends Component {

//   constructor() { 
//     super();
//       this.state = {
//         monsters: [],
//         searchField: ''
//       };
//   }

//   componentDidMount() { // lifecycle method
//     // fetch returns a promise, then() (asyncronous), which says "eventually I'll have a value"
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json()) // this is what is returned from .then, gets passed to (users)
//     .then ((users) => 
//       this.setState(
//         () => {
//         return {monsters: users}
//         }
//       )
//     );
//   } 

//   // we've moved this method from our input element's onChange.
//   // this ups performance - react doesn't just call an anonymous function everytime it renders
//   onSearchChange = (event) => { 
//     const searchField = event.target.value.toLocaleLowerCase();  // event target value gives us the string that is in the searchbar so far
//     this.setState(
//       () => {
//         return { searchField };
//       }
//     );
//   }

  
//   render() { // every time needs to update the DOM, react runs this render() method.
//     // destructuring from 'this.state' and 'this' and cast them to variables.
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster)=> {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
      
//     return ( 
//       <div className="App">

//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox 
//           className="search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//           />
//         <CardList monsters={filteredMonsters}/>

//       </div>
//     );
//   }

// } 

export default App;
