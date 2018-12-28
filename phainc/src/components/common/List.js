import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// components
import Image from './Image'

/**
 * Defined component List
 */
const List = React.memo(props => {
  const {
    className,
    customStyle,
    items,
    isOrdered,
    src,
    alt,
    isImage
  } = props

  const { wrapperStyle, liStyle, imgStyle } = customStyle

  const Wrapper = (isOrdered ? styled.ol`` : styled.ul``).extend`
  list-style: ${isOrdered ? 'decimal': 'none' };
  padding: 0;
`

  return (
    <Wrapper
      className={className}
      style={wrapperStyle}
    >
      {items.map(item=> (
        <li
          key={item.id}
          style={liStyle}
        >
          {!isOrdered  && isImage ?
            <Image
              src={src}
              alt={alt}
              customStyle={imgStyle}
            />
            :
            <React.Fragment/>
          }
          {item.name}
        </li>
      ))}
    </Wrapper>
  )
}
)

// Defined styled component for List
export default styled(List)`
  cursor: pointer;
  margin: 0;
  width: 100%;
`

// Defined Props Types
List.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  customStyle: PropTypes.object,
  items: PropTypes.object,
  isOrdered: PropTypes.bool,
  isImage: PropTypes.bool
}

// Defined default Props
List.defaultProps = {
  className: '',
  src: '',
  alt: '',
  items: {},
  customStyle: {},
  isOrdered: true,
  isImage: true
}
