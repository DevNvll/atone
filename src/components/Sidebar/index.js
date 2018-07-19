import React from 'react'
import styled from 'styled-components'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Navitem from './NavItem'
import SidebarBottom from './SidebarBottom'
import { Link, withRouter } from 'react-router-dom'

const SidebarContainer = styled.div`
  z-index: 100;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  background-color: #272b2e;
  display: grid;
  position: sticky;
  top: 0;
  height: 100vh;
  width: 240px;
  box-sizing: border-box;
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
  max-height: 830px;
`

const SidebarTop = styled.div`
  padding: 0 10px 0;
  text-align: center;
  background-color: #1d2123;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 20px 0px;
`

const SubItem = styled.li`
  background-color: #1e2226;
  padding: 5px;
  list-style-type: none;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #171a1c;
  }
  ${props =>
    props.active &&
    `
    color: #fff !important;
    background-color: #6772e5;
    &:hover {
      color: #fff;
      background-color: #6772e5;
    }
  `} position: relative;
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;
  padding-left: 44px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: #93a3af;
  -webkit-transition-property: color, background;
  transition-property: color, background;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
`

const DropDownMenu = styled.ul`
  margin: 0;
  padding: 0;
`

class Sidebar extends React.Component {
  render() {
    return (
      <SidebarContainer>
        <SidebarTop>
          <h1>{this.props.title}</h1>
        </SidebarTop>
        <PerfectScrollbar>
          <div>
            <MenuList>
              {this.props.menu.map(m => {
                const isaSubItemsActive =
                  m.subitems &&
                  m.subitems
                    .map(i => i.to)
                    .filter(i => this.props.location.pathname.startsWith(i))
                    .length >= 1
                if (m.subitems)
                  return (
                    <Navitem
                      active={isaSubItemsActive}
                      text={m.text}
                      icon={m.icon}
                      multi
                    >
                      <DropDownMenu>
                        {m.subitems.map(s => (
                          <Link
                            to={s.to}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                          >
                            <SubItem
                              active={this.props.location.pathname.startsWith(
                                s.to
                              )}
                            >
                              {s.text}
                            </SubItem>
                          </Link>
                        ))}
                      </DropDownMenu>
                    </Navitem>
                  )
                return <Navitem text={m.text} to={m.to} icon={m.icon} />
              })}
            </MenuList>
          </div>
        </PerfectScrollbar>
        <SidebarBottom />
      </SidebarContainer>
    )
  }
}

export default withRouter(Sidebar)
