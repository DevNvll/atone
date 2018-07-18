import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Collapse } from 'reactstrap'

const MenuItem = styled.li`
  color: rgb(255, 255, 255);
  padding: 10px;
  margin: 0;
  cursor: pointer;
  border-left: 5px solid transparent;
  &:hover {
    background-color: #31363a;
  }
  ${props =>
    props.active || props.open
      ? `background-color: #3b4247;
  color: rgb(255, 255, 255);
  border-color: #6772e5;
  &:hover {
    background-color: #3b4247;
  }`
      : ``};
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
      <div>
        {(!multi && (
          <Link style={{ textDecoration: 'none', color: '#fff' }} to={to}>
            <MenuItem active={location.pathname === to}>
              <div style={{ padding: '0px', margin: '0px' }}>
                <i
                  className={icon}
                  style={{ padding: '0 0px 5px 0', margin: '0', width: '30px' }}
                />
                {text}
              </div>
            </MenuItem>
          </Link>
        )) || (
          <MenuItem
            active={location.pathname === to || active}
            onClick={this.toggle}
            open={this.state.open || active}
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
          <ul style={{ margin: 0, padding: 0, marginLeft: '5px' }}>
            {this.props.children}
          </ul>
        </Collapse>
      </div>
    )
  }
}

export default withRouter(NavItem)
