import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import PageHome from './pages/Home'
import PageAbout from './pages/About'
import PageForms from './pages/Forms'
import PageUsers from './pages/Users'

class App extends Component {
  state = {
    loading: true
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 1000)
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/about" component={PageAbout} />
        <Route exact path="/forms" component={PageForms} />
        <Route exact path="/config/users" component={PageUsers} />
      </Switch>
    )
  }
}

export default App
