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
  background-color: #171a1c;
  padding: 5px;
  list-style-type: none;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
  ${props => props.active && 'color: #fff'};
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
                      <React.Fragment>
                        {m.subitems.map(s => (
                          <Link
                            to={s.to}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                          >
                            <SubItem
                              style={{ marginRight: '15px' }}
                              active={this.props.location.pathname.startsWith(
                                s.to
                              )}
                            >
                              <i
                                className="fa fa-angle-right "
                                style={{
                                  fontSize: '11px',
                                  paddingRight: '5px'
                                }}
                              />
                              {s.text}
                            </SubItem>
                          </Link>
                        ))}
                      </React.Fragment>
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
