import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

// Themes
import { Colors } from '../../themes/Colors'
import { px2Rem } from '../../themes/Mixins'

const Button = (props) => (
  <button
    style={props.customStyle}
    onClick={props.onPress}
    className={props.className}
  >
    {props.text}
  </button>
)

export default styled(Button)`
  height: ${px2Rem(30)};
  border-radius: ${px2Rem(7)};
  border: ${px2Rem(1)} solid transparent;
  font-size: ${px2Rem(14)};
  padding: ${px2Rem(6)} ${px2Rem(12)};
  margin: ${px2Rem(15)};
  text-transform: uppercase;
  cursor: pointer;

  :hover {
    opacity: 0.4;
  }

  ${props => props.type === 'default' && css`
    color: ${Colors.white};
    background-color: ${Colors.aquamarine};
  `};

  ${props => props.type === 'primary' && css`
    background-color: ${Colors.turquoise};
    color: ${Colors.white};
    border-color: ${Colors.white};
  `};

  ${props => props.type === 'secondary' && css`
    background-color: ${Colors.white};
    color: ${Colors.black};
  `};

  ${props => props.type === 'third' && css`
    background-color: ${Colors.black};
    color: ${Colors.white};
  `};
`
Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  customStyle: PropTypes.object,
  className: PropTypes.string
}

Button.defaultProps = {
  text: '',
  onPress: () => {},
  customStyle: {},
  className: ''
}
