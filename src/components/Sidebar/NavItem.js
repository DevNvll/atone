import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Collapse } from 'reactstrap'

const MenuItem = styled.li`
  color: ${props => props.theme.colors.sidebar.navItemText};
  opacity: 0.8;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  border-left: 5px solid transparent;
  transition: all ease 0.2s;
  &:hover {
    background-color: ${props =>
      props.theme.colors.sidebar.navItemHoverBackground};
    opacity: 1;
  }
  ${props =>
    !props.multi &&
    props.active &&
    `
    background-color: ${props.theme.colors.sidebar.activeBackground ||
      props.theme.colors.accent} !important
  `};
  ${props =>
    props.active
      ? `background-color: inherit;
  color: rgb(255, 255, 255);
  opacity: 1;`
      : ``};
  ${props =>
    props.open
      ? `background-color: inherit;
      color: rgb(255, 255, 255);
      opacity: 1;
      `
      : ``};
`
const MenuIcon = styled.i`
  ${props =>
    props.active &&
    props.multi &&
    `
      color: ${props.theme.colors.accent} !important;
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
            multi
          >
            <div style={{ padding: '0px', margin: '0px' }}>
              <MenuIcon
                className={icon}
                active={active}
                style={{ padding: '0 0px 5px 0', margin: '0', width: '30px' }}
                multi
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
