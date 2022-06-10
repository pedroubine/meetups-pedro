import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorite-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  console.log(favoritesCtx);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">NewMeetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorite <span className={classes.badge}>{favoritesCtx.totalFavorities}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
