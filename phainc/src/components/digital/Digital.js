import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// components
import Images from '../../themes/Images'
import Heading from '../common/Heading'
import Button from '../common/Button'

// theme module
import { Colors } from '../../themes/Colors'
import Icons from '../../themes/Icons'

// data
import DataDigital from '../../constants/digital'

const Digital = React.memo(props => {
  const { className, customStyle } = props
  const { descriptionText, extendText } = DataDigital

  return (
    <div
      className={className}
      style={customStyle}
    >
      <Heading
        isExtend
        descriptionText={descriptionText}
        extendText={extendText}
        customStyle={{
          headingStyle: {
            backgroundColor: `${Colors.white}`,
            padding: '70px 50px 40px',
            width: '45%',
            marginRight: '90px'
          },
          descriptionStyle: {
            fontSize: '40px',
            lineHeight: '46px',
            textAlign: 'left',
            paddingBottom: '20px'
          },
          extendStyle: {
            fontSize: '16px',
            lineHeight: '26px',
            textAlign: 'left'
          }
        }}
      />

      <Button
        src={Icons.playIcon}
        alt='play icon'
        customStyle={{
          buttonStyle: {
            border: 'none',
            marginLeft: '80px'
          }
        }}
      />
    </div>
  )
})

export default styled(Digital)`
  background: url(${Images.office});
  height: 541px;
  position: relative;
  box-sizing: border-box;
  width: 1255px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 57px 80px;
  margin-top: 55px;
  display: flex;
`

// Defined Props Types
Digital.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object
}

// Defined default Props
Digital.defaultProps = {
  className: '',
  customStyle: {}
}
