import styled from 'styled-components'
import { Button as BootstrapButton } from 'reactstrap'

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

export default Button
