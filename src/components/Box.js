import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
  border-radius: 2px;
  z-index: 1;
  color: #fff;
  ${props =>
    props.color
      ? `
  background-color: ${props.color} !important
  `
      : `
  background-color: ${props.theme.colors.accent} !important
  `};
`

export const Content = styled.div`
  display: table;
  height: 100%;
  position: relative;
  table-layout: fixed !important;
  width: 100%;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  padding-right: 20px !important;
  padding-left: 20px !important;
`

export const Icon = styled.i`
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 15px;
  position: absolute;
  color: rgba(0, 0, 0, 0.08);
  font-size: 52px !important;
  line-height: 1;
`
