import React from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from 'reactstrap'
import styled from 'styled-components'

const SidebarBottomStyle = styled.div`
  display: flex;
  -moz-box-pack: justify;
  -moz-box-align: center;
  align-items: center;
  border-top: 1px solid #31363a;
  padding-right: 16px;
  padding-left: 16px;
  justify-content: space-between;
`

const DropdownBtn = styled(DropdownToggle)`
  border: 0 !important;
  &:hover {
    background-color: transparent !important;
    outline: 0 !important;
  }
  &:focus {
    outline: none !important;
    box-shadow: none !important;
    color: #fff;
  }
`

class SidebarBottom extends React.Component {
  state = {
    dropdownOpen: false
  }
  render() {
    return (
      <SidebarBottomStyle>
        <div>
          <img
            alt="Henrick Mello"
            style={{ maxHeight: '25px', borderRadius: '5px' }}
            src="https://avatars0.githubusercontent.com/u/3536261?v=4"
            shape="round"
          />
        </div>
        <div>Henrick Mello</div>
        <Dropdown
          direction="up"
          isOpen={this.state.dropdownOpen}
          toggle={() => {
            this.setState({ dropdownOpen: !this.state.dropdownOpen })
          }}
        >
          <DropdownBtn className="btn btn-sm" outline>
            <i className="fa fa-ellipsis-v " />
          </DropdownBtn>
          <DropdownMenu>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </SidebarBottomStyle>
    )
  }
}

export default SidebarBottom
