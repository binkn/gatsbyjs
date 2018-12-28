import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = React.memo(props => {
  const {
    className,
    customStyle,
    name,
    defaultValue,
    placeHolder,
    id,
    inputRef,
    handleOnChange
  } = props

  return (
    <input
      className={className}
      style={customStyle}
      name={name}
      defaultValue={defaultValue}
      placeholder={placeHolder}
      id={id}
      ref={(ref) => inputRef(ref)}
      onChange={handleOnChange}
    />
  )
})

export default styled(Input)`
  height: 58px;
  border: none;
  border-radius: 30px;
  width: 330px;
  padding-left: 30px;
  font-size: 15px;
  outline: none;
`

// Defined Props Types
Input.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  placeHolder: PropTypes.string,
  id: PropTypes.string,
  inputRef: PropTypes.func,
  handleOnChange: PropTypes.func
}

// Defined default Props
Input.defaultProps = {
  className: '',
  customStyle: {},
  name: '',
  defaultValue: '',
  placeHolder: '',
  id: '',
  inputRef: '',
  handleOnChange: ''
}
