import React from 'react'
import styled from 'styled-components'
import { Input as InputBootstrap } from 'reactstrap'

import Button from '../components/Button'
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
