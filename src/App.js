import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {
  Footer,
  Home,
  Navbar,
  EmptyProduct,
  Product,
  Form,
} from "./component/";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Router path="/product">
            <Product />
          </Router>
          <Route path="/empty">
            <EmptyProduct />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
