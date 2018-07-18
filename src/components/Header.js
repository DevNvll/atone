import React from 'react'
import styled from 'styled-components'
import { Button as BootstrapButton, Input as InputBootstrap } from 'reactstrap'

const Input = styled(InputBootstrap)`
  background: #fff !important;
  color: #22314e !important;
  border-radius: 4px !important;
  font-size: 16px !important;
  padding: 10px 15px 10px 15px !important;
  ${props => props.fluid && 'width: 100% !important;'};
  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
  border: 0 !important;
`

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  color: #676767;
  background-color: #fff;
  font-size: 15px;
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 56px;
  margin-bottom: 1.7rem;
  padding: 0 5px;
  border-bottom: 1px solid #f1f1f1;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.03);
  top: 0;
`

const HeaderControls = styled.div`
  padding: 0 5px;
  height: 100%;
  min-width: 1000px;
`

const Controls = styled.div`
  position: relative;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  float: ${props => (props.right ? 'right' : 'left')};
  line-height: 56px;
  margin-right: 20px;
`

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderControls>
        <Controls>
          <Input
            type="text"
            style={{ margin: '5px' }}
            placeholder="Search..."
          />
        </Controls>
        <Controls right>
          <div>
            <a href="#" style={{ color: '#676767' }}>
              Logout
            </a>
          </div>
        </Controls>
      </HeaderControls>
    </HeaderContainer>
  )
}

export default Header
