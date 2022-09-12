import { Component } from "react";

// this file is not isolated i.e. it still applies to the entire appliation.
import "./search-box.styles.css"

class SearchBox extends Component {
  
  render() {
    return (
      <input
      // these props are ultimately defined inside the render of App.js
      className={`search-box ${this.props.className}`}
      type="search"
      placeholder={this.props.placeholder}
      // onChange is an anonymous function, meaning that when JS finds it, it will create the function for you
      // after this, it gets thrown away... so we've moved it into the component block!
      // it has to be this.onSearchChange because the method is attached to our class now.
      onChange={this.props.onChangeHandler}
    />
    )
  }
}

export default SearchBox;