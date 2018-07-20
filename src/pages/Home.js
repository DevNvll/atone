import React from 'react'
import styled from 'styled-components'
import {
  Card as CardBootstrap,
  CardImg,
  CardBody as CardBodyBootstrap,
  CardTitle,
  CardSubtitle
} from 'reactstrap'

import Dashboard from '../layouts/Dashboard'
import Card from '../components/Card'
import * as Box from '../components/Box'

const PhotoGrid = styled.div`
  line-height: 0;
  -webkit-column-count: 5;
  -webkit-column-gap: 0px;
  -moz-column-count: 5;
  -moz-column-gap: 0px;
  column-count: 5;
  column-gap: 0px;
  width: 100%;
  @media (max-width: 1200px) {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
  @media (max-width: 1000px) {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
  @media (max-width: 800px) {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
  @media (max-width: 400px) {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
`

function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

class PageHome extends React.Component {
  render() {
    return (
      <Dashboard>
        <div className="row">
          <div className="col-md-3">
            <Box.Container>
              <Box.Content>
                <div style={{ fontSize: '12px', fontWeight: 600 }}>USERS</div>
                <div style={{ fontSize: '20px', fontWeight: 600 }}>64,874</div>
                <Box.Icon className="fa fa-users" />
              </Box.Content>
            </Box.Container>
          </div>
          <div className="col-md-3">
            <Box.Container color="#963da5">
              <Box.Content>
                <div style={{ fontSize: '12px', fontWeight: 600 }}>USERS</div>
                <div style={{ fontSize: '20px', fontWeight: 600 }}>64,874</div>
                <Box.Icon className="fa fa-users" />
              </Box.Content>
            </Box.Container>
          </div>
          <div className="col-md-3">
            <Box.Container color="#293a56">
              <Box.Content>
                <div style={{ fontSize: '12px', fontWeight: 600 }}>USERS</div>
                <div style={{ fontSize: '20px', fontWeight: 600 }}>64,874</div>
                <Box.Icon className="fa fa-users" />
              </Box.Content>
            </Box.Container>
          </div>
          <div className="col-md-3">
            <Box.Container color="#424242">
              <Box.Content>
                <div style={{ fontSize: '12px', fontWeight: 600 }}>USERS</div>
                <div style={{ fontSize: '20px', fontWeight: 600 }}>64,874</div>
                <Box.Icon className="fa fa-phone" />
              </Box.Content>
            </Box.Container>
          </div>
        </div>
        <Card.Container>
          <Card.Header>
            <h4>Home</h4>
          </Card.Header>
          <Card.Body>
            <PhotoGrid>
              <div>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 10, 2, 3, 6, 5, 4, 1, 2, 0].map(
                  i => {
                    let height = getRandomSize(200, 600)
                    return (
                      <CardBootstrap
                        style={{
                          width: '280px',
                          margin: '0 20px 10px'
                        }}
                      >
                        <CardImg
                          top
                          width="280px"
                          src={`https://placekitten.com/300/${height}`}
                          alt="Card image cap"
                        />
                        <CardBodyBootstrap>
                          <CardTitle>Card title</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                        </CardBodyBootstrap>
                      </CardBootstrap>
                    )
                  }
                )}
              </div>
            </PhotoGrid>
          </Card.Body>
        </Card.Container>
      </Dashboard>
    )
  }
}

export default PageHome
