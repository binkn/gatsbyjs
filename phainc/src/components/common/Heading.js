import React from 'react'
import PropTypes from 'prop-types'

// components
import Description from './Description'
import Title from './Title'

// themes
import { Colors } from '../../themes/Colors'
import { TYPE, SIZE, WEIGHT } from '../../themes/Typography'

/**
 * Defined component
 */
const Heading = React.memo(props => {
  const {
    className,
    customStyle,
    titleText,
    descriptionText,
    isExtend,
    extendText
  } = props

  const {
    headingStyle,
    titleStyle,
    descriptionStyle,
    extendStyle
  } = customStyle

  return (
    <div
      className={className}
      style={headingStyle}
    >
      <Title
        text={titleText}
        color={Colors.carnation}
        fontFamily={TYPE.roboto}
        fontSize={SIZE.xSmall}
        fontWeight={WEIGHT.xSmall}
        customStyle={{
          letterSpacing: '1px',
          textTransform: 'uppercase',
          lineHeight: '24px',
          ...titleStyle
        }}
      />

      <Description
        text={descriptionText}
        color={Colors.mineShaft}
        fontFamily={TYPE.workSans}
        fontSize={SIZE.xBig}
        fontWeight={WEIGHT.base}
        customStyle={{
          lineHeight: '55px',
          textTransform: 'none',
          ...descriptionStyle
        }}
      />

      {isExtend &&
        <Description
          text={extendText}
          customStyle={{
            ...extendStyle
          }}
        />
      }
    </div>
  )
})

export default Heading

// Defined Props Types
Heading.propTypes = {
  className: PropTypes.string,
  titleText: PropTypes.string,
  descriptionText: PropTypes.string,
  customStyle: PropTypes.object,
  isExtend: PropTypes.bool,
  extendText: PropTypes.string
}

// Defined default Props
Heading.defaultProps = {
  className: '',
  titleText: '',
  descriptionText: '',
  customStyle: {},
  isExtend: true,
  extendText: ''
}
