// this file is not isolated i.e. it still applies to the entire appliation.
import "./search-box.styles.css"

// destructuring once again, so convert into a functional component
const SearchBox = ({className, placeholder, onChangeHandler}) => (
    <input
    // these props are ultimately defined inside the render of App.js
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    // onChange is an anonymous function, meaning that when JS finds it, it will create the function for you
    // after this, it gets thrown away... so we've moved it into the component block!
    // it has to be this.onSearchChange because the method is attached to our class now.
    onChange={onChangeHandler}
  />
)

export default SearchBox;