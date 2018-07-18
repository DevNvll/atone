import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

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
    props.active
      ? `background-color: #3b4247;
  color: rgb(255, 255, 255);
  border-color: #6772e5;
  &:hover {
    background-color: #3b4247;
  }`
      : ``};
`

const NavItem = ({ text, to, icon, location }) => {
  return (
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
  )
}

export default withRouter(NavItem)
