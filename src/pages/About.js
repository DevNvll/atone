import React, { Component } from 'react'
import Dashboard from '../layouts/Dashboard'
import Card from '../components/Card'

class About extends Component {
  render() {
    return (
      <Dashboard>
        <Card.Container>
          <Card.Header>
            <h4>About</h4>
          </Card.Header>
          <Card.Body>
            <div>aaaaaaaaaaa</div>
          </Card.Body>
        </Card.Container>
      </Dashboard>
    )
  }
}

export default About
