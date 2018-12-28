import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Import common components
import Image from './Image'
import Title from './Title'
import Description from './Description'

// themes
import { SIZE, WEIGHT } from '../../themes/Typography'

// Define MediaBox
const MediaBox = React.memo(props => {
  const {
    className,
    src,
    alt,
    customStyle,
    titleText,
    descriptionText
  } = props

  const {
    imgStyle,
    titleStyle,
    descriptionStyle,
    mediaStyle
  } = customStyle

  return (
    <div
      className={className}
      style={mediaStyle}
    >
      <Image
        src={src}
        alt={alt}
        customStyle={{
          width: 'inherit',
          display: 'inline-block',
          verticalAlign: 'bottom',
          ...imgStyle
        }}
      />

      <Title
        text={titleText}
        fontSize={SIZE.base}
        fontWeight={WEIGHT.small}
        customStyle={{
          width: '52%',
          lineHeight: '28px',
          marginLeft: '17px',
          display: 'inline-block',
          verticalAlign: 'bottom',
          textAlign: 'left',
          ...titleStyle
        }}
      />

      <Description
        text={descriptionText}
        customStyle={{
          width: '89%',
          lineHeight: '26px',
          letterSpacing: '.3px',
          marginTop: '40px',
          textAlign: 'left',
          ...descriptionStyle
        }}
      />
    </div>
  )
})

export default styled(MediaBox)`
  text-align: left;
`

MediaBox.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  customStyle: PropTypes.object,
  titleText: PropTypes.string,
  descriptionText: PropTypes.string,
  alt: PropTypes.string
}

MediaBox.defaultProps = {
  src: '',
  className: '',
  customStyle: {},
  titleText: '',
  descriptionText: '',
  alt: ''
}
