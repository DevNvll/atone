import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import PageHome from './pages/Home'
import PageAbout from './pages/About'
import PageForms from './pages/Forms'

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
      </Switch>
    )
  }
}

export default App
