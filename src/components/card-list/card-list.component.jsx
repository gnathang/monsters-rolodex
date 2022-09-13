// no class imports when using functional components
import "./card-list.styles.css"
import Card from "../card/card.component"

// we change this to an implicit return and use {monsters} as the prop
const CardList = ({ monsters }) => (
    // inside a component, you must use ONE parent element, wrap everything inside it, will error otherwise.
    <div className="card-list">
      {monsters.map(monster => {
        return (
          <Card monster={monster}/>
        );
      })}
    </div>
  );

export default CardList; 