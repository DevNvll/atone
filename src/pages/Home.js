import React from 'react'
import styled from 'styled-components'
import {
  Card as CardBootstrap,
  CardImg,
  CardText,
  CardBody as CardBodyBootstrap,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'

import { Card, CardBody, CardHeader } from '../components/Card'

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
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
  }
  @media (max-width: 1000px) {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
  @media (max-width: 800px) {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
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
      <Card>
        <CardHeader>
          <h4>Home</h4>
        </CardHeader>
        <CardBody>
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
        </CardBody>
      </Card>
    )
  }
}

export default PageHome
