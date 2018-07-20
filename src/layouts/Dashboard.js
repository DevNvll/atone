import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
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

const theme = {
  colors: {
    accent: '#6772e5',
    sidebar: {
      text: 'rgba(255, 255, 255, 0.85)',
      background: '#272b2e',
      navItemText: '#fff',
      navItemHoverBackground: '#212427',
      activeBackground: null, // null fallsback to accent color
      treeMenuBackground: '#1e2226',
      treeMenuItemBackgroundActive: null,
      treeMenuItemBackgroundHover: '#171a1c',
      treeMenuItemText: '#93a3af',
      treeMenuItemTextHover: '#fff'
    }
  }
}

class Dashboard extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Sidebar title="Atone" menu={menu} />
          <Content>
            <Header />
            <PageContent>{this.props.children}</PageContent>
          </Content>
        </Container>
      </ThemeProvider>
    )
  }
}

export default Dashboard
