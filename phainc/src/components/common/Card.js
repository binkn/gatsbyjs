import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

// components
import Image from './Image'
import Title from './Title'
import Description from './Description'
import Button from './Button'

// themes
import Icons from '../../themes/Icons'
import { Colors } from '../../themes/Colors'

/**
 * Defined component
 */
const Card = React.memo(props => {
  const {
    className,
    customStyle,
    src,
    alt,
    titleText,
    descriptionText,
    isButton
  } = props

  const {
    cardStyle,
    titleStyle,
    descriptionStyle,
    imgStyle
  } = customStyle

  return (
    <article
      className={className}
      style={cardStyle}
    >
      <Image
        src={src}
        alt={alt}
        customStyle={{
          ...imgStyle
        }}
      />
      <Title
        text={titleText}
        customStyle={{
          textAlign: 'center',
          lineHeight: '28px',
          marginTop: '20px',
          marginBottom: '8px',
          ...titleStyle
        }}
      />
      <Description
        text={descriptionText}
        customStyle={{
          ...descriptionStyle
        }}
      />

      {isButton &&
        <Button
          src={Icons.moveIcon}
          alt='move icon'
          text='More'
          customStyle={{
            buttonStyle: {
              border: 'none',
              marginTop: '40px'
            },
            imgStyle: {
              width: 'inherit',
              paddingLeft: '30px'
            }
          }}
        />
      }
    </article>
  )
})

// Defined styled component
export default styled(Card)`
  width: 31%;
  box-shadow: 0 0px 40px ${Colors.second};
  border-radius: 4px;
  padding: 50px 25px 30px;
  height: 100%;

  &:hover {
    box-shadow: 0 0px 40px ${Colors.third};
  }

  ${props => props.type === 'transform' && css`
    &:hover {
      transform: translateY(-10px);
    }

    &:nth-child(2) {
    margin-top: -50px;
    }
  `}
`

// Defined Props Types
Card.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
  src: PropTypes.string,
  alt: PropTypes.string,
  titleText: PropTypes.string,
  descriptionText: PropTypes.string,
  type: PropTypes.string,
  isButton: PropTypes.bool
}

// Defined default Props
Card.defaultProps = {
  className: '',
  customStyle: {},
  src: '',
  alt: '',
  titleText: '',
  descriptionText: '',
  type: '',
  isButton: true
}
