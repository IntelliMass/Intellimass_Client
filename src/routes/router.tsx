import { Switch, Route } from "react-router-dom";
import Header from "../layout/header";
import Menu from "../layout/menu";

// ROUTES
import ScreenHome from "../screens/screen.home";
import ScreenSearch from "../screens/screen.search";
import ScreenProfile from "../screens/screen.profile";

// EXCEPTIONS
import Screen404 from "../screens/screen.404";
import Screen401 from "../screens/screen.401";
import Screen500 from "../screens/screen.500";


function RouterApplication() {

  return (
    <>
     <Header/>
     <Menu/>
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

        <Route path="/unauthorized">
          <Screen401 />
        </Route>

        <Route path="/server">
          <Screen500 />
        </Route>

        <Route path="/*">
          <Screen404 />
        </Route>
      </Switch>
    </>
  );
}

export default RouterApplication;
