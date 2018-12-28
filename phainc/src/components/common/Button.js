import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

// Themes
import { Colors } from '../../themes/Colors'
import { SIZE, TYPE } from '../../themes/Typography'

// components
import Image from '../common/Image'

const Button = React.memo(props => {
  const { className, customStyle, text, onPress, src } = props
  const { buttonStyle, imgStyle } = customStyle

  return (
    <button
      type='button'
      style={buttonStyle}
      className={className}
      onClick={onPress}
    >
      {text ? text : ''}
      {
        src &&
        <Image
          src={props.src}
          alt={props.alt}
          customStyle={imgStyle}
        />
      }
    </button>
  )
})

export default styled(Button)`
  font-family: ${props => props.fontFamily || TYPE.roboto};
  font-weight: bold;
  font-size: ${props => props.fontSize || SIZE.xSmall};
  border: 2px solid ${Colors.concrete};
  background-color: transparent;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  padding: 12px 35px;
  letter-spacing: 0.3px;

  &:hover {
    color: ${Colors.carnation};
  }

  ${props => props.type === 'light' && css`
    color: ${Colors.white};

    &:hover {
      color: ${Colors.mineShaft};
      background-color: ${Colors.white};
    }
  `};

  ${props => props.type === 'dark' && css`
    color: ${Colors.mineShaft};

    &:hover {
      color: ${Colors.white};
      background-color: ${Colors.carnation};
    }
  `};

  ${props => props.type === 'glow' && css`
    background-image: linear-gradient(to right, ${Colors.violetRed}, ${Colors.salmon});
    color: ${Colors.white};

    &:hover {
      background-image: none;
      background-color: ${Colors.salmon};
    }
  `};

  ${props => props.type === 'transform' && css`
    color: ${Colors.carnation};
    border-color: ${Colors.carnation};
    position: relative;

    &:hover {
      color: ${Colors.white};
      background-image: linear-gradient(to right, ${Colors.violetRed}, ${Colors.salmon});
      box-shadow: 0 0px 15px ${Colors.primary};
      transform: translateY(-5px);
      border: none;
    }
  `};

  ${props => props.type === 'none-border' && css`
    background: none;
    color: ${Colors.malibu};
    border: none;
  `};
`

Button.propTypes = {
  text: PropTypes.string,
  customStyle: PropTypes.object,
  className: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  src: PropTypes.string,
  onPress: PropTypes.func
}

Button.defaultProps = {
  text: '',
  customStyle: {},
  className: '',
  fontFamily: '',
  fontSize: '',
  src: '',
  onPress: () => {}
}
