
import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

// here we replaced the function App() {}
//                              return () 
// with the following, everything wrapped also inside the render () method.
// this is a class compenent, instead of a functional component


class App extends Component {

  constructor() {
    // you gotta call super() when you call component
    super();
      // here's our object.
      this.state = {
        name: { firstName: "Gabriel", lastName: "Nathan" },
        company: "ZTM"
      };
  }


  render () { 
    return (
      <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, I am {this.state.name.firstName} {this.state.name.lastName}
            , I work at {this.state.company}
          </p>
          <button 

            // react lets us have event handlers like onClick
            // we run a function inside it by wrapping it with {}
            // then we can run the .set.state() method and pass in an object
            // that we want it to shallow merge with your current state object:
            // shall merge: whatever values you give me, i'll check if they have the same keys

            onClick={() => {
              // here we pass setState an object:
              // this.setState({ name: {firstName: "Andrei", lastName: "Naegioe"} });
              // console.log(this.state);

              // here we pass setState a function
              // this is the 'proper' way to write your setState code in class components
              // don't need 'state' and 'props' values this way.
              this.setState(() => {
                return { name: {firstName: "Andrei", lastName: "Naegioe"} }
              },
              // a callback function - "when you finish, please run this call back"
              // .. it runs after the above, making it much easier to predict what's going to happen.
              () => {
                console.log(this.state)
              });
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
 
}

export default App;
