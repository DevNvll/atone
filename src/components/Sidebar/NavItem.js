import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Collapse } from 'reactstrap'

const MenuItem = styled.li`
  color: rgba(255, 255, 255);
  opacity: 0.8;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  border-left: 5px solid transparent;
  transition: all ease 0.2s;
  &:hover {
    background-color: #212427;
    opacity: 1;
  }
  ${props =>
    props.active
      ? `background-color: #3b4247;
  color: rgb(255, 255, 255);
  opacity: 1;
  border-color: #6772e5;
  &:hover {
    background-color: #3b4247;
  }`
      : ``};
  ${props =>
    props.open
      ? `background-color: inherit;
      color: rgb(255, 255, 255);
      &:hover {
        background-color: #3b4247;
      }`
      : ``};
`
const MenuIcon = styled.i`
  ${props =>
    props.active &&
    `
      color: #6772e5 !important;
    `};
`

class NavItem extends React.Component {
  state = { open: false }
  toggle = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    const { text, to, icon, location, multi, active } = this.props
    return (
      <React.Fragment>
        {(!multi && (
          <Link style={{ textDecoration: 'none' }} to={to}>
            <MenuItem active={location.pathname === to}>
              <div style={{ padding: '0px', margin: '0px' }}>
                <MenuIcon
                  className={icon}
                  active={location.pathname === to}
                  style={{ padding: '0 0px 5px 0', margin: '0', width: '30px' }}
                />
                {text}
              </div>
            </MenuItem>
          </Link>
        )) || (
          <MenuItem
            open={location.pathname === to || active}
            onClick={this.toggle}
          >
            <div style={{ padding: '0px', margin: '0px' }}>
              <i
                className={icon}
                style={{ padding: '0 0px 5px 0', margin: '0', width: '30px' }}
              />
              {text}
              <span style={{ float: 'right', paddingRight: '10px' }}>
                <i
                  className={
                    this.state.open || active
                      ? 'fa fa-angle-down'
                      : 'fa fa-angle-right'
                  }
                  style={{ fontSize: '11px' }}
                />
              </span>
            </div>
          </MenuItem>
        )}

        <Collapse
          isOpen={this.state.open || active}
          style={{ backgroundColor: '#171a1c' }}
        >
          <ul style={{ margin: 0, padding: 0 }}>{this.props.children}</ul>
        </Collapse>
      </React.Fragment>
    )
  }
}

export default withRouter(NavItem)
