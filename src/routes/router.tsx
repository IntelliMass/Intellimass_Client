import { Switch, Route } from "react-router-dom";
import NavBar from "../components/nav-bar/NavBar"

// ROUTES
import ScreenHome from "../screens/ScreenHome";
import ScreenSearch from "../screens/ScreenSearch";
import ScreenProfile from "../screens/ScreenProfile";

// EXCEPTIONS
import ScreenError404 from "../screens/ScreenError404";
import ScreenError401 from "../screens/ScreenError401";
import ScreenError500 from "../screens/ScreenError500";
import ScreenResearches from "../screens/ScreenResearches";
import {ScreenQuery} from "../screens/ScreenQuery";
import {ScreenArticleDetail} from "../screens/ScreenArticleDetails";


function RouterApplication() {

  return (
    <div className="app-container">
     <NavBar/>
      <Switch>
        <Route path="/" exact>
          <ScreenQuery />
        </Route>

        <Route path="/articles" >
          <ScreenHome />
        </Route>

        <Route path="/search">
          <ScreenSearch />
        </Route>

        <Route path="/profile">
          <ScreenProfile />
        </Route>

        <Route path="/researches">
          <ScreenResearches />
        </Route>

        <Route path="/unauthorized">
          <ScreenError401 />
        </Route>

        <Route path="/server">
          <ScreenError500 />
        </Route>

        <Route path="/article">
          <ScreenArticleDetail  />
        </Route>

        <Route path="/*">
          <ScreenError404 />
        </Route>
      </Switch>
    </div>
  );
}

export default RouterApplication;
