import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

// Import common component
import Image from './Image'

// Defined style for Logo Link
const LogoLink = styled(Link)`
  ${props => css`${props.styles}`};
`

// Define Logo
const Logo = React.memo(props => {
  const { src, alt, customStyle, to } = props
  const { imgStyle, linkStyle } = customStyle

  return (
    <LogoLink
      styles={linkStyle}
      to={to}
    >
      <Image
        src={src}
        alt={alt}
        customStyle={imgStyle}
      />
    </LogoLink>
  )
})

export default Logo

Logo.propTypes = {
  src: PropTypes.string,
  customStyle: PropTypes.object,
  alt: PropTypes.string,
  to: PropTypes.string
}

Logo.defaultProps = {
  src: '',
  customStyle: {},
  alt: '',
  to: ''
}
