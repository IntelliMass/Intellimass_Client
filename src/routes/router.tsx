import { Switch, Route } from "react-router-dom";
import Header from "../layout/header";
import Menu from "../layout/menu";
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
import {ScreenQuestions} from "../screens/ScreenQuestions";


function RouterApplication() {

  return (
    <>
     <NavBar/>
     {/*<Menu/>*/}
      <Switch>
        <Route path="/" exact>
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

        <Route path="/questions">
          <ScreenQuestions />
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
    </>
  );
}

export default RouterApplication;
