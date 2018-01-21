import React, { Component } from 'react'
import {
  BrowserRouter as
  Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import styled from 'styled-components'
import IdeaView from './components/IdeaView'
import Homepage from './components/Homepage'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          <Switch>
            <div>
              <Route exact path = "/" component = {Homepage}/>
              <Route exact path = "/login" component= {Login}/>
              <Route exact path = "/user/:userId" component={IdeaView}/>
            </div>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App