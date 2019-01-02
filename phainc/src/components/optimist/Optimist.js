import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// components
import Images from '../../themes/Images'
import Button from '../common/Button'
import Image from '../common/Image'
import Description from '../common/Description'

// theme module
import { Colors } from '../../themes/Colors'
import { TYPE , WEIGHT } from '../../themes/Typography'

// data
const Optimist = React.memo(props => {
  const { className, customStyle } = props

  return (
    <div
      className={className}
      style={customStyle}
    >

      <Image
        src={Images.officeAbout}
        alt='office about'
        customStyle={{
          width: '540px'
        }}
      />

      <div>
        <Description
          text='We are optimists who love to work together'
          fontSize='50px'
          color={Colors.white}
          fontFamily={TYPE.workSans}
          fontWeight={WEIGHT.base}
          customStyle={{
            textAlign: 'left',
            margin: '30px 0 30px 80px'
          }}
        />
        <Button
          text='Learn more'
          type='glow'
          customStyle={{
            buttonStyle: {
              border: 'none',
              marginLeft: '80px'
            }
          }}
        />
      </div>
    </div>
  )
})

export default styled(Optimist)`
  background: url(${Images.bgAboutBlur});
  height: 541px;
  position: relative;
  box-sizing: border-box;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 100px 80px;
  margin-top: 55px;
  display: flex;
`

// Defined Props Types
Optimist.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object
}

// Defined default Props
Optimist.defaultProps = {
  className: '',
  customStyle: {}
}
