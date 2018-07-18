import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import Sidebar from './components/Sidebar'
import Loading from './components/PageLoading'
import Header from './components/Header'

import PageHome from './pages/Home'
import PageAbout from './pages/About'
import PageForms from './pages/Forms'

const Container = styled.div`
  background-color: rgb(246, 250, 255);
  width: 100%;
  min-height: 500px;
  height: 100vh;
  display: grid;
  grid-template-columns: 240px 1fr;
`

const Content = styled.div`
  height: inherit;
  min-height: inherit;
  overflow: auto;
  padding: 0 20px 20px;
`

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
      <Container>
        <Sidebar title="Atone" />
        <div>
          <Loading loading={this.state.loading} />
          <Header />
          <Content>
            <Switch>
              <Route exact path="/" component={PageHome} />
              <Route exact path="/about" component={PageAbout} />
              <Route exact path="/forms" component={PageForms} />
            </Switch>
          </Content>
        </div>
      </Container>
    )
  }
}

export default App
