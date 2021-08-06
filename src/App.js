import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Homepage from "./pages/Homepage";


  export default class App extends Component
  {
      constructor(props)
      {
          super(props)
          if(localStorage.getItem('currentUser') == undefined){localStorage.setItem('currentUser','null')}
      }

      render()
      {
          return(
              <Router>
                  <Switch>
                      <Route path="/login">
                          <Login />
                      </Route>
                      <AdminRoute  path="/admin">
                          <Admin />
                      </AdminRoute>
                      <ConnectedRoute path="/">
                          <Homepage />
                      </ConnectedRoute>
                  </Switch>
              </Router>
          )
      }
  }

  // check if the user is connected
function isConnected()
{
    return localStorage.getItem('currentUser') != 'null'
}

// check if the current user is admin
export function isAdmin()
{
    return isConnected() ? getUser().role == "ADMIN" : false
}

// To get the current user
export function getUser()
{
    return JSON.parse(localStorage.getItem('currentUser'))
}

// To disconnect the user
export function disconnect()
{
    localStorage.removeItem('currentUser')
    window.location.href = '/login'

}

// Route for Homepage, need to be connected
export function ConnectedRoute({children}) {
  let auth =  isConnected();
  return (
      <Route
          render={({ location }) =>
              auth ? (
                  children
              ) : (
                  <Redirect
                      to={{
                        pathname: "/login",
                        state: { from: location }
                      }}
                  />
              )
          }
      />
  );
}
// Route for Admin page, need to be connected and admin user

export function AdminRoute({ children, ...rest }) {
      let auth = isAdmin()
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}