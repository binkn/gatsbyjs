import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Import theme module
import { SIZE, TYPE } from '../../themes/Typography'
import { Colors } from '../../themes/Colors'

// Define component NavLink
const NavLink = React.memo(props => {
  const {
    className,
    customStyle,
    href,
    onClick,
    target,
    children
  } = props

  return (
    <Link
      to={href}
      className={className}
      onClick={onClick}
      target={target}
      style={customStyle}
      activeClassName="active"
      exact
    >
      {children}
    </Link>
  )
})

// Defined styled component for Link
export default styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.color || Colors.black};
  font-family: ${props => props.fontFamily || TYPE.workSans};
  font-weight: bold;
  font-size: ${props => props.fontSize || SIZE.xBase};
  margin: 0 20px;

  &.active {
    color: ${Colors.carnation};
  }

  &:hover {
    color: ${Colors.carnation};
  }
`

// Defined Props Types
Link.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  customStyle: PropTypes.object,
  color: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.string
}

// Defined default Props
Link.defaultProps = {
  href: '',
  className: '',
  fontFamily: '',
  fontSize: '',
  customStyle: {},
  color: '',
  target: '',
  children: ''
}
