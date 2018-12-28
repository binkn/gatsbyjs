import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// theme modules
import { Colors } from '../../../themes/Colors'

// components
import Title from '../../common/Title'
import List from '../../common/List'
import InfoData from '../../../constants/info'

const Info = React.memo(props => {
  const { className, customStyle } = props
  const { titleText, infoList } = InfoData

  return (
    <div
      className={className}
      style={customStyle}
    >
      <Title
        text={titleText}
        customStyle={{
          textTransform: 'upperCase',
          color: `${Colors.white}`,
          marginBottom: '50px'
        }}
      />
      <List
        items={infoList}
        isOrdered={false}
        isImage={false}
        customStyle={{
          liStyle: {
            textAlign: 'left',
            color: `${Colors.dustyGray}`
          }
        }}
      />
    </div>
  )
})

export default styled(Info)`
  flex: 0 0 20%;
  padding: 0 15px;
`

// Defined Props Types
Info.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object
}

// Defined default Props
Info.defaultProps = {
  className: '',
  customStyle: {}
}
