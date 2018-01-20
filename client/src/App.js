import React, { Component } from 'react'
import {
  BrowserRouter as
    Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import styled from 'styled-components'
import IdeaPage from './components/IdeaPage'


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
              <Route exact path = "/" render = {HomePage}/>
              <Route exact path = "/login" render= {LogInPage}/>
              <Route exact path = "/user/:userId" render={IdeaPage}/>
            </div>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App