
import { Component } from "react";
import "./card-list.styles.css"
import Card from "../card/card.component"

class CardList extends Component {

  render() {
  
    const {monsters} = this.props;
  
    return (
      // inside a component, you must use ONE parent element, wrap everything inside it, will error otherwise.
      <div className="card-list">
        {monsters.map(monster => {
  
          return (
            <Card monster={monster}/>
          );
        })}
      </div>
    );
  } 
}

export default CardList;