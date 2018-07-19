import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: white;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  border: none;
  -webkit-box-shadow: 0 2px 4px rgba(5, 15, 44, 0.1);
  box-shadow: 0 2px 4px rgba(5, 15, 44, 0.1);
  margin-bottom: 20px;
`
export const CardBody = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
`

export const CardHeader = styled.div`
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  background-color: rgba(247, 247, 255, 0.2);
  border-bottom: 1px solid #f7f7ff;
  overflow: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
`
export default {
  Container: CardContainer,
  Header: CardHeader,
  Body: CardBody
}
