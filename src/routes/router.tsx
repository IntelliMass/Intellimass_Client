import { Switch, Route } from "react-router-dom";
import NavBar from "../components/nav-bar/NavBar"

// ROUTES
import ScreenHome from "../screens/ScreenHome";
import ScreenNetwork from "../screens/ScreenNetwork";
import ScreenArticles from "../screens/ScreenArticles";

// EXCEPTIONS
import ScreenError404 from "../screens/ScreenError404";
import ScreenError401 from "../screens/ScreenError401";
import ScreenError500 from "../screens/ScreenError500";
import ScreenIndex from "../screens/ScreenIndex";
import {ScreenQuery} from "../screens/ScreenQuery";
import {ScreenArticleDetail} from "../screens/ScreenArticleDetails";


function RouterApplication() {

  return (
    <div className="app-container">
     <NavBar/>
      <Switch>
        <Route path="/" exact>
          <ScreenIndex />
        </Route>

        <Route path="/home" >
          <ScreenHome />
        </Route>

        <Route path="/query">
          <ScreenQuery />
        </Route>

        <Route path="/articles" >
          <ScreenArticles />
        </Route>

        <Route path="/network" >
          <ScreenNetwork />
        </Route>

        <Route path="/article">
          <ScreenArticleDetail  />
        </Route>

        <Route path="/unauthorized">
          <ScreenError401 />
        </Route>

        <Route path="/server">
          <ScreenError500 />
        </Route>

        <Route path="/*">
          <ScreenError404 />
        </Route>
      </Switch>
    </div>
  );
}

export default RouterApplication;
