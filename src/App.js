import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListUser from "./components/ListUser";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent></HeaderComponent>

        <div className="container">
          <Switch>
            <Route path="/" exact component={ListUser}></Route>
            <Route path="/users" component={ListUser}></Route>
            <Route path="/add-user/:id" component={CreateUser}></Route>
            {/* <Route path="/update-user/:id" component={UpdateUser}></Route> */}
          </Switch>
        </div>

        <FooterComponent></FooterComponent>
      </Router>
    </div>
  );
}

export default App;
