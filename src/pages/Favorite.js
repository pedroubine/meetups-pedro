
import {useContext} from 'react';

import FavoritesContext from '../store/favorite-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
  const favoriteCtx = useContext(FavoritesContext);

  let content;
  
  if (favoriteCtx.totalFavorities === 0){
    content = <p>You got no favorite.</p>
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} /> 
  }
  return <section>
    <h1>My favorite</h1>
    {content}
  </section>
}

export default FavoritesPage;
