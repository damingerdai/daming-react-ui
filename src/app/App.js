import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Login from "./components/login/login";

import "./App.scss";

export { store } from "./redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
  },
}));

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            大明
          </Typography>
          <Link to="/">
            <Button variant="contained" color="primary" disableElevation>
            Home
            </Button>
          </Link>
          <div className="flex-spacer"></div>
          <Link to="/login">
            <Button variant="contained" color="primary" disableElevation>
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <main className="content">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};
