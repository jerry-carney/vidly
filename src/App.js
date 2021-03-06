import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Profile from "./components/profile";
import FizzBuzz from "./components/fizzBuzz";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import AboutWebsite from "./components/aboutWebsite";
import auth from "./services/authService";
import ProtectedRoute from "./components/common/protectedRoute";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={props => <Movies {...props} user={user} />}
            />
            <Route path="/profile" component={Profile} />
            <Route path="/enjoy" component={FizzBuzz} />
            <Route path="/about" component={AboutWebsite} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

/*
render() {
  return (
    <React.Fragment>
      <main className="container">
        <h1>Hello Vidly</h1>
      </main>
    </React.Fragment>
  );
}
*/

// <Route path="/products/:id" component={ProductDetails} />
// <Route
//   path="/products"
//   render={props => <Products sortBy="newest" {...props} />}
// />
// <Route path="/posts/:year?/:month?" component={Posts} />
// <Route path="/admin" component={Dashboard} />
// <Redirect from="/messages" to="/posts" />
