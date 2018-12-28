import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
 * Defined component Image
 */
const Image = React.memo(props => {
  const {
    className,
    customStyle,
    src,
    alt
  } = props

  return (
    <img
      style={customStyle}
      src={src}
      alt={alt}
      className={className}
    />
  )
})

// Defined styled component for Image
export default styled(Image)`
  cursor: pointer;
  margin: 0;
`

// Defined Props Types
Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  customStyle: PropTypes.object
}

// Defined default Props
Image.defaultProps = {
  className: '',
  src: '',
  alt: '',
  customStyle: {}
}
