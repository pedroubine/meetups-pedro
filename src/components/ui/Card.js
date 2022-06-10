import classes from "./Card.module.css";
function Card(prop) {
  return <div className={classes.card}> {prop.children} </div>;
}

export default Card;
