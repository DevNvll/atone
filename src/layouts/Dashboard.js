import React, { Component } from 'react'
import styled from 'styled-components'

import Sidebar from '../components/Sidebar'
import Loading from '../components/PageLoading'
import Header from '../components/Header'

const Container = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  background-color: #f8faff;
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

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Sidebar title="Atone" menu={menu} />
        <Content>
          <Header />
          <PageContent>{this.props.children}</PageContent>
        </Content>
      </Container>
    )
  }
}

export default Dashboard
