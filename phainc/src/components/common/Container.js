import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * Defined component
 */
const Container = React.memo(props => {
  const { className, customStyle, children } = props

  return (
    <div
      className={className}
      style={customStyle}
    >
      {children}
    </div>
  )
})

// Defined styled component
export default styled(Container)`
  margin: 0 57px 0;
`

// Defined Props Types
Container.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
  children: PropTypes.object
}

// Defined default Props
Container.defaultProps = {
  className: '',
  customStyle: {},
  children: {}
}
