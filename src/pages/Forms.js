import React from 'react'
import styled from 'styled-components'
import { Button as BootstrapButton, Input as InputBootstrap } from 'reactstrap'

import Dashboard from '../layouts/Dashboard'
import Card from '../components/Card'

const Input = styled(InputBootstrap)`
  border: 1px solid #d9e2eb !important;
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
`

const colors = {
  primary: '#5a3ffd',
  black: '#222',
  default: '#6b7c93',
  danger: '#fb4d3d'
}

const Button = styled(BootstrapButton)`
  color: ${props =>
    props.outline
      ? props.color && colors[props.color]
        ? colors[props.color]
        : '#5a3ffd'
      : '#fff'} !important;
  font-weight: 400 !important;
  background: ${props =>
    props.color && colors[props.color]
      ? (props.outline && '#fff') || colors[props.color]
      : (props.outline && '#fff') || '#5a3ffd'} !important;
  border: 1px solid
    ${props =>
      props.color && colors[props.color]
        ? colors[props.color]
        : '#5a3ffd'} !important;
  padding: 14px 31px 14px 31px !important;
  transition: color 300ms cubic-bezier(0.25, 0.8, 0.25, 1),
    background 300ms cubic-bezier(0.25, 0.8, 0.25, 1),
    border 300ms cubic-bezier(0.25, 0.8, 0.25, 1) !important;
  border-radius: 4px !important;
  font-size: 16px !important;
  letter-spacing: 1.25px !important;
  text-align: center !important;
  line-height: 16px !important;
  &:hover {
    background-color: ${props =>
      props.outline
        ? props.color && colors[props.color]
          ? colors[props.color]
          : '#5a3ffd'
        : '#fff'} !important;
    color: ${props =>
      props.color && colors[props.color]
        ? props.outline
          ? '#fff'
          : colors[props.color]
        : props.outline
          ? '#fff'
          : '#5a3ffd'} !important;
  }
  &:focus {
    background-color: #fff !important;
    color: ${props =>
      props.color && colors[props.color]
        ? colors[props.color]
        : '#5a3ffd'} !important;
    outline: none !important;
    box-shadow: none !important;
  }
  ${props => props.uppercase && 'text-transform: uppercase'};
`

class Forms extends React.Component {
  render() {
    return (
      <Dashboard>
        <div className="row">
          <div className="col-md-6">
            <Card.Container>
              <Card.Header>
                <h4>Forms</h4>
              </Card.Header>
              <Card.Body>
                <Input type="text" placeholder="Type something..." />
              </Card.Body>
            </Card.Container>
          </div>
          <div className="col-md-6">
            <Card.Container>
              <Card.Header>
                <h4>Buttons</h4>
              </Card.Header>
              <Card.Body>
                <Button color="primary">Primary</Button>{' '}
                <Button color="black">Black</Button>{' '}
                <Button color="default">Default</Button>{' '}
                <Button color="danger">Danger</Button> <br />
                <br />
                <Button outline>Primary</Button>{' '}
                <Button color="black" outline>
                  Black
                </Button>{' '}
                <Button color="default" outline>
                  Default
                </Button>{' '}
                <Button color="danger" outline>
                  Danger
                </Button>
              </Card.Body>
            </Card.Container>
          </div>
        </div>
      </Dashboard>
    )
  }
}

export default Forms
