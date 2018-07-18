import React from 'react'
import styled from 'styled-components'

import Navitem from './NavItem'
import SidebarBottom from './SidebarBottom'

const SidebarContainer = styled.div`
  z-index: 100;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  background-color: #272b2e;
  display: grid;
  grid-template-rows: 56px 1fr 56px;
  -webkit-box-shadow: 5px 15px 35px rgba(50, 50, 93, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.07);
  box-shadow: 5px 15px 35px rgba(50, 50, 93, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.07);
`

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: 10px;
`

const SidebarTop = styled.div`
  padding: 0 10px 0;
  text-align: center;
  background-color: #1d2123;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 20px 0px;
`

class Sidebar extends React.Component {
  render() {
    return (
      <SidebarContainer>
        <SidebarTop>
          <h1>{this.props.title}</h1>
        </SidebarTop>
        <div>
          <MenuList>
            <Navitem text="Home" to="/" icon="fa fa-home" />
            <Navitem text="Forms" to="/forms" icon="fa fa-edit" />
            <Navitem text="About" to="/about" icon="fa fa-user" />
          </MenuList>
        </div>
        <SidebarBottom />
      </SidebarContainer>
    )
  }
}

export default Sidebar
