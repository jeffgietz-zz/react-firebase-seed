// index.js
import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'

import Home from './home'
import Login from './login'
import Register from './register'
import Dashboard from './dashboard'
import { logout } from '../helpers/auth'
import { firebaseAuth } from '../config/constants'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
    />
  )
}

export default class App extends Component {
  state = {
  	authed: false,
  	loading: true,
  }
  componentDidMount () {
  	this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
  		if (user) {
  			this.setState({
  				authed: true,
  				loading: false,
  			})
  		} else {
  			this.setState({
  				loading: false
  			})
  		}
  	})
  }
  componentWillUnmount () {
  	this.removeListener()
  }
  render() {
    // If statement for loading or not
    return this.state.loading === true ? <h1>Loading</h1> : (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <div className="container-fluid">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li> 
                {this.state.authed
                  ? 
                      <button
                        // style={{border: 'none', background: 'transparent'}}
                        className="btn btn-outline"
                        type="button"
                        onClick={() => {
                          logout()
                          this.setState({authed: false})
                        }}
                        >Logout</button>
                    
                  : <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>

                  }
                  {this.state.authed ? '':
                    <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
                  }
              </ul>
            </div>
          </nav>
          <div>
            <Switch>
            	<Route path='/' exact component={Home} />
              <PublicRoute authed={this.state.authed} path='/login' component={Login} />
              <PublicRoute authed={this.state.authed} path='/register' component={Register} />
              <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} />
              <Route render={() => <h2>404</h2>} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}


