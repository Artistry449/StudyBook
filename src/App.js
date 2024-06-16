import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./global.css"
import Home from "./components/Home";
import MyBooks from "./components/MyBooks";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/mybooks">
              <MyBooks />
            </Route>
            <Route path="/profile">
              <Home />
            </Route>
            <Route path="/exam">
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;