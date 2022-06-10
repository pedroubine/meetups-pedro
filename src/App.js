import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorite";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup" exact={true}>
          <NewMeetupsPage />
        </Route>
        <Route path="/favorites" exact={true}>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
