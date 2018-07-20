import styled from 'styled-components'

const TreeMenuItem = styled.li`
  padding: 5px;
  list-style-type: none;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.sidebar.treeMenuItemTextHover};
    background-color: ${props =>
      props.theme.colors.sidebar.treeMenuItemBackgroundHover};
  }
  ${props =>
    props.active &&
    `
    color: #fff !important;
    background-color: ${props.theme.colors.sidebar
      .treeMenuItemBackgroundActive || props.theme.colors.accent};
    &:hover {
      color: #fff;
    }
  `} position: relative;
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;
  padding-left: 44px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: ${props => props.theme.colors.sidebar.TreeMenuItemText};
  -webkit-transition-property: color, background;
  transition-property: color, background;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
`

export default TreeMenuItem
