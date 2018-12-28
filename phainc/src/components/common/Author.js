import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// components
import Image from './Image'
import Description from './Description'
import Title from './Title'

// theme module
import { Colors } from '../../themes/Colors'
import { SIZE, WEIGHT } from '../../themes/Typography'

const CustomDiv = styled.div`
  background: ${Colors.white};
  position: relative;
  top: -30px;
  margin: 0 20px;
  text-align: center;
  box-shadow: 0 10px 40px ${Colors.fourth};
  padding: 20px 0;
  border-radius: 4px;

  &:hover {
    background-image: linear-gradient(to right, ${Colors.violetRed}, ${Colors.salmon});

    h2, p {
      color: ${Colors.white};
    }
  }
`

/**
 * Defined component
 */
const Author = React.memo(props => {
  const {
    className,
    titleText,
    descriptionText,
    src,
    alt,
    customStyle
  } = props

  const {
    authorStyle,
    imgStyle,
    titleStyle,
    descriptionStyle,
    wrapperStyle
  } = customStyle

  return (
    <div
      className={className}
      style={authorStyle}
    >
      <Image
        src={src}
        alt={alt}
        customStyle={{
          width: 'inherit',
          ...imgStyle
        }}
      />

      <CustomDiv
        style={wrapperStyle}
      >
        <Title
          text={titleText}
          fontSize={SIZE.xLarge}
          fontWeight={WEIGHT.small}
          color={Colors.black}
          customStyle={{
            textAlign: 'center',
            lineHeight: '34px',
            ...titleStyle
          }}
        />

        <Description
          text={descriptionText}
          color={Colors.dustyGray}
          customStyle={{
            lineHeight: '26px',
            ...descriptionStyle
          }}
        />
      </CustomDiv>
    </div>
  )
})

export default Author

// Defined Props Types
Author.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  customStyle: PropTypes.object,
  titleText: PropTypes.string,
  descriptionText: PropTypes.string
}

// Defined default Props
Author.defaultProps = {
  className: '',
  src: '',
  alt: '',
  customStyle: {},
  titleText: '',
  descriptionText: ''
}
