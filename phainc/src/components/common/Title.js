import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// themes
import { Colors } from '../../themes/Colors'
import { SIZE, TYPE, WEIGHT } from '../../themes/Typography'

/**
 * Defined component Title
 */
const Title = React.memo(props => {
  const { className, customStyle, text } = props

  return (
    <h2
      style={customStyle}
      className={className}
    >
      {text}
    </h2>
  )
})

// Defined styled component for Title
export default styled(Title) `
  margin: 0;
  text-align: left;
  color: ${props => props.color || Colors.black};
  font-family: ${props => props.fontFamily || TYPE.workSans };
  font-weight: ${props => props.fontWeight || WEIGHT.base };
  font-size: ${props => props.fontSize || SIZE.base }
`

Title.propTypes = {
  text: PropTypes.string,
  customStyle: PropTypes.object,
  className: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string
}

Title.defaultProps = {
  text: '',
  customStyle: {},
  className: '',
  fontFamily: '',
  fontSize: '',
  fontWeight: '',
  color: ''
}
