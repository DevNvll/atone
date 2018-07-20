import React from 'react'
import styled from 'styled-components'
import { Collapse } from 'reactstrap'

const Container = styled.div`
  display: flex;
  -moz-box-align: center;
  cursor: pointer;
  align-items: center;
  -moz-box-pack: justify;
  justify-content: space-between;
  padding: 8px 16px;
  width: inherit;
  height: 56px;
  background-color: #1d2123;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 20px 0px;
`

const DropdownButton = styled.button`
  display: inline-flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
  position: relative;
  background-color: transparent;
  outline: currentcolor none medium;
  border: 0px none;
  margin: 0px 0px 0px 8px;
  cursor: pointer;
  -moz-user-select: none;
  vertical-align: middle;
  -moz-appearance: none;
  text-decoration: none;
  height: 24px;
  width: 24px;
  text-align: center;
  flex: 0 0 auto;
  padding: 0px;
  border-radius: 50%;
  color: #bebebe !important;
  &:focus {
    outline: 0;
  }
`

const Username = styled.span`
  display: inline-block;
  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-wrap: normal;
  margin-left: 12px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1;
  font-weight: 600;
  margin-bottom: 4px;
`

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500 !important;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`

const SubTitle = styled.span`
  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-wrap: normal;
  margin-left: 12px;
  line-height: 1;
  display: flex;
  flex-direction: row;
  -moz-box-align: center;
  align-items: center;
  font-size: 0.8em;
  color: ${props => props.theme.colors.accent};
`

const CollapseOption = styled(Collapse)`
  position: absolute;
  z-index: 3000;
  margin: 5px 10px 5px;
  color: #fafafa;
  background-color: #222;
  width: 90%;
  border-radius: 3px;
  -webkit-box-shadow: 0 2px 4px rgba(5, 15, 44, 0.1);
  box-shadow: 0 2px 4px rgba(5, 15, 44, 0.1);
`

const MenuItem = styled.div`
  padding: 10px 15px;
  border-radius: 3px;
  transition: ease all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #121212;
    color: #fff !important;
  }
`

class SidebarTop extends React.Component {
  state = {
    open: false
  }
  toggleOptions = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    return (
      <div>
        <Container onClick={() => this.toggleOptions()}>
          <div>
            <img
              alt="Henrick Mello"
              style={{ maxHeight: '25px', borderRadius: '5px' }}
              src="https://avatars0.githubusercontent.com/u/3536261?v=4"
              shape="round"
            />
          </div>
          <Info>
            <Username>Henrick Mello</Username>
            <InfoContent>
              <SubTitle>Module One</SubTitle>
            </InfoContent>
          </Info>
          <div>
            <DropdownButton type="button">
              <span>
                <svg
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  transform={this.state.open ? 'rotate(180)' : ''}
                >
                  <g>
                    <path d="M7 10l5 5 5-5z" fill="#fff" />
                  </g>
                </svg>
              </span>
            </DropdownButton>
          </div>
        </Container>
        <CollapseOption isOpen={this.state.open}>
          <MenuItem>Action 1</MenuItem>
          <MenuItem>Action 2</MenuItem>
          <MenuItem>Action 3</MenuItem>
        </CollapseOption>
      </div>
    )
  }
}

export default SidebarTop
