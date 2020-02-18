import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import NodesList from "./components/nodes-list.component";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container" style={{maxWidth: '1500px'}}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" target="_blank">
              <img src={logo} width="30" height="30" />
            </a>
            <Link to="/" className="navbar-brand">alvin</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Nodes</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Queries</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Packs</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Ad-hoc</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Groups</Link>
                </li>
				<li className="navbar-item">
                  <Link to="/create" className="nav-link">Manage</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={NodesList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;