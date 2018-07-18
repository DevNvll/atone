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
  display: grid;
  grid-template-columns: 240px 1fr;
  background-color: #fff;
  height: 100vh;
`

const Content = styled.div`
  height: inherit;
  min-height: inherit;
  overflow: auto;
`

const PageContent = styled.div`
  padding: 25px;
`

const menu = [
  {
    text: 'Home',
    to: '/',
    icon: 'fa fa-home'
  },
  {
    text: 'Forms',
    to: '/forms',
    icon: 'fa fa-edit'
  },
  {
    text: 'About',
    to: '/about',
    icon: 'fa fa-users'
  },
  {
    text: 'Configuration',
    icon: 'fa fa-edit',
    subitems: [
      {
        text: 'Users',
        to: '/config/users'
      },
      {
        text: 'System',
        to: '/config/system'
      }
    ]
  }
]
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
        <Sidebar title="Atone" menu={menu} />

        <Content id="page-wrap">
          <Header />
          <PageContent>
            <Switch>
              <Route exact path="/" component={PageHome} />
              <Route exact path="/about" component={PageAbout} />
              <Route exact path="/forms" component={PageForms} />
            </Switch>
          </PageContent>
        </Content>
      </Container>
    )
  }
}

export default App
