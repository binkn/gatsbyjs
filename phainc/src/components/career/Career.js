import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// components
import Image from '../common/Image'
import Profit from '../profit/Profit'

// themes
import Icons from '../../themes/Icons'

// Data
import ProfitData from '../../constants/profit'
import Images from '../../themes/Images'

/**
 * Defined component
 */
const Career = React.memo(props => {
  const { className, customStyle } = props
  const { info, career } = ProfitData

  return (
    <div
      className={className}
      style={customStyle}
    >
      <Image
        src={Images.meeting}
        alt='meeting'
        customStyle={{
          width: 'inherit'
        }}
      />

      <Profit
        info={info}
        items={career}
        src={Icons.dotIcon}
        alt='icon'
        textButton='More About Us'
        customStyle={{
          marginLeft: '65px',
          marginRight: '100px',
          paddingTop: '40px'
        }}
      />
    </div>
  )
})

// Defined styled component
export default styled(Career)`
  display: flex;
  margin-top: 130px;
`

// Defined Props Types
Career.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object
}

// Defined default Props
Career.defaultProps = {
  className: '',
  customStyle: {}
}
