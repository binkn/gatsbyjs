import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Import theme module
import { Colors } from '../../themes/Colors'
import { TYPE, WEIGHT, SIZE } from '../../themes/Typography'

/**
 * Defined component Description
 */
const Description = React.memo(props => {
  const { className, customStyle, text } = props

  return (
    <p
      style={customStyle}
      className={className}
    >
      {text}
    </p>
  )
})

// Defined styled component for Description
export default styled(Description)`
  margin: 0;
  text-align: center;
  color: ${props => props.color || Colors.dustyGray};
  font-family: ${props => props.fontFamily || TYPE.roboto};
  font-size: ${props => props.fontSize || SIZE.small};
  font-weight: ${props => props.fontWeight || WEIGHT.xxSmall};
`

Description.propTypes = {
  text: PropTypes.string,
  customStyle: PropTypes.object,
  className: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string
}

Description.defaultProps = {
  text: '',
  customStyle: {},
  className: '',
  fontFamily: '',
  fontSize: '',
  fontWeight: '',
  color: ''
}
