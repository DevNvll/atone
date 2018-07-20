import React from 'react'
import styled from 'styled-components'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Navitem from './NavItem'
import SidebarTop from './SidebarTop'
import SidebarBottom from './SidebarBottom'
import TreeMenuItem from './TreeMenuItem'
import { Link, withRouter } from 'react-router-dom'

const SidebarContainer = styled.div`
  z-index: 100;
  color: ${props => props.theme.colors.sidebar.text};
  font-weight: 500;
  background-color: ${props => props.theme.colors.sidebar.background};
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

const DropDownMenu = styled.ul`
  background-color: ${props => props.theme.colors.sidebar.treeMenuBackground};
  margin: 0;
  padding: 0;
`

class Sidebar extends React.Component {
  render() {
    return (
      <SidebarContainer open={this.props.open}>
        <SidebarTop />
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
                            <TreeMenuItem
                              active={this.props.location.pathname.startsWith(
                                s.to
                              )}
                            >
                              {s.text}
                            </TreeMenuItem>
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
