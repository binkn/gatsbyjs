import React from 'react'
import PropTypes from 'prop-types'

// theme modules
import { SIZE, WEIGHT , TYPE } from '../../themes/Typography'
import { Colors } from '../../themes/Colors'

// components
import Description from './Description'

/**
 * Defined component
 */
const Percent = React.memo((props) => {
  const {
    numberText,
    characterText,
    infoText,
    className,
    customStyle
  } = props

  const {
    percentStyle,
    numberStyle,
    characterStyle,
    infoStyle
  } = customStyle

  return (
    <div
      className={className}
      style={percentStyle}
    >
      <React.Fragment>
        <Description
          text={numberText}
          fontSize={SIZE.mega}
          color={Colors.white}
          fontWeight={WEIGHT.base}
          customStyle={{
            display: 'inline-block',
            ...numberStyle
          }}
        />

        <Description
          fontFamily={TYPE.workSans}
          text={characterText}
          fontSize={SIZE.xxBig}
          fontWeight={WEIGHT.base}
          color={Colors.white}
          customStyle={{
            display: 'inline-block',
            verticalAlign: 'top',
            marginLeft: '4px',
            ...characterStyle
          }}
        />
      </React.Fragment>

      <Description
        text={infoText}
        color={Colors.white}
        customStyle={{
          width: '71%',
          margin: '0 30px',
          ...infoStyle
        }}
      />
    </div>
  )
})

export default Percent

// Defined Props Types
Percent.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
  numberText: PropTypes.string,
  characterText: PropTypes.string,
  infoText: PropTypes.string
}

// Defined default Props
Percent.defaultProps = {
  className: '',
  customStyle: {},
  numberText: '',
  characterText: '',
  infoText: ''
}
